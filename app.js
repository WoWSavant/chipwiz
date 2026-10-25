'use strict';
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
menuToggle.hidden = false;
function setMenuOpen(isOpen) {
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  mobileNav.hidden = !isOpen;
}
menuToggle.addEventListener('click', () => {
  setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
});
mobileNav.addEventListener('click', event => {
  if (event.target.closest('a')) setMenuOpen(false);
});
document.addEventListener('keydown', event => {
  if (event.key !== 'Escape' || mobileNav.hidden) return;
  setMenuOpen(false);
  menuToggle.focus();
});
window.matchMedia('(min-width: 901px)').addEventListener('change', event => {
  if (event.matches) setMenuOpen(false);
});
