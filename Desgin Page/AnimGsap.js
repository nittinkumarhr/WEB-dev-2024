var t1= gsap.timeline();
gsap.set(".commn", {
    opacity: 0,
    y: 10,
});
gsap.set("#right img",{
    opacity: 0,
    y :10, 
    scale:1.6,
})
t1.from("#left",{
    duration: 2,
    width: 0,
    ease:"Expo.easeInOut",
    // delay: 0.5
    }).from("#right",{
        duration: 1.5,
        width: 0,
        ease:"Expo.easeInOut",
        // delay: 0.5
        })
        .to(".commn", 
            {
            delay: -2,
            stagger:.2,
            duration: 2,
            opacity: 1,
            y: 0,
            stagger: 0.2,
            ease: "Expo.easeInOut"
        })
        .to("#right img", 
            {
            opacity: 1,
            duration: 2,
            y: 0,
            scale: 1,
            stagger: 0.2,
            delay: -1,
            ease: "Expo.easeInOut"
        })
