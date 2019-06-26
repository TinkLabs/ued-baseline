### File Uploader
This is a pure CSS component, JS / React component is not on schedule. Pull Request is very welcomed.

### Usage
#### Default State

```html
<form class="file-uploader" method="post" action="" enctype="multipart/form-data">
    <div class="up-control">
        <label for="file-uploader-1" class="up-label">
            Drag and drop files here or
            <a class="btn">Browse files</a>
        </label>
        <input id="file-uploader-1" class="up-input"
            type="file" name="files[]"
            data-multiple-caption="{count} files selected" multiple />
    </div>
</form>
```

#### File Chosen
1. update the label text yourself
2. toggle class `hide` on submit button

```html
<form class="file-uploader" method="post" action="" enctype="multipart/form-data">
    <div class="up-control">
        <label for="file-uploader-2" class="up-label">
            N files have been selected
        </label>
        <input id="file-uploader-2" class="up-input"
            type="file" name="files[]"
            data-multiple-caption="{count} files selected" multiple />
        <button type="submit">Upload</button>
    </div>
</form>
```

### Remark
Chrome on T2 works fine, but Webview on T2 is not working. Consult android team.

