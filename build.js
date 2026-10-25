const fs = require('node:fs/promises');
const path = require('node:path');

async function main() {
  const root = __dirname;
  const dist = path.join(root, 'dist');
  const source = path.join(root, 'Gearsanalytics-Space-No-Cards.html');
  const logoPath = path.join(root, 'gears-mark.svg');
  let html = await fs.readFile(source, 'utf8');

  const uploadMarkup =
    'onClick:u,children:[s("input",{ref:P,type:"file",accept:"image/*",className:"hidden",onChange:l}),r?j(';
  if (!html.includes(uploadMarkup)) {
    throw new Error('Could not find the source image-upload control to disable');
  }
  html = html.replace(uploadMarkup, 'children:[r?j(');
  html = html.replace(
    'className:`relative group overflow-hidden cursor-pointer ${n||""}`',
    'className:`relative group overflow-hidden ${n||""}`'
  );
  html = html.replaceAll('children:"CLICK TO REPLACE"', 'children:""');
  if (html.includes('type:"file"') || html.includes('CLICK TO REPLACE')) {
    throw new Error('Viewer image-edit controls remain in the generated page');
  }
  const activeSections =
    'let t=["home","service","about","methods","publications","contacts"]';
  const navigationLinks =
    'let r=[["home","Home"],["service","Service"],["about","About"],["methods","Methods"],["publications","Publications"],["contacts","Contacts"]]';
  const menuButton =
    's("button",{onClick:()=>e((t)=>!t),className:"md:hidden text-[11px] tracking-[0.18em] uppercase border border-[var(--blue)] text-[var(--blue)] px-4 py-2 font-bold hover:bg-[var(--blue)] hover:text-white transition-colors",children:f?"Close":"Menu"})';
  const mobileNavigation =
    'f&&s("div",{className:"md:hidden border-t border-[var(--blue)]/20 px-6 py-6 flex flex-col gap-4 text-[12px] tracking-[0.16em] uppercase bg-white font-medium"';
  const mobileNavigationChildren =
    'className:"md:hidden border-t border-[var(--blue)]/20 px-6 py-6 flex flex-col gap-4 text-[12px] tracking-[0.16em] uppercase bg-white font-medium",children:r.map';
  for (const [marker, label] of [
    [activeSections, 'section tracking'],
    [navigationLinks, 'navigation links'],
    [menuButton, 'mobile menu button'],
    [mobileNavigation, 'mobile navigation panel'],
    [mobileNavigationChildren, 'mobile navigation contents'],
  ]) {
    if (!html.includes(marker)) {
      throw new Error(`Could not find the source ${label} to update`);
    }
  }
  html = html
    .replace(
      activeSections,
      'let t=["home","service","about","methods","publications","plans","contacts"]'
    )
    .replace(
      navigationLinks,
      'let r=[["home","Home"],["service","Service"],["about","About"],["methods","Methods"],["publications","Publications"],["plans","Price & Plans"],["contacts","Contacts"]]'
    )
    .replace(
      menuButton,
      's("button",{"aria-controls":"mobile-navigation","aria-expanded":f,onClick:()=>e((t)=>!t),className:"md:hidden text-[11px] tracking-[0.18em] uppercase border border-[var(--blue)] text-[var(--blue)] px-4 py-2 font-bold hover:bg-[var(--blue)] hover:text-white transition-colors",children:f?"Close":"Menu"})'
    )
    .replace(
      mobileNavigation,
      'f&&s("div",{id:"mobile-navigation",className:"md:hidden border-t border-[var(--blue)]/20 px-6 py-6 flex flex-col gap-4 text-[12px] tracking-[0.16em] uppercase bg-white font-medium"'
    )
    .replace(
      mobileNavigationChildren,
      'className:"md:hidden border-t border-[var(--blue)]/20 px-6 py-6 flex flex-col gap-4 text-[12px] tracking-[0.16em] uppercase bg-white font-medium",children:[s("div",{className:"mobile-menu-brand",children:[s("img",{src:"gears-mark.svg",alt:"Gears Analytics logo"}),s("span",{children:"Gears Analytics"})]}),r.map'
    );
  const mobilePanelStart = html.indexOf('f&&s("div",{id:"mobile-navigation"');
  const mobilePanelClose = '},t))})]})';
  const mobilePanelCloseIndex = html.indexOf(mobilePanelClose, mobilePanelStart);
  if (mobilePanelStart < 0 || mobilePanelCloseIndex < 0) {
    throw new Error('Could not close the mobile navigation contents correctly');
  }
  html =
    html.slice(0, mobilePanelCloseIndex) +
    '},t))]})]})' +
    html.slice(mobilePanelCloseIndex + mobilePanelClose.length);
  const designNote =
    'j("span",{className:"hidden md:inline-flex items-center gap-2",contentEditable:!0,suppressContentEditableWarning:!0,children:[s("span",{className:"w-2 h-2 bg-[var(--blue)] rounded-full"}),"Swiss grid • Sans only • Blue fields • No cards"]})';
  const blueNote =
    'j("div",{className:"mt-8 inline-flex items-center gap-2 text-[11px] font-body tracking-[0.12em] uppercase text-[var(--blue)] font-bold",children:[s("span",{className:"w-2 h-2 bg-[var(--blue)] rounded-full"}),s("span",{contentEditable:!0,suppressContentEditableWarning:!0,children:"Blue = expressive / critical"})]})';
  if (!html.includes(designNote) || !html.includes(blueNote)) {
    throw new Error('Could not find the design notes to remove from the selected source');
  }
  html = html.replace(designNote, 'null').replace(blueNote, 'null');
  if (html.includes('Swiss grid') || html.includes('Blue = expressive / critical')) {
    throw new Error('Editorial design notes remain in the generated page');
  }
  html = html.replace(
    '<title>React Artifact</title>',
    '<title>Gears Analytics | Research &amp; Development</title>'
  );
  html = html.replace(/[ \t]+$/gm, '');

  const bodyClose = '</body>';
  if (!html.includes(bodyClose)) {
    throw new Error(`${path.basename(source)} is missing its closing </body> tag`);
  }
  const page = html.replace(
    bodyClose,
    '<script src="site-enhancements.js" defer></script>\n' + bodyClose
  );

  const logoSvg = await fs.readFile(logoPath, 'utf8');
  if (!logoSvg.includes('<svg') || !logoSvg.includes('</svg>')) {
    throw new Error('gears-mark.svg is missing valid SVG markup');
  }

  await fs.rm(dist, { recursive: true, force: true });
  await fs.mkdir(dist, { recursive: true });
  await fs.writeFile(path.join(root, 'index.html'), page);
  await fs.writeFile(path.join(dist, 'index.html'), page);
  await fs.copyFile(logoPath, path.join(dist, 'gears-mark.svg'));
  await fs.copyFile(
    path.join(root, 'site-enhancements.js'),
    path.join(dist, 'site-enhancements.js')
  );
  await fs.cp(path.join(root, 'team'), path.join(dist, 'team'), { recursive: true });
  process.stdout.write('Built static site to dist/\n');
}

main().catch((error) => {
  process.stderr.write(String(error.stack || error) + '\n');
  process.exitCode = 1;
});
