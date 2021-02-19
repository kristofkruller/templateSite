const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const body = document.querySelector('body');

//display mobile menu

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
}
menu.addEventListener('click', mobileMenu);

//animation on appear 

const animPointsY = document.querySelectorAll('.animy');
const animPointsX = document.querySelectorAll('.animx');
const animPointsRevX = document.querySelectorAll('.animxrev');

observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = `anim1 1.5s ${entry.target.dataset.delay} forwards ease-out`;
        }
        else {
            entry.target.style.animation = 'none';
        }
    })
})
animPointsY.forEach(ypoint => {
    observer.observe(ypoint)
})

observer2 = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = `anim2 1.5s ${entry.target.dataset.delay} forwards ease-out`;
        }
        else {
            entry.target.style.animation = 'none';
        }
    })
})
animPointsX.forEach(xpoint => {
    observer2.observe(xpoint)
})

observer3 = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = `anim3 1.5s ${entry.target.dataset.delay} forwards ease-out`;
        }
        else {
            entry.target.style.animation = 'none';
        }
    })
})
animPointsRevX.forEach(revxpoint => {
    observer3.observe(revxpoint)
})