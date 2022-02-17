window.addEventListener('DOMContentLoaded', event => {

    const btnMobile = document.querySelector("#btnMobile")
    const menu = document.querySelector("#navbarMb")

    var navChange = function() {
        const nav = document.body.querySelector("#navbar");

        if (window.scrollY === 0) {
            nav.classList.remove('navbar-scrolled');
        } else {
            nav.classList.add('navbar-scrolled');
        }
    };

    btnMobile.addEventListener("click", function() {
        a = menu.classList.toggle("mobile-yes");
        console.log(a);
    });

    navChange();
    document.addEventListener('scroll', navChange);
});