// Global

import { SIDECAR } from "./global/sidecar";

// Templates

import { HOME } from "./templates/home";

// Start necessary JS Files

SIDECAR.init();
if (document.querySelector('body.home')) HOME.init();