const burgerBtn = document.querySelector(".burger-btn");
const burgerMenu = document.querySelector(".burger-menu");

 
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


