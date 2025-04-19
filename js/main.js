document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header-container');
    const homeSection = document.querySelector('#_home');

    const toggleHeaderFixed = () => {
        const homeBottom = homeSection.getBoundingClientRect().bottom;
        if (homeBottom <= 0) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    };

    window.addEventListener('scroll', toggleHeaderFixed);
});