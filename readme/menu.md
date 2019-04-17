### List
"Menus display a list of choices on temporary surfaces."

### Usage
Class `menu-anchor` sets reference element's position as `relative`.
Class `m-full` sets menu to screen width.
Class `m-show` is the class that can toggle menu visibility.
```html
<div class="menu-anchor">
    <ul class="menu m-show" id="menu_1">
        <li class="m-item">
            <span class="m-text">item</span>
        </li>
        <li class="m-item">
            <span class="m-text">item</span>
            <i class="icon icon-navigation_chevron_right_24px"></i>
        </li>
        <li class="m-item">
            <i class="icon icon-toggle_star_24px"></i>
            <span class="m-text">item</span>
        </li>
    </ul>
</div>
```
