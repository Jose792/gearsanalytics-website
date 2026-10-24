(() => {
  const scriptUrl = document.currentScript.src;
  const teamPhotos = [
    {
      file: 'Joseph Mwita.jpeg',
      alt: 'Portrait of Joseph Mwita',
      caption: 'Joseph Mwita',
    },
    {
      file: 'Majyd and Wema Shadida.jpg',
      alt: 'Team photo of Majyd and Wema Shadida',
      caption: 'Majyd and Wema Shadida',
    },
    {
      file: 'PXL_20250821_124757857.PORTRAIT.jpg',
      alt: 'Team photo; the image file does not identify the people',
      caption: 'Team at field',
    },
    {
      file: 'PXL_20250930_115022913.RAW-01.COVER.jpg',
      alt: 'Team photo; the image file does not identify the people',
      caption: 'Team at field',
    },
    {
      file: 'Rajabu Mgoneka.jpeg',
      alt: 'Portrait of Rajabu Mgoneka',
      caption: 'Rajabu Mgoneka',
    },
    {
      file: 'Rosemary sam.jpeg',
      alt: 'Portrait of Rosemary Sam',
      caption: 'Rosemary Sam',
    },
  ];

  const style = document.createElement('style');
  style.textContent = `
    .contact-icon-links {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 14px;
      margin-top: 36px;
    }
    .contact-icon-link {
      display: inline-flex;
      width: 48px;
      height: 48px;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(255, 255, 255, .32);
      border-radius: 50%;
      color: #fff;
      transition: color .18s ease, background-color .18s ease, border-color .18s ease;
    }
    .contact-icon-link:hover {
      border-color: #fff;
      background: rgba(255, 255, 255, .12);
    }
    .contact-icon-link:focus-visible {
      outline: 3px solid #b9d6ff;
      outline-offset: 3px;
    }
    .contact-icon-link svg {
      width: 22px;
      height: 22px;
      fill: none;
      stroke: currentColor;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 1.7;
    }
    .contact-icon-link .icon-fill {
      fill: currentColor;
      stroke: none;
    }
    .team-photo-gallery {
      display: grid !important;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 20px;
      width: min(100%, 960px);
      margin: 0 0 24px;
    }
    .team-photo-item {
      min-width: 0;
      margin: 0;
    }
    .team-photo-item img {
      display: block;
      width: 100%;
      aspect-ratio: 4 / 3;
      object-fit: cover;
      border-radius: 10px;
      border: 1px solid var(--line);
      background: var(--blue-pale);
    }
    .team-photo-caption {
      padding-top: 8px;
      color: var(--muted);
      font-size: 13px;
      line-height: 1.4;
    }
    .site-footer-brand {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      margin-bottom: 22px;
      color: #fff;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: .02em;
    }
    .site-footer-brand img {
      display: block;
      width: 42px;
      height: 42px;
    }
    @media (max-width: 640px) {
      .team-photo-gallery {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16px 12px;
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .contact-icon-link {
        transition: none;
      }
    }
  `;
  document.head.appendChild(style);

  const contactIcons = [
    {
      label: 'Email Gears Analytics',
      href: 'mailto:admini@gearsanalytics.space',
      svg: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    },
    {
      label: 'Message Gears Analytics on WhatsApp',
      href: 'https://wa.me/255699577955',
      svg: '<path d="M20.5 11.8a8.6 8.6 0 0 1-12.7 7.5L3 21l1.7-4.6a8.6 8.6 0 1 1 15.8-4.6Z"/><path d="M8.2 8.2c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.5.6c-.2.2-.2.4-.1.6.4.8 1.1 1.5 1.9 1.9.2.1.4.1.6-.1l.6-.5c.2-.2.4-.2.6-.1l1.6.7c.3.1.4.3.4.5 0 .3-.2 1-.6 1.3-.4.4-1 .6-1.5.6s-1.2-.1-2.2-.6c-1.1-.5-2.1-1.4-2.9-2.4-.8-1-1.3-2-1.3-2.8 0-.8.4-1.3.7-1.8Z"/>',
    },
    {
      label: 'Visit Gears Analytics on LinkedIn',
      href: 'https://www.linkedin.com/company/research-gears-da',
      svg: '<path class="icon-fill" d="M5.2 8.5a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4ZM3.7 10h3v10h-3zM11.4 10H8.5v10h3v-5.2c0-1.4.3-2.8 2-2.8s1.8 1.6 1.8 2.9V20h3v-5.8c0-2.8-.6-4.9-3.8-4.9-1.5 0-2.5.8-3 1.6h-.1V10Z"/>',
    },
    {
      label: 'Call Gears Analytics',
      href: 'tel:+255699577955',
      svg: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.8l-1.4 1.4a16 16 0 0 0 5.8 5.8l1.4-1.4a2 2 0 0 1 1.8-.6l3 .5a2 2 0 0 1 1.5 1.7Z"/>',
    },
  ];

  const enforceReadOnly = () => {
    document.designMode = 'off';
    for (const element of [document.documentElement, document.body]) {
      if (element && element.getAttribute('contenteditable') !== 'false') {
        element.setAttribute('contenteditable', 'false');
      }
    }
    document.querySelectorAll('[contenteditable]').forEach((element) => {
      if (element !== document.documentElement && element !== document.body) {
        element.removeAttribute('contenteditable');
      }
    });
    document.querySelectorAll('input[type="file"]').forEach((input) => input.remove());
  };

  const addContactIcons = () => {
    const heading = [...document.querySelectorAll('#contacts h2')]
      .find((element) => element.textContent.trim() === 'Contacts');
    if (!heading || heading.parentElement.querySelector('.contact-icon-links')) return;

    const details = heading.nextElementSibling;
    if (details) {
      details.hidden = true;
      details.setAttribute('aria-hidden', 'true');
    }

    const links = document.createElement('div');
    links.className = 'contact-icon-links';
    links.setAttribute('role', 'group');
    links.setAttribute('aria-label', 'Contact Gears Analytics');
    contactIcons.forEach(({ label, href, svg }) => {
      const link = document.createElement('a');
      link.className = 'contact-icon-link';
      link.href = href;
      link.title = label;
      link.setAttribute('aria-label', label);
      if (href.startsWith('https://')) {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      }
      link.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${svg}</svg>`;
      links.appendChild(link);
    });
    heading.after(links);
  };

  const replaceTeamAvatars = () => {
    const avatars = [...document.querySelectorAll('img[alt="Team avatar"]')];
    const gallery = avatars[0]?.parentElement?.parentElement;
    if (!gallery) return;

    if (gallery.dataset.teamPhotosReady !== 'true') {
      gallery.dataset.teamPhotosReady = 'true';
      gallery.className = 'team-photo-gallery';
      gallery.setAttribute('aria-label', 'Team and field photos');
      gallery.replaceChildren();
      teamPhotos.forEach(({ file, alt, caption }) => {
        const item = document.createElement('figure');
        item.className = 'team-photo-item';
        const image = document.createElement('img');
        image.src = new URL(`team/${encodeURIComponent(file)}`, scriptUrl).href;
        image.alt = alt;
        image.loading = 'lazy';
        image.decoding = 'async';
        const label = document.createElement('figcaption');
        label.className = 'team-photo-caption';
        label.textContent = caption;
        item.append(image, label);
        gallery.appendChild(item);
      });
    }

    const memberNames = gallery.nextElementSibling;
    memberNames?.querySelectorAll('span').forEach((name) => {
      if (name.textContent.trim() === 'Rajab Mgoneka') {
        name.textContent = 'Rajabu Mgoneka';
      }
    });
  };

  const addServiceSolutions = () => {
    const section = document.querySelector('#service');
    if (!section) return;

    const firstNumber = [...section.querySelectorAll('span')]
      .find((element) => element.textContent.trim() === '01');
    const firstRow = firstNumber?.parentElement;
    const rows = firstRow?.parentElement;
    if (!firstRow || !rows || rows.dataset.expandedSolutions === 'true') return;

    firstRow.parentElement.querySelectorAll(':scope > div').forEach((row) => {
      const title = row.children[1];
      if (title?.textContent.trim() === 'Planning & Strategic insights') {
        title.textContent = 'Strategic insights & planning';
      }
    });

    const solutions = ['Marketing solutions', 'Business solutions', 'AI solutions'];
    solutions.forEach((label) => {
      const row = firstRow.cloneNode(false);
      const number = firstRow.children[0].cloneNode(false);
      number.textContent = String(rows.children.length + 1).padStart(2, '0');
      const title = firstRow.children[1].cloneNode(false);
      title.textContent = label;
      row.append(number, title, firstRow.children[2].cloneNode(true));
      rows.appendChild(row);
    });
    rows.dataset.expandedSolutions = 'true';
  };

  const removeGeneratedPeoplePhoto = () => {
    document.querySelectorAll('img[alt="We serve image"]').forEach((image) => {
      image.closest('.relative.group')?.remove();
    });
  };

  const addFooterLogo = () => {
    const copyright = [...document.querySelectorAll('#contacts span')]
      .find((element) => element.textContent.includes('Gears Analytics @2026 All rights reserved'));
    const container = copyright?.parentElement;
    if (!container || container.querySelector('.site-footer-brand')) return;

    const brand = document.createElement('div');
    brand.className = 'site-footer-brand';
    const image = document.createElement('img');
    image.src = new URL('gears-mark.svg', scriptUrl).href;
    image.alt = 'Gears Analytics logo';
    const name = document.createElement('span');
    name.textContent = 'Gears Analytics';
    brand.append(image, name);
    container.prepend(brand);
  };

  const updatePage = () => {
    enforceReadOnly();
    addContactIcons();
    addServiceSolutions();
    replaceTeamAvatars();
    removeGeneratedPeoplePhoto();
    addFooterLogo();
  };

  updatePage();
  new MutationObserver(updatePage).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['contenteditable'],
    childList: true,
    subtree: true,
  });
})();
