const root = document.documentElement;
const english = root.lang === 'en';
const preference = matchMedia('(prefers-reduced-motion: reduce)');
const smallScreen = matchMedia('(max-width: 600px)');
const motionButton = document.querySelector('.motion-toggle');
let savedReduction = false;
try { savedReduction = localStorage.getItem('rf-reduce-motion') === 'true'; } catch { /* Storage is optional. */ }
const reduced = () => preference.matches || savedReduction;
function updateMotion() {
  root.classList.toggle('reduced-motion', reduced());
  motionButton.setAttribute('aria-pressed', String(reduced()));
  motionButton.textContent = preference.matches
    ? (english ? 'Reduced effects · system' : 'Efeitos reduzidos · sistema')
    : (english ? 'Reduce effects' : 'Reduzir efeitos');
  motionButton.disabled = preference.matches;
  if (reduced()) document.querySelectorAll('.pending').forEach(el => el.classList.remove('pending'));
  document.querySelector('.hero-book')?.style.removeProperty('--parallax');
}
motionButton.hidden = false;
motionButton.addEventListener('click', () => {
  savedReduction = !savedReduction;
  try { localStorage.setItem('rf-reduce-motion', String(savedReduction)); } catch { /* Keep in-memory setting. */ }
  updateMotion();
});
preference.addEventListener('change', updateMotion);
updateMotion();
const header = document.querySelector('.site-header');
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu(returnFocus = false) {
  header.classList.remove('is-open');
  menu.setAttribute('aria-expanded', 'false');
  if (returnFocus) menu.focus();
}
function syncMenu() {
  const focusWasInNav = nav.contains(document.activeElement);
  menu.hidden = !smallScreen.matches;
  header.classList.toggle('menu-ready', smallScreen.matches);
  closeMenu(smallScreen.matches && focusWasInNav);
}
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  header.classList.toggle('is-open', open);
  menu.setAttribute('aria-expanded', String(open));
});
header.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') closeMenu(true);
});
nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(smallScreen.matches); });
header.addEventListener('focusout', event => { if (!header.contains(event.relatedTarget)) closeMenu(); });
smallScreen.addEventListener('change', syncMenu);
syncMenu();
if ('IntersectionObserver' in window && !reduced()) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.remove('pending'); observer.unobserve(entry.target); }
  }), { threshold: 0.08 });
  document.querySelectorAll('[data-reveal]').forEach(el => {
    if (el.getBoundingClientRect().top > innerHeight) { el.classList.add('pending'); observer.observe(el); }
  });
}
const heroBook = document.querySelector('.hero-book');
let scheduled = false;
window.addEventListener('scroll', () => {
  if (!heroBook || reduced() || smallScreen.matches || scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => {
    heroBook.style.setProperty('--parallax', `${Math.min(scrollY * .045, 24)}px`);
    scheduled = false;
  });
}, { passive: true });
const workHero = document.querySelector('.work-hero');
workHero?.addEventListener('pointermove', event => {
  if (reduced() || smallScreen.matches || event.pointerType !== 'mouse') return;
  const rect = workHero.getBoundingClientRect();
  workHero.style.setProperty('--pointer-x', `${event.clientX - rect.left}px`);
  workHero.style.setProperty('--pointer-y', `${event.clientY - rect.top}px`);
});
