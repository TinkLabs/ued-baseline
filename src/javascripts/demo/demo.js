window.onload = e => {
    /*
     *
     * select baseline
     *
     */
    let indexes = document.getElementsByClassName("demo_indexes")[0].children;
    for (let i = 0; i < indexes.length; i++) {
        indexes[i].addEventListener('click', e => {
            let target = e.currentTarget.dataset.id;
            if (target) {
                hideAllDemo();
                showDemo(target);
            }
        });
    }

    const hideAllDemo = () => {
        let demo = document.getElementsByClassName("demo_display");
        for (let i = 0; i < demo.length; i++) {
            demo[i].setAttribute("style", "display:");
        }
    }

    const showDemo = target => {
        let parent = document.getElementById(target).parentNode;
        parent.setAttribute("style", "display:block");
    }





    /*
     *
     * Create and Destory Modal
     * 
     */

    /* Set up create button for modal generation */
    let createModal = document.getElementsByClassName("create-modal");
    for (let i = 0; i < createModal.length; i++) {
        createModal[i].addEventListener('click', e => {
            let modalid = e.target.dataset.modalid;
            /* Modal Settings */
            let modalSettings = {
                id: `modal${modalid}`,
                iconClass: (modalid === "2") ? [] : ["icon", "icon-device_access_alarm_24px"],
                title: "my modal",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                buttonText: (modalid === "2") ? ["cancel", "ok"] : ["very long button", "ok"],
                stackButton: (modalid === "2") ? false : true,
            }
            let modal = new Modal(modalSettings);
            modal.init();
        });
    }

    /* Toggle existing modal */
    let openModal = document.getElementsByClassName("open-modal");
    openModal[0].addEventListener('click', e => {
        document.getElementById('modal1').setAttribute("style", "");
    });

    /* Destory existing modal */
    let modalCloseBtn = document.getElementById("close-modal1");
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', e => {
            document.getElementById("modal1").setAttribute("style", "display:none");
        });
    }



    /*
     *
     * Show and Hide Nav Drawer
     * 
     */

    let navDrawerOpenBtn = document.getElementsByClassName("nav-drawer-toggle-btn");

    for (let i = 0; i < navDrawerOpenBtn.length; i++) {
        navDrawerOpenBtn[i].addEventListener('click', e => {
            let targetId = e.target.dataset.id;

            document.getElementById(targetId).classList.add("nav-drawer-show");

            // nav drawer children
            // -top/-left/-right/-bottom
            let container = document.getElementById(targetId).children[0];
            let mainTitle = container.children[0];
            let closeBtn = mainTitle.children[0];
            closeBtn.addEventListener("click", () => {
                document.getElementById(targetId).classList.remove("nav-drawer-show");
            });
            i = navDrawerOpenBtn.length;
        });
    }



    /*
     *
     * Show and Hide Menu on top bar dropdown
     * 
     */

    let demo_tb_dd_btn = document.getElementById("top-bar-dd-btn");
    let demo_menu_3 = document.getElementById("menu_3");
    demo_tb_dd_btn.addEventListener('click', e => {
        let isOpen = false;
        for (let i = 0; i < demo_menu_3.classList.length; i++) {
            isOpen = demo_menu_3.classList[i].match("m-show");
        }
        if (isOpen) {
            demo_menu_3.classList.remove("m-show");
        } else {
            demo_menu_3.classList.add("m-show");
        }
    });



    /*
     *
     * Create / show / hide dropdown menu
     *
     */

    // prepare demo data
    let ddValue = [];
    while (ddValue.length < 20) {
        ddValue.push(`item ${ddValue.length + 1}`);
    }

    let dd = new dropdown({
        id: "demo_dd",
        allValues: ddValue,
        defaultValue: ddValue[1]
    });
    dd.init();




    /*
     *
     * Adjust progress bar's width
     *
     */
    let pbControlBtn = document.getElementsByClassName("demo_pb_control");
    for (let i = 0; i < pbControlBtn.length; i++) {
        pbControlBtn[i].addEventListener('click', e => {
            let percentage = e.currentTarget.dataset.percent;
            document.getElementById("demo-pb-bar-1").setAttribute("style", `width: ${percentage}%`);
        })
    }



    /*
     *
     * Toggle backdrop
     *
     */

    let backdropToggle = document.getElementById("demo_toggle_backdrop_1");
    backdropToggle.addEventListener('click', e => {
        let id = e.currentTarget.dataset.target;
        let bd_class = document.getElementById(id).classList;
        // find `.collapse`
        let isCollapsed;
        bd_class.forEach(c => {
            if (c.match("collapse")) {
                isCollapsed = true;
            }
        });
        if (isCollapsed) {
            bd_class.remove("collapse");
        } else {
            bd_class.add("collapse");
        }
    });


    /*
     *
     * Slider
     *
     */

    var slider = document.getElementById('demo_rangeSlider');

    noUiSlider.create(slider, {
        start: [50],
        connect: [true, false],
        range: {
            'min': 0,
            'max': 100
        },
    });

    // When the slider value changes
    slider.noUiSlider.on('update', function (values, handle) {
        console.log(values, handle);
    });

    /*
     *
     * Circular progress bar
     *
     */
    let cpb = new circularProgressBar({id: "circular-progress-1"});

    cpb.init();

    document
    .getElementById("set-progress-bar-1")
    .addEventListener('click', e => {
        cpb.update(0.2);
    });
    document
    .getElementById("set-progress-bar-2")
    .addEventListener('click', e => {
        cpb.update(0.7);
    });
    document
    .getElementById("set-progress-bar-infinite")
    .addEventListener('click', e => {
        cpb.infinite();
    });
    document
    .getElementById("set-progress-bar-toggle")
    .addEventListener('click', e => {
        cpb.toggleInfinite();
    });
    document
    .getElementById("set-progress-bar-reset")
    .addEventListener('click', e => {
        cpb.reset();
    });




    /*
     *
     * Search Input History
     *
     */

    let dsih = document.getElementById("demo-search-input-history");
    let history = ["search history", "search history 2", "search history 3"];
    dsih.addEventListener('click', e => {
        if (!dsih.children.length) {
            // create list
            let ul = document.createElement("ul");
            ul.classList.add("search-history");
            ul.classList.add("list");

            let items = history.map(h => (appendHistoryList(h)));
            items.forEach(i => {
                i.addEventListener('click', c => removeHistoryList());
                ul.appendChild(i);
            });
            dsih.parentNode.appendChild(ul);
        }
    });

    const appendHistoryList = (h) => {
        let li = document.createElement("li");
        li.classList.add("list-row");
        let content = document.createElement("div");
        content.classList.add("list-content");
        let text = document.createElement("div");
        text.classList.add("list-text");
        let span = document.createElement("span");
        span.classList.add("list-text-secondary");
        span.innerHTML = h;

        text.appendChild(span);
        content.appendChild(text);
        li.appendChild(content);
        return li;
    };

    const removeHistoryList = () => {
        dsih.parentElement.querySelector(".search-history").remove();
    }

    /*
     *
     * Prevent Submit
     *
     */

    let submitBtns = document.querySelectorAll("button[type=submit]");
    submitBtns.forEach(b => {
        b.addEventListener('click', e => {
            e.preventDefault();
        })
    });


};
