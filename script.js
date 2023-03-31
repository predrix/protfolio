'use strict';

const nav = document.querySelector('.header__navbar');
const header = document.querySelector('.header');
const ham = document.querySelector('.header__hamburger');
const print = document.querySelector('.home__job-dynamic');
const skills = document.querySelectorAll('.hidden');
const foot = document.querySelector('.footer__up');

// =====toggler =====
ham.addEventListener('click', () => nav.classList.toggle('height'));

//===== smoth scrolling =====
nav.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.classList.contains('header__link')) {
    const href = e.target.getAttribute('href');
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  }
});
// ===== text printing =====

const printing = () => {
  setTimeout(() => (print.textContent = 'Developer'), 0);
  setTimeout(() => (print.textContent = 'Freelancer'), 4000);
  setTimeout(() => (print.textContent = 'Designer'), 8000);
};
printing();
setInterval(printing, 12000);

// ===== animated section elements =====

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});
skills.forEach(el => observer.observe(el));

// ===== footer =====
foot.addEventListener('click', e => {
  e.preventDefault();
  const href = foot.getAttribute('href');
  document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
});
