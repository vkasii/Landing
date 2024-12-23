function toggleNav() {
    toggleClasses();
    toggleAriaLabel();
}

function toggleClasses() {
    const toggler = document.querySelector('.header__toggler');
    const navigation = document.querySelector('.header__menu');
    const headerInfo = document.querySelector('.header__info');
    headerInfo.classList.toggle('block')
    toggler.classList.toggle('open');
    navigation.classList.toggle('visible');
}

function toggleAriaLabel() {
    const toggler = document.querySelector('.header__toggler');

    if (toggler.getAttribute('aria-label') === 'Open menu') {
        toggler.setAttribute('aria-label', 'Close menu');
    } else {
        toggler.setAttribute('aria-label', 'Open menu');
    }
}

window.addEventListener('load', () => {
    const distanceToTop = document.documentElement.scrollTop;
    updateHeaderBackground(distanceToTop);
})

document.addEventListener('scroll', () => {
    updateHeaderBackground(100);
})

function updateHeaderBackground(value) {
    const header = document.querySelector('.header');
    header.style.background = `rgba(21, 4, 51, ${window.scrollY / value})`;
}

function getYear() {
    const date = new Date();
    return date.getFullYear();
}

document.querySelector('.current-year').textContent = getYear();