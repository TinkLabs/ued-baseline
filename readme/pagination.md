### Pagination
Pagination component provides user a quick way to reach different page or section within the page content.

### Usage
Use `pg-disabled` to disable back and forth button.
Use `active` to highlight current page.
##### Normal / Default Situation
```html
<div class="pagination">
    <a class="pg-back pg-disabled"></a>
    <div class="pg-btn-wrapper">
        <a class="pg-btn active"> 1 </a>
        <a class="pg-btn"> 2 </a>
        <a class="pg-btn"> 3 </a>
        <a class="pg-btn"> ... </a>
        <a class="pg-btn"> 100 </a>
    </div>
    <a class="pg-forth"></a>
</div>
```

##### In the Middle
The maximun number of page button can be displayed is 7.
```html
<div class="pagination">
    <a class="pg-back pg-disabled"></a>
    <div class="pg-btn-wrapper">
        <a class="pg-btn"> 1 </a>
        <a class="pg-btn"> ... </a>
        <a class="pg-btn"> 101 </a>
        <a class="pg-btn active"> 102 </a>
        <a class="pg-btn"> 103 </a>
        <a class="pg-btn"> ... </a>
        <a class="pg-btn"> 200 </a>
    </div>
    <a class="pg-forth"></a>
</div>
```
