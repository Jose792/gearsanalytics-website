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
