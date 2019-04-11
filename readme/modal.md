### Dialog / Modal
Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.
Dialog can be created in 2 ways, either by plain HTLM, with custom JS.
Or by builtin Modal Class functions.
### Usage
Case 1: Using Class Function, in HTML file add a reference element with a modal ID:
```html
<button class="btn" data-modalid="1">Build By Code</button>
<div id="modal_1></div>
```
and in javascript:
```js
let modalSettings = {
    // modal id : string
    id: "modal_1",
    // class names of modal icon : string array
    iconClass: ["icon", "icon-device_access_alarm_24px"],
    // modal title : string
    title: "my modal",
    // modal body text : string
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    // action buttons : string array, max length = 2
    buttonText: ["very long button", "ok"],
    // align button vertically instead, default false
    stackButton: true,
}
let modal = new Modal(modalSettings);
// create this modal
modal.init();
// destory this modal
modal.destory();
```

Case 2: Create a dailog with plain HTML:
```html
<div class="modal" id="modal1">
    <div class="modal-wrapper">
        <div class="modal-header">
            <h3 class="modal-title">Modal Title</h3>
        </div>
        <div class="modal-body">
            <p class="modal-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="modal-footer">
            <button class="btn btn-contained" id="close-modal1">Close</button>
        </div>
    </div>
</div>
```
