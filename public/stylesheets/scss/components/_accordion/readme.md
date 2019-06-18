### Accordion
An expandable list that shows user details about the list title.

### Usage
There are two types of behavior on opening accordion.
Use radio button if you want the accordion set to open one tab only.
Use checkbox button if you want the accordion set to open multiple tabs.
Use class name `ac-m` together with `accordion` if you want bigger font size.

#### Opening Multiple Accordions
```html
<div class="accordion">
    // hidden checkbox button that control accordion state
    <input id="demo_accordion_1" type="checkbox" name="demo_accordion_set_1" />
    <label for="demo_accordion_1" class="ac-title">Label</label>
    <div class="ac-body">
        <p class="ac-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto</p>
    </div>
</div>
<div class="accordion">
    <input id="demo_accordion_2" type="checkbox" name="demo_accordion_set_1" />
    <label for="demo_accordion_2" class="ac-title">Label</label>
    <div class="ac-body">
        <p class="ac-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto</p>
    </div>
</div>
<div class="accordion">
    <input id="demo_accordion_3" type="checkbox" name="demo_accordion_set_1" />
    <label for="demo_accordion_3" class="ac-title">Label</label>
    <div class="ac-body">
        <p class="ac-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto</p>
    </div>
</div>
```

#### Opening Single Accordion
```html
<form>
    // wrap the set of accordion in a form so that you can have multiple accordion sets that open single accordion
    <div class="accordion">
        // hidden radio input that control accordion state
        <input id="demo_accordion_4" type="radio" name="demo_accordion_set_2" />
        // label for button which serve as title of the accordion
        <label for="demo_accordion_4" class="ac-title">Label</label>
        // the actual body of the accordion, which is hidden by default
        <div class="ac-body">
            <p class="ac-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto</p>
        </div>
    </div>
    <div class="accordion">
        <input id="demo_accordion_5" type="radio" name="demo_accordion_set_2" />
        <label for="demo_accordion_5" class="ac-title">Label</label>
        <div class="ac-body">
            <p class="ac-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto</p>
        </div>
    </div>
    <div class="accordion">
        <input id="demo_accordion_6" type="radio" name="demo_accordion_set_2" />
        <label for="demo_accordion_6" class="ac-title">Label</label>
        <div class="ac-body">
            <p class="ac-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto</p>
        </div>
    </div>
</form>
```

