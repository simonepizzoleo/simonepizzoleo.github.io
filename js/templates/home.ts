import AOS from "aos";
import Swiper from "swiper";

const HOME = {

    // Initialize all the Functions
    init: function(): void {

        AOS.init();
        this.setupScrollEffects();
        this.setupToolsSlider();
        this.setupWorksGSAP();

    },

    // Setup some Effects on Scroll
    setupScrollEffects: function(): void {
        
        // Tools
        
        // @ts-ignore
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

        // @ts-ignore
        gsap.from('.home-ebook__image', {

            y: 100,

            scrollTrigger: {
                trigger: '.home-ebook__image',
                scrub: 2,
                end: 'top'
            }

        });

        // Works
        const WORKS: NodeListOf<HTMLDivElement> = document.querySelectorAll('.home-works__item');

        for (const WORK of WORKS) {

            // @ts-ignore
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
    setupToolsSlider: function(): void {
        
        const TOOLS_SLIDER: Swiper = new Swiper('.home-tools__grid', {
            
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
    setupWorksGSAP: function(): void {

        // @ts-ignore
        gsap.registerPlugin(ScrollTrigger);

        // @ts-ignore
        const WORKS: any = gsap.utils.toArray('.home-works__item');

        const WORKS_CONTAINER = document.querySelector('.home-works') as HTMLDivElement;
        const WORKS_CONTAINER_HEIGHT: number = WORKS_CONTAINER.offsetHeight;
        const WORKS_CONTAINER_WIDTH: number = WORKS_CONTAINER.offsetWidth;

        // @ts-ignore
        gsap.to(WORKS, {

            xPercent: -100 * (WORKS.length - 1),
            ease: "none",
            
            scrollTrigger: {
                trigger: ".home-works",
                pin: true,
                scrub: 1,
                snap: 1 / (WORKS.length - 1),
                start: '-' + (window.innerHeight - WORKS_CONTAINER_HEIGHT) / 2,
                end: () => '+=' + WORKS_CONTAINER_WIDTH
            }

        });

    }

}

// Export the JS File
export { HOME };