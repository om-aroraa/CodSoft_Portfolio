function toggleMenu() {
    const menu = document.querySelector('.nav-links');
    menu.classList.toggle('active');

    const hamburger = document.querySelector('.hamburger-menu');
    hamburger.classList.toggle('hamburger-open');
}
