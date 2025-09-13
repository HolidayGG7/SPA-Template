const toggleBtn = document.querySelector("#mobile-menu-toggle");
const mobileMenu = document.querySelector("#navigation__main");

toggleBtn.addEventListener ("click", ()=>{
    mobileMenu.classList.toggle("open");
    toggleBtn.classList.toggle("open");

});



