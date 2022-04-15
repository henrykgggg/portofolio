const mobileMenu = document.getElementById('mobile-menu');
const btn = document.getElementById('menu-btn');
const myLogo = document.getElementById('logo');

const menu1 = document.getElementById('menu1');
const menu2 = document.getElementById('menu2');
const menu3 = document.getElementById('menu3');

function preventScroll(e) {
  e.tpreventDefault();
  e.stopPropagaion();
  return false;
}

function openMenu() {
  btn.style.display = 'none';
  mobileMenu.style.display = 'flex';
  myLogo.style.display = 'none';
  document.querySelector('.scrollable').addEventListener('wheel', preventScroll, { passive: false });
}

btn.addEventListener('click', openMenu);
function closeMenu() {
  mobileMenu.style.display = 'none';
  btn.style.display = 'block';
  myLogo.style.display = 'block';
  document.querySelector('.scrollable').removeEventListener('wheel', preventScroll, { passive: false });
}

document.addEventListener('click', (event) => {
  if (event.target.id === 'close-menu') {
    closeMenu();
  } else if (event.target.id === 'logo') {
    closeMenu();
  }
});

menu1.addEventListener('click', closeMenu);
menu2.addEventListener('click', closeMenu);
menu3.addEventListener('click', closeMenu);