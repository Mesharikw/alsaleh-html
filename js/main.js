function toggleMenu(isOpen) {
    if (isOpen) {
        document.body.classList.add('menu-open');
    } else {
        document.body.classList.remove('menu-open');
    }
}