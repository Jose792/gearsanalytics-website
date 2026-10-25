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
    .team-photo-gallery[hidden] {
      display: none !important;
    }
    .team-photo-toggle {
      margin: 0 0 20px;
      padding: 9px 14px;
      border: 1px solid var(--line);
      color: var(--blue);
      font-size: 12px;
      font-weight: 600;
      letter-spacing: .04em;
      cursor: pointer;
    }
    .team-details-panel[hidden] {
      display: none !important;
    }
    .team-member-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 8px 20px;
      margin-top: 20px;
      padding: 0;
      list-style: none;
    }
    .team-member-list li {
      color: var(--muted);
      font-size: 14px;
    }
    .team-photo-toggle:hover {
      background: var(--blue-pale);
    }
    .team-photo-toggle:focus-visible {
      outline: 3px solid var(--blue);
      outline-offset: 3px;
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
    .core-values-list {
      display: grid;
      gap: 8px;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .core-values-list li {
      padding: 0 0 8px;
      border-bottom: 1px solid var(--line);
      color: var(--navy);
      font-size: 14px;
    }
    .research-work-link {
      width: 100%;
      color: inherit;
      text-decoration: none;
    }
    .research-work-link:focus-visible {
      outline: 3px solid var(--blue);
      outline-offset: 3px;
    }
    .show-more-toggle {
      margin-top: 14px;
      padding: 8px 0;
      border: 0;
      background: transparent;
      color: var(--blue);
      font-size: 12px;
      font-weight: 700;
      letter-spacing: .08em;
      text-transform: uppercase;
      cursor: pointer;
    }
    .show-more-toggle:hover {
      text-decoration: underline;
      text-underline-offset: 4px;
    }
    .show-more-toggle:focus-visible {
      outline: 3px solid var(--blue);
      outline-offset: 3px;
    }
    .story-copy:not(.is-expanded) {
      display: -webkit-box;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
    }
    #publications li[hidden] {
      display: none !important;
    }
    .site-menu-toggle {
      align-items: center;
      gap: 8px;
      border: 1px solid var(--blue) !important;
      background: var(--blue) !important;
      color: #fff !important;
      padding: 7px 10px !important;
      vertical-align: middle;
      white-space: nowrap;
    }
    .site-menu-icon {
      display: inline-grid;
      width: 26px;
      height: 26px;
      place-items: center;
      border-radius: 3px;
      background: rgba(255, 255, 255, .18);
    }
    .site-menu-icon svg {
      width: 16px;
      height: 16px;
      fill: none;
      stroke: currentColor;
      stroke-linecap: round;
      stroke-width: 2;
    }
    .mobile-nav-panel {
      border-color: rgba(255, 255, 255, .28) !important;
      background: var(--blue) !important;
      color: #fff !important;
    }
    .mobile-nav-panel a {
      display: block;
      border-radius: 3px;
      color: #fff !important;
      padding: 8px 10px;
      text-decoration: none;
    }
    .mobile-nav-panel a:hover,
    .mobile-nav-panel a:focus-visible {
      background: rgba(255, 255, 255, .16);
      outline: none;
    }
    .mobile-nav-panel a.mobile-nav-active {
      background: rgba(255, 255, 255, .2);
      font-weight: 700;
      text-decoration: underline;
      text-underline-offset: 5px;
    }
    .pricing-plans-section .pricing-quote-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      min-height: 46px;
      padding: 10px 16px;
      border: 1px solid #fff;
      background: #fff;
      color: var(--blue);
      font-size: 12px;
      font-weight: 700;
      letter-spacing: .08em;
      text-decoration: none;
      text-transform: uppercase;
    }
    .pricing-plans-section .pricing-quote-link:hover {
      background: transparent;
      color: #fff;
    }
    .pricing-plans-section .pricing-quote-link:focus-visible {
      outline: 3px solid #fff;
      outline-offset: 3px;
    }
    .pricing-plans-section {
      padding: clamp(56px, 9vw, 112px) 0;
      background: var(--blue);
      color: #fff;
    }
    .pricing-plans-content {
      width: min(100%, 1400px);
      margin: 0 auto;
      padding: 0 24px;
    }
    .pricing-plans-label {
      margin: 0 0 20px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: .2em;
      text-transform: uppercase;
    }
    .pricing-plans-heading {
      max-width: 18ch;
      margin: 0 0 20px;
      font-size: clamp(36px, 6vw, 64px);
      font-weight: 700;
      line-height: 1.08;
    }
    .pricing-plans-description {
      max-width: 60ch;
      margin: 0 0 32px;
      font-size: 16px;
      line-height: 1.65;
    }
    .pricing-plans-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
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
    @media (max-width: 767px) {
      .site-menu-toggle {
        display: inline-flex !important;
      }
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
    {
      label: 'View pricing and plans',
      href: '#plans',
      svg: '<path d="M4 5h16v14H4z"/><path d="M8 9h8M8 13h5"/><path d="m16 16 1.5 1.5L20 15"/>',
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

  const styleNavigation = () => {
    const header = document.querySelector('header');
    const button = header?.querySelector('button');
    if (button) {
      const isOpen = button.textContent.trim().toLowerCase().includes('close');
      button.classList.add('site-menu-toggle');
      button.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
      button.setAttribute('aria-expanded', String(isOpen));
      let icon = button.querySelector('.site-menu-icon');
      if (!icon) {
        icon = document.createElement('span');
        icon.className = 'site-menu-icon';
        icon.setAttribute('aria-hidden', 'true');
        button.prepend(icon);
      }
      const iconState = String(isOpen);
      if (icon.dataset.menuOpen !== iconState) {
        icon.innerHTML = isOpen
          ? '<svg viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18"/></svg>'
          : '<svg viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>';
        icon.dataset.menuOpen = iconState;
      }
      let label = button.querySelector('.site-menu-label');
      if (!label) {
        label = document.createElement('span');
        label.className = 'site-menu-label';
        button.appendChild(label);
      }
      label.textContent = isOpen ? 'Close' : 'Menu';
    }

    const addPlansLink = (navigation) => {
      if (!navigation || navigation.querySelector('a[href="#plans"]')) return;
      const contactsLink = navigation.querySelector('a[href="#contacts"]');
      if (!contactsLink) return;
      const plansLink = contactsLink.cloneNode(true);
      plansLink.href = '#plans';
      plansLink.setAttribute('aria-label', 'Price and plans');
      const label = plansLink.querySelector('span');
      if (label) label.textContent = 'Price & Plans';
      contactsLink.after(plansLink);
    };

    addPlansLink(header?.querySelector('nav'));
    const panel = header?.querySelector('div[class*="md:hidden"][class*="border-t"]');
    if (panel) {
      panel.classList.add('mobile-nav-panel');
      panel.id = 'primary-mobile-navigation';
      button?.setAttribute('aria-controls', panel.id);
      addPlansLink(panel);
      panel.querySelectorAll('a').forEach((link) => {
        link.classList.toggle('mobile-nav-active', link.classList.contains('text-[var(--blue)]'));
      });
    }
  };

  const addPricingPlans = () => {
    const services = document.querySelector('#service');
    if (!services || document.querySelector('#plans')) return;

    const section = document.createElement('section');
    section.id = 'plans';
    section.className = 'pricing-plans-section bg-[var(--blue)] py-20 text-white md:py-28';
    section.setAttribute('aria-labelledby', 'pricing-plans-heading');

    const content = document.createElement('div');
    content.className = 'pricing-plans-content mx-auto max-w-[1400px] px-6 md:px-10';
    const eyebrow = document.createElement('p');
    eyebrow.className = 'pricing-plans-label mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-white';
    eyebrow.textContent = 'Pricing & plans';
    const heading = document.createElement('h2');
    heading.id = 'pricing-plans-heading';
    heading.className = 'pricing-plans-heading mb-5 max-w-[18ch] font-display text-4xl font-bold leading-tight md:text-6xl';
    heading.textContent = 'Request a quote';
    const description = document.createElement('p');
    description.className = 'pricing-plans-description mb-8 max-w-[60ch] text-base leading-relaxed text-white';
    description.textContent =
      'Tell us what you need and we will respond with a suitable plan and pricing. Contact us by WhatsApp or email to request a quote.';

    const message =
      'Hello Gears Analytics, I would like to request your available plans and a quote for my project. Project details:';
    const whatsapp = document.createElement('a');
    whatsapp.className = 'pricing-quote-link';
    whatsapp.href = `https://wa.me/255699577955?text=${encodeURIComponent(message)}`;
    whatsapp.target = '_blank';
    whatsapp.rel = 'noopener noreferrer';
    whatsapp.textContent = 'Request via WhatsApp';
    const email = document.createElement('a');
    email.className = 'pricing-quote-link';
    email.href = `mailto:admini@gearsanalytics.space?subject=${encodeURIComponent(
      'Request for pricing and plans'
    )}&body=${encodeURIComponent(message)}`;
    email.textContent = 'Request via email';
    const actions = document.createElement('div');
    actions.className = 'pricing-plans-actions flex flex-wrap gap-3';
    actions.append(whatsapp, email);
    content.append(eyebrow, heading, description, actions);
    section.appendChild(content);
    services.after(section);
  };

  const replaceTeamAvatars = () => {
    const avatars = [...document.querySelectorAll('img[alt="Team avatar"]')];
    const gallery = avatars[0]?.parentElement?.parentElement;
    if (!gallery) return;

    if (gallery.dataset.teamPhotosReady !== 'true') {
      const memberNames = gallery.nextElementSibling;
      gallery.dataset.teamPhotosReady = 'true';
      gallery.className = 'team-photo-gallery';
      gallery.id = 'team-photo-gallery';
      gallery.setAttribute('role', 'group');
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

      memberNames?.querySelectorAll('span').forEach((name) => {
        if (name.textContent.trim() === 'Rajab Mgoneka') {
          name.textContent = 'Rajabu Mgoneka';
        }
      });

      const disclosure = document.createElement('div');
      disclosure.className = 'team-disclosure';
      const toggle = document.createElement('button');
      toggle.type = 'button';
      toggle.className = 'team-photo-toggle';
      toggle.textContent = 'Meet the team';
      toggle.setAttribute('aria-expanded', 'false');
      const panel = document.createElement('div');
      panel.className = 'team-details-panel';
      panel.id = 'team-details-panel';
      panel.hidden = true;
      toggle.setAttribute('aria-controls', panel.id);
      toggle.addEventListener('click', () => {
        panel.hidden = !panel.hidden;
        toggle.setAttribute('aria-expanded', String(!panel.hidden));
        toggle.textContent = panel.hidden ? 'Meet the team' : 'Hide team';
      });

      gallery.before(disclosure);
      disclosure.append(toggle, panel);
      panel.appendChild(gallery);
      if (memberNames && memberNames.classList.contains('flex')) {
        const names = [...memberNames.querySelectorAll(':scope > span')];
        const list = document.createElement('ul');
        list.className = 'team-member-list';
        names.forEach((name) => {
          const item = document.createElement('li');
          item.textContent = name.textContent.trim();
          list.appendChild(item);
        });
        memberNames.replaceWith(list);
        panel.appendChild(list);
      }
    }
  };

  const simplifyCoreValues = () => {
    const about = document.querySelector('#about');
    if (!about || about.querySelector('.core-values-list')) return;
    const addValue = [...about.querySelectorAll('span')]
      .find((element) => element.textContent.trim().toLowerCase() === 'add value');
    const values = addValue?.parentElement;
    if (!values) return;

    const list = document.createElement('ul');
    list.className = 'core-values-list';
    [...values.querySelectorAll(':scope > span')].forEach((value) => {
      const text = value.textContent.trim();
      if (!text || text === '+' || text.toLowerCase() === 'add value') return;
      const item = document.createElement('li');
      item.textContent = text;
      list.appendChild(item);
    });
    values.replaceWith(list);
  };

  const linkResearchWorks = () => {
    document.querySelectorAll('#publications ul > li').forEach((item) => {
      if (item.querySelector('.research-work-link')) return;
      const title = item.querySelector('span:last-child')?.textContent.trim();
      if (!title) return;

      const link = document.createElement('a');
      link.className = `${item.className} research-work-link`;
      link.href = `https://wa.me/255699577955?text=${encodeURIComponent(
        `Hello Gears Analytics, I would like to request: ${title}`
      )}`;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', `Request "${title}" via WhatsApp`);
      while (item.firstChild) link.appendChild(item.firstChild);
      item.className = '';
      item.appendChild(link);
    });
  };

  const addShowMoreControl = ({ list, initiallyVisible, id }) => {
    if (!list || list.dataset.showMoreReady === 'true') return;
    const items = [...list.children].filter((item) => item.tagName === 'LI');
    if (items.length <= initiallyVisible) return;

    list.dataset.showMoreReady = 'true';
    const control = document.createElement('button');
    control.type = 'button';
    control.className = 'show-more-toggle';
    control.textContent = 'Show more';
    control.setAttribute('aria-expanded', 'false');
    const controlId = `show-more-${id}`;
    control.id = controlId;
    list.id = `${controlId}-list`;
    control.setAttribute('aria-controls', list.id);
    items.slice(initiallyVisible).forEach((item) => {
      item.hidden = true;
    });
    control.addEventListener('click', () => {
      const expanded = control.getAttribute('aria-expanded') !== 'true';
      items.slice(initiallyVisible).forEach((item) => {
        item.hidden = !expanded;
      });
      control.setAttribute('aria-expanded', String(expanded));
      control.textContent = expanded ? 'Show less' : 'Show more';
    });
    list.after(control);
  };

  const addStoryShowMore = () => {
    const about = document.querySelector('#about');
    if (!about) return;
    const label = [...about.querySelectorAll('*')]
      .find((element) => element.children.length === 0 && element.textContent.trim() === 'Story');
    const story = label?.nextElementSibling;
    if (!story || story.tagName !== 'P' || story.dataset.showMoreReady === 'true') return;

    story.dataset.showMoreReady = 'true';
    story.classList.add('story-copy');
    const control = document.createElement('button');
    control.type = 'button';
    control.className = 'show-more-toggle';
    control.textContent = 'Show more';
    control.setAttribute('aria-expanded', 'false');
    control.setAttribute('aria-controls', 'company-story');
    story.id = 'company-story';
    control.addEventListener('click', () => {
      const expanded = control.getAttribute('aria-expanded') !== 'true';
      story.classList.toggle('is-expanded', expanded);
      control.setAttribute('aria-expanded', String(expanded));
      control.textContent = expanded ? 'Show less' : 'Show more';
    });
    story.after(control);
  };

  const addWorksShowMore = () => {
    const publications = document.querySelector('#publications');
    if (!publications) return;
    ['Research works', 'Arts works'].forEach((title, index) => {
      const label = [...publications.querySelectorAll('*')]
        .find((element) => element.children.length === 0 && element.textContent.trim() === title);
      let column = label?.parentElement;
      while (column && column !== publications && !column.querySelector(':scope > ul')) {
        column = column.parentElement;
      }
      const list = column?.querySelector(':scope > ul');
      addShowMoreControl({
        list,
        initiallyVisible: index === 0 ? 2 : 1,
        id: index === 0 ? 'research-works' : 'arts-works',
      });
    });
  };

  const updateProblemsCopy = () => {
    const section = document.querySelector('#methods');
    if (!section || section.dataset.expertProblemsReady === 'true') return;
    const heading = [...section.querySelectorAll('*')]
      .find((element) => element.children.length === 0 && element.textContent.trim() === 'Problems');
    const list = heading?.parentElement.querySelector('ul');
    if (!list) return;

    const items = [
      'Turning broad or complex questions into a focused, answerable scope',
      'Reconciling incomplete, inconsistent, or fragmented data',
      'Choosing defensible methods when evidence is mixed or uncertain',
      'Coordinating specialist skills, tools, and methods across disciplines',
      'Meeting tight deadlines without compromising research quality',
      'Translating rigorous analysis into clear, actionable decisions',
    ];
    const template = list.querySelector('li');
    if (!template) return;
    section.dataset.expertProblemsReady = 'true';
    heading.textContent = 'Typical problems—even experts face';
    list.replaceChildren(...items.map((text) => {
      const item = template.cloneNode(false);
      item.textContent = text;
      return item;
    }));
  };

  const removeDesignNotes = () => {
    const unwantedText = new Set([
      'Swiss grid • Sans only • Blue fields • No cards',
      'Blue = expressive / critical',
    ]);
    document.querySelectorAll('body *').forEach((element) => {
      if (element.children.length || !unwantedText.has(element.textContent.trim())) return;
      if (element.textContent.trim().startsWith('Blue =')) {
        element.parentElement?.remove();
      } else {
        element.remove();
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

    const sourceRows = [...rows.children].filter((row) =>
      /^\d{2}$/.test(row.children[0]?.textContent.trim() || '') && row.children[1]
    );
    const rowsByTitle = new Map(
      sourceRows.map((row) => [row.children[1].textContent.trim(), row])
    );
    const services = [
      ['Problem identification, diagnostics, feasibility & pilot studies', 'Problem identification'],
      ['Methods preparation & design', 'Methods preparations and design'],
      ['Data collection, analysis & reporting', 'Data collection, Data Analysis & Reporting'],
      ['System design, analytics & solutions', 'System design, analytics and solutions'],
      ['Policy analysis & strategic insights', 'Policy analysis'],
      ['Monitoring & evaluation (M&E)', 'M&E'],
      ['Software & AI solutions', 'Software solutions'],
      ['Marketing & business solutions', 'Software solutions'],
      ['Intellectual property (IP) management', 'Software solutions'],
      ['Intelligence services', 'Software solutions'],
    ];
    const serviceRows = services.map(([label, sourceTitle], index) => {
      const sourceRow = rowsByTitle.get(sourceTitle);
      if (!sourceRow) {
        throw new Error(`Missing source service row: ${sourceTitle}`);
      }
      const row = sourceRow.cloneNode(false);
      const number = sourceRow.children[0].cloneNode(false);
      number.textContent = String(index + 1).padStart(2, '0');
      const title = sourceRow.children[1].cloneNode(false);
      title.textContent = label;
      row.append(number, title, sourceRow.children[2].cloneNode(true));
      return row;
    });

    rows.dataset.expandedSolutions = 'true';
    rows.replaceChildren(...serviceRows);
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
    styleNavigation();
    addContactIcons();
    addServiceSolutions();
    addPricingPlans();
    replaceTeamAvatars();
    simplifyCoreValues();
    linkResearchWorks();
    addStoryShowMore();
    addWorksShowMore();
    updateProblemsCopy();
    removeDesignNotes();
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
