const burgerBtn = document.querySelector(".burger-btn");
const burgerMenu = document.querySelector(".burger-menu");
const sideMenuList = document.querySelector(".side-menu__list");

 
burgerBtn.addEventListener("click", (e) => {
    console.log(e.currentTarget);
    e.currentTarget.classList.toggle("burger-btn--active");
    burgerMenu.classList.toggle("burger-menu--active");
});
burgerMenu.addEventListener("click", (e) => {
    if (e.target.closest("[class$='__link']")) {
         burgerBtn.classList.toggle("burger-btn--active");
         burgerMenu.classList.toggle("burger-menu--active");
    }   
})

sideMenuList.addEventListener('click', (e) => {
    console.log(e.target.closest(".side-menu__item"));
    if (e.target.closest('.side-menu__item')) {
        sideMenuList.querySelector('._selected')?.classList.remove('_selected');
        e.target.closest(".side-menu__item").classList.add('_selected');
    }
})



