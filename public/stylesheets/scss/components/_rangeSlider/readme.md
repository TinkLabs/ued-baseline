### Range Slider
An input component that allows user set value within a preset range by draging the button on the track.

### Usage
Since support on styling `input[type=range]` with pure CSS is low, an external library is induced to provides both styling and functional support.

See [noUiSlider](https://github.com/harrisonchan9/noUiSlider) for full documentations.

```html
<!-- label the slider with an id -->
<div id="demo_rangeSlider"></div>

<!-- also include the js library -->
<script src="<CDN domain>/handyBaseline.min.js"></script>
```

```js
var slider = document.getElementById('demo_rangeSlider');

noUiSlider.create(slider, {
    // starting position of knob
    start: [50],
    // Display colored bars between handles
    connect: [true, false],
    // min max of value on the bar
    range: {
        'min': 0,
        'max': 100
    },
});

// When the slider value changes ...
slider.noUiSlider.on('update', function (values, handle) {
    // `values` is the value of current state, in case of multiple knobs, `values` is an array
    // `handle` is the index of the knob that triggered the action
    // your code here
});
```

There are some other options such as:

```js
// tooltip
tooltip: true,
// show scale
pips: {
    mode: 'steps',
    stepped: true,
    density: 10
},
// step difference
step: 10,
```

See library [documentation](https://refreshless.com/nouislider/) for more information.
