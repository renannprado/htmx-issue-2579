customElements.define("dashboard-menu-item",
    class DashboardMenuItem extends HTMLElement {
        constructor() {
            super();
        }

        connectedCallback() {
            this.attachShadow({ mode: "open" });
            this.innerHTML = `
                <div>test</div>
            `;

            window.htmx.process(this.shadowRoot);
        }
    }
);
