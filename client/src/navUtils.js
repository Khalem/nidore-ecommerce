// Function used to check pathname
export const checkPathname = pathname => {
    if (pathname === '/') {
        return false;
    } else {
        return true;
    }
}

// Function used to hide/show nav bar depending on the direction the user is scrolling
export const hideNavOnScroll = nav => {
    let lastScroll = 0;

    window.onscroll = () => {
        const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

        if (currentScroll > 0 && lastScroll <= currentScroll) {
            lastScroll = currentScroll;
            nav.classList.add('removeNav');
        } else {
            lastScroll = currentScroll;
            nav.classList.remove('removeNav');
        }
    }
}