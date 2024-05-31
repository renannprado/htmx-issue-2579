import * as Htmx from "htmx.org"

declare global {
    interface Window {
        htmx: typeof Htmx
    }
}

window.htmx = Htmx

import "./web-components/dashboard/menu-item"
