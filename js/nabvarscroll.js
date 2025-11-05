const narbarscroll = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 900) {
        narbarscroll.classList.add('nav-link-scroll');
    } else {
        narbarscroll.classList.remove('nav-link-scroll');
    }
});