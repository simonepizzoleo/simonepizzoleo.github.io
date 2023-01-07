const SIDECAR = {

    TOGGLERS_CLASS: 'hamburger',
    SIDECAR_CLASS: 'page-sidecar',
    ACTIVE_CLASS: 'active',
    LOCKED_CLASS: 'locked',

    // Initialize all the Functions
    init: function() {

        this.closeWhenClickingOnLink();

        const TOGGLES = this.getAllTogglers();
        for (const TOGGLE of TOGGLES) TOGGLE.addEventListener('click', (e) => this.toggleSidecar(e));

    },

    closeWhenClickingOnLink: function() {

        const SIDECAR_LINKS = document.querySelectorAll(`.${this.SIDECAR_CLASS} a[href ^= "#"]`);
        for (const LINK of SIDECAR_LINKS) LINK.addEventListener('click', () => this.closeSidecar());

    },

    // Returns all the Togglers responsible
    // for opening and closing the Sidecar
    getAllTogglers: function() {
        return document.querySelectorAll(`.${this.TOGGLERS_CLASS}`);
    },

    // Determine whether the Button should
    // open or close the Sidecar
    toggleSidecar: function(e) {
            
        e = e.currentTarget;

        const IS_ACTIVE = e.classList.contains(`${this.ACTIVE_CLASS}`);
        IS_ACTIVE ? this.closeSidecar() : this.openSidecar();

    },

    // Opens the Sidecar and adds the 'active'
    // class to all the Hamburger Buttons
    openSidecar: function() {

        // Add the active class to all the Togglers
        const TOGGLERS = this.getAllTogglers();
        for (const TOGGLE of TOGGLERS) TOGGLE.classList.add(`${this.ACTIVE_CLASS}`);

        // Lock the Screen
        document.body.classList.add(`${this.LOCKED_CLASS}`);
        document.querySelector('html').classList.add(`${this.LOCKED_CLASS}`);

        // Open the Sidecar
        const SIDECAR = document.querySelector(`.${this.SIDECAR_CLASS}`);
        SIDECAR.classList.add(`${this.ACTIVE_CLASS}`);

    },

    // Closes the Sidecar and remove the 'active'
    // class from all the Hamburger Buttons
    closeSidecar: function() {
        
        // Remove the active class from all the Togglers
        const TOGGLES = this.getAllTogglers();
        for (const TOGGLE of TOGGLES) TOGGLE.classList.remove(`${this.ACTIVE_CLASS}`);

        // Unlock the Screen
        document.body.classList.remove(`${this.LOCKED_CLASS}`);
        document.querySelector('html').classList.remove(`${this.LOCKED_CLASS}`);

        // Close the Sidecar
        const SIDECAR = document.querySelector(`.${this.SIDECAR_CLASS}`);
        SIDECAR.classList.remove(`${this.ACTIVE_CLASS}`);

    }

}

// Export the JS File
export { SIDECAR };