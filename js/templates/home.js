import AOS from "aos";
import Swiper from "swiper";

const HOME = {

    // Initialize all the Functions
    init: function() {

        AOS.init();
        this.setupScrollEffects();
        this.setupToolsSlider();
        this.setupWorksGSAP();

    },

    // Setup some Effects on Scroll
    setupScrollEffects: function() {
        
        // Tools
        gsap.from('.home-tools__grid', {

            y: 100,
            opacity: 0,
            
            scrollTrigger: {
                trigger: '.home-tools_heading',
                scrub: 2,
                end: 'bottom 100px'
            }

        });

        // Ebook
        gsap.from('.home-ebook__image', {

            y: 100,

            scrollTrigger: {
                trigger: '.home-ebook__image',
                scrub: 2,
                end: 'top'
            }

        });

        // Works
        const WORKS = document.querySelectorAll('.home-works__item');

        for (const WORK of WORKS) {

            gsap.from(WORK, {

                opacity: 0,
                scale: 0.85,

                scrollTrigger: {
                    trigger: WORK,
                    end: 'top 150px',
                    scrub: 2
                }

            });

        }

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
                start: '-' + (window.innerHeight - document.querySelector('.home-works').offsetHeight) / 2,
                end: () => '+=' + document.querySelector('.home-works').offsetWidth
            }

        });

    }

}

export { HOME };