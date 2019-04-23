class dropdown {
    constructor(options) {
        // btn id
        this.id = options.id;
        // list id
        this.listId = options.id + "_list";
        this.allValues = options.allValues || [];
        this.defaultValue = options.defaultValue || "---";
        this.currentValue = options.defaultValue || "";
    }

    init() {
        // create btn element
        let btn = document.getElementById(this.id);
        btn.classList.add("btn");
        btn.classList.add("dropdown");
        btn.addEventListener('click', e => this.onBtnClick(e));
        // set display value
        let display = document.createElement("span");
        display.classList.add("dd-default");
        display.id = `dd-${this.id}-current`;
        display.setAttribute("data-value", this.defaultValue);
        display.innerHTML = this.defaultValue;
        // append and set
        btn.appendChild(display);
    }

    onBtnClick(e) {
        if (!document.getElementById(this.listId)) {
            this.generateList();
        } else {
            this.toggle(e);
        }
    }

    generateList() {
        // create list wrapper
        let listBase = document.createElement("div");
        listBase.classList.add("dd-list");
        listBase.classList.add("dd-show");
        listBase.id = this.listId;
        listBase.addEventListener('click', e => {
            if (this.hasClass(e.target.classList, "dd-show")) {
                // clicked on background
                this.close();
            }
        });

        // create list 
        let list = document.createElement("ul");
        list.classList.add("list");
        // create rows
        this.allValues.forEach((value, index) => {
            // create row wrapper
            let listRow = document.createElement("li");
            listRow.classList.add("list-row");
            listRow.id = `dd-${this.id}-item-${index}`;
            listRow.setAttribute("data-value", value);
            listRow.addEventListener('click', e => {
                this.updateCurrentValue(e.currentTarget);
            });
            // content wrapper
            let content = document.createElement("div");
            content.classList.add("list-content");
            // list content
            let text = document.createElement("span");
            text.classList.add("list-text");
            text.innerHTML = value;
            // appending elements
            content.appendChild(text);
            listRow.appendChild(content);
            list.appendChild(listRow);
        });

        listBase.appendChild(list);
        document.getElementById(this.id).parentNode.appendChild(listBase);
    }

    toggle(e) {
        let c = e.target.classList;
        let isOpen = this.hasClass(c, "dd-show");
        isOpen ? this.close() : this.open();
    }
    
    open() {
        document.getElementById(this.listId).classList.add("dd-show");
    }
    
    close() {
        document.getElementById(this.listId).classList.remove("dd-show");
    }

    hasClass(array, target) {
        let result = false;
        for (let i = 0; i < array.length; i ++) {
            if (array[i] === target) {
                result = true;
                i = array.length;
            }
        }
        return result;
    }

    updateCurrentValue(target) {
        let v = target.getAttribute("data-value");
        let display = document.getElementById(`dd-${this.id}-current`);
        display.innerHTML = v;
        display.setAttribute("data-value", v);
        this.close();
    }
}

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

textAreaResize = (field) => {
    // Reset field height
	field.style.height = 'inherit';

	// Get the computed styles for the element
	var computed = window.getComputedStyle(field);

	// Calculate the height
    var height = 
        parseInt(computed.getPropertyValue('border-top-width'), 10)
        // + parseInt(computed.getPropertyValue('padding-top'), 10)
        + field.scrollHeight
        // + parseInt(computed.getPropertyValue('padding-bottom'), 10)
        + parseInt(computed.getPropertyValue('border-bottom-width'), 10)
        // - 8;

	field.style.height = height + 'px';

}
