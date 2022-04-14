const mobileMenu =document.getElementById('mobile-menu');
const btn = document.getElementById('menu-btn');
const myLogo =document.getElementById('logo')
function openMenu(){
  btn.style.display = "none";
  mobileMenu.style.display ="flex";
  myLogo.style.display="none";
}

btn.addEventListener('click',openMenu)
function closeMenu(){
    mobileMenu.style.display ="none";
    btn.style.display= "block";
    myLogo.style.display ="block";
}
document.addEventListener('click', (event) => {
    if(event.target.id === "close-menu") {
        closeMenu();
    }else if(event.target.id === "logo"){
        closeMenu();
    }

});