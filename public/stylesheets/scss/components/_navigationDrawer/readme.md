### Navigation Drawer
Navigation drawers provide access to destinations in your app.

Currently it can slides out from left or from bottom, by toggling class name "nav-drawer-show".

To stop the content under the Navigation Drawer from scrolling, add class `no-scroll` to body when the drawer is open.

### Usage
```html
<div class="nav-drawer" id="bottom-nav-drawer">
    <div class="nav-drawer-bottom">
        <div class="nav-drawer-mainTitle"> Title <i
                class="nav-drawer-close icon icon-navigation_close_24px"></i>
        </div>
        <div class="nav-drawer-row active">
            <span class="nav-drawer-title">Item</span>
            <i class="nav-drawer-icon-right icon icon-general_favorite_24px"></i>
        </div>
        <div class="nav-drawer-row">
            <span class="nav-drawer-title">Item</span>
            <i class="nav-drawer-icon-right icon icon-general_favorite_24px"></i>
        </div>
        <div class="nav-drawer-row">
            <span class="nav-drawer-title">Item</span>
            <i class="nav-drawer-icon-right icon icon-general_favorite_24px"></i>
        </div>
        <div class="nav-drawer-row">
            <span class="nav-drawer-title">Item</span>
            <i class="nav-drawer-icon-right icon icon-general_favorite_24px"></i>
        </div>
        <div class="nav-drawer-row">
            <span class="nav-drawer-title">Item</span>
            <i class="nav-drawer-icon-right icon icon-general_favorite_24px"></i>
        </div>
        <div class="nav-drawer-row">
            <span class="nav-drawer-title">Item</span>
            <i class="nav-drawer-icon-right icon icon-general_favorite_24px"></i>
        </div>
        <div class="nav-drawer-row">
            <span class="nav-drawer-title">Item</span>
            <i class="nav-drawer-icon-right icon icon-general_favorite_24px"></i>
        </div>
    </div>
</div>
```
```js
document.getElementById("bottom-nav-drawer").classList.add("nav-drawer-show");
```
or
```js
document.getElementById("side-nav-drawer").classList.add("nav-drawer-show");
```
