window.sr = ScrollReveal();
sr.reveal('.navbar', {
    duration: 2000,
    origin: 'button'
});
sr.reveal('.showcase-left', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
});
sr.reveal('.showcase-right', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
});
sr.reveal('.showcase-btn', {
    duration: 2000,
    delay: 2000,
    origin: 'button'
});
sr.reveal('#testimonial div', {
    duration: 2000,
    origin: 'button',
});
sr.reveal('.info-left', {
    duration: 2000,
    origin: 'left',
    distance: '300px',
    viewFactor: 0.2
});
sr.reveal('.info-right', {
    duration: 2000,
    origin: 'right',
    distance: '300px',
    viewFactor: 0.2
});


// Smooth Scrolling
$(function () {

    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});