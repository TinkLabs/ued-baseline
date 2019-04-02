window.onload = e => {

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

};
