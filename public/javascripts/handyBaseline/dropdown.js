class dropdown {
    constructor(options) {
        // btn id
        this.id = options.id;
        // list id
        this.listId = options.id + "_list";
        this.allValues = options.allValues || [];
        this.defaultValue = options.defaultValue || "---";
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
                // not click on item
                this.close();
            } else {
                // process click on item
            }
        });
        // create list 
        let list = document.createElement("ul");
        list.classList.add("list");
        // create rows
        this.allValues.forEach(value => {
            let listRow = document.createElement("li");
            listRow.classList.add("list-row");

            let content = document.createElement("div");
            content.classList.add("list-content");

            let text = document.createElement("span");
            text.classList.add("list-text");
            text.innerHTML = value;
            text.setAttribute("data-value", value);

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
}
