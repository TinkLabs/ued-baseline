### Grid system

`Experimental`, feedback and contribution very welcomed.

#### Code

```SCSS
.row::before,
.row::after {
  display: table;
  content: " ";
  clear: both;
}

.one,
.one-third,
.two-thirds,
.one-fourth,
.col-2 {
  width: 100%;
}
/* 
 * Any styling that should be applied to screen widths larger
 * than a mobile device: tablet, laptop, desktop, etc. 
 */

@media only screen and (min-width: 800px) {
  .col-1 {
    width: 100%;
  }
  .col-2 {
    width: calc(100% / 2);
  }
  .col-3 {
    width: calc(100% / 3);
  }
  .col-4 {
    width: calc(100% / 4);
  }
  .col-6 {
    width: calc(100% / 6);
  }
  .col-12 {
    width: calc(100% / 12);
  }
  .col-3-r {
    width: calc(100% / 3 * 2);
  }
  .col-4-r {
    width: calc(100% / 4 * 3);
  }
  .col-6-r {
    width: calc(100% / 6 * 5);
  }
  .column {
    float: left;
  }
}
/* Styling */

.column {
  border: 1px solid #666;
  background: #343436;
  padding: 15px;
  margin-bottom: 10px;
}
```
