### Variables

This SCSS file contains most of the variables that is used within the library:

- `$hi-navy`, `$hi-gold` and their gradient colors.

- Secondary color:

| Color | Hex Code |
| --- | --- |
| `$hi-red` | `#da291c` |
| `$hi-green` | `#4a783c` |
| `$hi-blue` | `#8dc8e8` |
| `$hi-purple` | `#b06c95` |

- Dark and Light Color Opacity Levels

| Color | Opacity Levels |
| --- | --- |
| Dark | 88%, 56%, 32%, 8% |
| Light | 88%, 56%, 32% |


### Color Function

The `function blendNormal($foreground, $background)` generates a new color by combining foreground and background color.
Which is particullarly useful when working on overlay.
