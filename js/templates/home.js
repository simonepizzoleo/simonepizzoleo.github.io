import Swiper from "swiper";

const HOME = {

    // Initialize all the Functions
    init: function() {

        this.setupToolsSlider();

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

    }

}

export { HOME };