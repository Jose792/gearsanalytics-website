const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-nav');

menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  menuButton.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
  navigation?.classList.toggle('is-open', !expanded);
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Open navigation');
  });
});

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());

document.querySelector('#inquiry-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const message = [
    'Hello Gears Analytics, I would like to discuss a project.',
    `Name: ${data.get('name')}`,
    `Organization: ${data.get('organization') || 'Not provided'}`,
    `Area: ${data.get('area')}`,
    `Challenge: ${data.get('challenge')}`
  ].join('\n');
  const url = `https://wa.me/255699577955?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
  const status = document.querySelector('#form-status');
  if (status) status.textContent = 'WhatsApp opened with your draft. Review it there before sending.';
});
