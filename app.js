const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        //il me semble c'est l'anim de la nav
        nav.classList.toggle('nav-active');

        //animation des lien de la nav là
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });    

        //anim du burger
        burger.classList.toggle('toggle');

    });
}

    

navSlide();