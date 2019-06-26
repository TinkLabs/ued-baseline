/*
 *
 * Modal
 * 
 * Modal can be created and styled by pure html and css.
 * 
 * Or use this modal class to generate, destory basic modal with
 * built-in trigger.
 * 
 * To create a modal, an object of options is required:
 * 
 * id
 *  string
 *  required
 *  the id of your modal element
 * 
 * iconClass
 *  string array
 *  optional
 *  classnames of the icon above modal title
 * 
 * title
 *  string
 *  optional
 *  modal title
 * 
 * body
 *  string
 *  optional
 *  modal body text
 * 
 * buttonText
 *  string array
 *  require at least 1 entry, max 2
 *  text for modal actions at modal footer
 * 
 * stackButton
 *  boolean
 *  optional
 *  stacking action buttons if button text is too long
 * 
 */

class Modal {
    constructor(options) {
        this.id = options.id;
        this.iconClass = options.iconClass || [];
        this.title = options.title;
        this.body = options.body;
        this.buttonText = options.buttonText;
        this.stackButton = options.stackButton;
    }

    init() {
        // find Target DOM location
        let anchor = document.getElementById(this.id);
        let modal = this.createModalBase();

        // create modal wrapper
        let modalWrapper = document.createElement("div");
        modalWrapper.classList.add("modal-wrapper");

        // create modal header
        let modalHeader = this.createModalHeader();
        modalWrapper.appendChild(modalHeader);

        // create modal body
        let modalBody = this.createModalBody();
        modalWrapper.appendChild(modalBody);

        // create modal footer
        let modalFooter = this.createModalFooter();
        modalWrapper.appendChild(modalFooter);

        modal.appendChild(modalWrapper);
        anchor.appendChild(modal);
    }

    destory() {
        let e = document.getElementById(this.id);
        while (e.firstChild) {
            e.removeChild(e.firstChild);
        }
    }

    // hide(id) {

    // }

    // bringForward(id) {

    // }

    // element creation
    createModalBase() {
        let modalBase = document.createElement("div");
        modalBase.classList.add("modal");
        modalBase.classList.add("modal-base");

        modalBase.addEventListener('click', e => {
            let classList = e.target.classList;
            let destory = false;
            for (let i = 0; i < classList.length; i++) {
                if (classList[i] === "modal-base") {
                    i = classList.length;
                    destory = true;
                }
            }
            if (destory) {
                this.destory();
            }
        });


        return modalBase;
    }

    createModalHeader() {
        let modalHeader = document.createElement("div");
        modalHeader.classList.add("modal-header");

        if (this.iconClass.length) {
            let iconEle = document.createElement("i");
            for (let i = 0; i < this.iconClass.length; i++) {
                iconEle.classList.add(this.iconClass[i])
            }
            modalHeader.appendChild(iconEle);
        }

        let headerTitle = document.createElement("h3");
        headerTitle.classList.add("modal-title");
        headerTitle.innerHTML = this.title;
        modalHeader.appendChild(headerTitle);

        return modalHeader;
    }

    createModalBody() {
        let modalBody = document.createElement("div");
        modalBody.classList.add("modal-body");

        let bodyText = document.createElement("p");
        bodyText.classList.add("modal-content");
        bodyText.innerHTML = this.body;
        modalBody.appendChild(bodyText);

        return modalBody;
    }

    createModalFooter() {
        let modalFooter = document.createElement("div");
        modalFooter.classList.add("modal-footer");
        if (this.stackButton) {
            modalFooter.classList.add("stacked");
        }
        if (this.buttonText.length === 1) {
            let footerText = document.createElement("button");
            footerText.classList.add("btn");
            footerText.classList.add("btn-contained");
            footerText.id = "modal-btn-primary";
            footerText.innerHTML = this.buttonText[0];
            footerText.onclick = () => { this.destory() };
            modalFooter.appendChild(footerText);
        } else {
            let footerText1 = document.createElement("button");
            footerText1.classList.add("btn");
            footerText1.classList.add("btn-contained");
            footerText1.id = "modal-btn-secondary";
            footerText1.innerHTML = this.buttonText[0];
            footerText1.onclick = () => { this.destory() };
            let footerText2 = document.createElement("button");
            footerText2.classList.add("btn");
            footerText2.classList.add("btn-contained");
            footerText2.id = "modal-btn-primary";
            footerText2.innerHTML = this.buttonText[1];
            footerText2.onclick = () => { this.destory() };

            modalFooter.appendChild(footerText1);
            modalFooter.appendChild(footerText2);
        }
        return modalFooter;
    }
}
