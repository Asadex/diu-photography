window.sr = ScrollReveal();

sr.reveal('.section-title',{
    opacity: 0,
    duration: 1000,
    origin: 'bottom',
    distance: '50px',
    cleanup: true,
    reset: true,
    viewFactor: 0.5,
})

sr.reveal('.cool-description',{
    opacity: 0,
    origin: 'bottom',
    duration: 1000,
    distance: '50px',
    cleanup: true,
    viewFactor: 0.8,
    delay: 300,
})
