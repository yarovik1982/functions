export class Element {
    constructor(parent = document.body, config = {}) {
        this.parent = parent;
        this.config = config;
      //   this.init();
    }

    create() {
        let element;
        if (!this.config.tagName) {
            element = document.createElement("div");
        } else {
            element = document.createElement(this.config.tagName);
            if (this.config.class) {
                element.className = this.config.class;
            }
        }
        if (
            this.config.hasOwnProperty("attributes") &&
            typeof this.config.attributes === "object"
        ) {
            for (const prop in this.config.attributes) {
                element.setAttribute(prop, this.config.attributes[prop]);
            }
        }
        return element;
    }

    render() {
        if (this.parent instanceof HTMLElement) {
            this.parent.appendChild(this.create());
        } else {
            console.error("Parent is not a valid DOM element");
        }
    }

   //  init() {
   //      this.render();
   //  }
}
