AOS.init();

TweenMax.to(".overlay h1", 2, {
    opacity: 0,
    x: -60,
    ease: Expo.easeInOut
})
TweenMax.to(".overlay span", 2, {
    delay: 2,
    opacity: 0,
    x: -60,
    ease: Expo.easeInOut
})
TweenMax.to(".overlay", 2, {
    delay: 1.5,
    left: "-100%",
    ease: Expo.easeInOut
})
TweenMax.from(".header_menu", 2, {
    delay: 2,
    opacity: 0,
    ease: Expo.easeInOut
})
TweenMax.from(".header_main_text", 3, {
    delay: 2,
    opacity: 0,
    ease: Expo.easeInOut
})