const menuButton = document.querySelector('.menu-button');
const menuPanel = document.querySelector('.menu-panel');

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuPanel.classList.remove('open');
  document.body.classList.remove('menu-open');
}

function toggleMenu() {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuPanel.classList.toggle('open', !isOpen);
  document.body.classList.toggle('menu-open', !isOpen);
}

menuButton.addEventListener('click', toggleMenu);

menuPanel.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu();
  }
});
