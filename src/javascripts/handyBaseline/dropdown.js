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
