gsap.to('.blinder',{
    duration:0.5,
    stagger:.3,
    height:0, 
    ease: 'power3.out'
})

const tl = gsap.timeline();


tl.to('.animText',{

    y:0,
    stagger:.3,
    duration:2,
    ease:'power4.out'
})
