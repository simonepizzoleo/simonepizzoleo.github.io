import Swiper from "swiper";

const HOME = {

    // Initialize all the Functions
    init: function() {

        this.setupToolsSlider();
        this.setupWorksGSAP();

    },

    // Setup the Tools Slider
    setupToolsSlider: function() {
        
        const TOOLS_SLIDER = new Swiper('.home-tools__grid', {
            
            grabCursor: true,
            loop: false,
            spaceBetween: 16,
            slidesPerView: 1,
            watchSlidesProgress: true,
            
            breakpoints: {

                630: {
                    slidesPerView: 2
                },

                930: {
                    slidesPerView: 3
                }

            }

        });

    },

    // Setup GSAP for forcing Horizontal Scroll
    // on the Works Section
    setupWorksGSAP: function() {

        gsap.registerPlugin(ScrollTrigger);

        const WORKS = gsap.utils.toArray('.home-works__item');

        gsap.to(WORKS, {

            xPercent: -100 * (WORKS.length - 1),
            ease: "none",
            
            scrollTrigger: {
                trigger: ".home-works",
                pin: true,
                scrub: 1,
                snap: 1 / (WORKS.length - 1),
                end: () => "+=" + document.querySelector('.home-works').offsetWidth
            }

        });

    }

}

export { HOME };