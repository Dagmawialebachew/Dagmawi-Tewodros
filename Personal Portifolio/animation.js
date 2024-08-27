setTimeout( () => {



gsap.registerPlugin(ScrollTrigger);

gsap.from('.slide-in-right', {
    scrollTrigger: {
        trigger: '.slide-in-right',
        start: 'top bottom',
        toggleActions: 'play none none complete'
    },
    opacity: 0,
    x: 200,
    duration: 1.5
});

gsap.from('.animate-on-scroll-1', {
    scrollTrigger: {
        trigger: '.animate-on-scroll-1',
        start: 'top center',
        toggleActions: 'play play none complete'
    },
    opacity: 0,
    x: -300,
    duration: 1.5
});

gsap.from('.slide-in-left', {
    scrollTrigger: {
        trigger: '.slide-in-left',
        start: 'top 80%',
        toggleActions: 'play none none none'
    },
    x: -200,
    opacity: 0,
    duration: 1.5
});

gsap.from('.div-services', {
    scrollTrigger: {
        trigger: '.div-services',
        start: 'top 80%',
        toggleActions: 'play none none complete',
    },
    opacity: 0,
    duration: 5,
    x: -50,
    stagger: 0.3,
});

gsap.from('.box', {
    scrollTrigger: {
        trigger: '.box',
        start: 'top 80%',
        toggleActions: 'play none none none'
    },
    x: 0,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3
});

gsap.from('#home p, #home h1, #home button', {
    scrollTrigger: {
        trigger: '#home',
        start: 'top 80%',
        toggleActions: 'play none none none'
    },
    x: 0,
    opacity: 0,
    duration: 1.5,
    stagger: 0.5
});

gsap.from('#project-managment', {
    scrollTrigger: {
        trigger: '#project-managment',
        start: 'top 80%',
        toggleActions: 'play none none none'
    },
    y: -200,
    opacity: 0,
    duration: 1.5
});

gsap.from('#form > div:nth-child(2)', {
    scrollTrigger: {
        trigger: '#contact-me',
        start: 'top 80%',
        toggleActions: 'play none none none'
    },
    y: -200,
    opacity: 0,
    duration: 3,
    stagger: 0.3
});

gsap.from('#pricing div', {
    scrollTrigger: {
        trigger: '#pricing div',
        start: 'top 80%',
        toggleActions: 'play none none none'
    },
    scale: 0.7,
    opacity: 0,
    duration: 2.5,
    stagger: 0.2
});

gsap.utils.toArray('#My-projects p, #pricing p:nth-of-type(1)').forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        duration: 8
    });
});

gsap.utils.toArray('section:not(#home, #about, #project-managment) h1').forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2
    });
});

document.querySelectorAll('.div-services div').forEach(hover => {
    hover.addEventListener('mouseenter', () => {
        gsap.to(hover, { scale: 1.05, duration: 0.3, ease: "power1.inOut" });
    });
    hover.addEventListener('mouseleave', () => {
        gsap.to(hover, { scale: 1, duration: 0.4, ease: "power1.inOut" });
    });
});

},6005)