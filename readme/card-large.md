### Card
Cards contain content and actions about a single subject.

Cards also come in various size and layout accoring to position on screen and functionality.

### Usage
Main Card
```html
<div class="card card-l">
    <div class="card-container">
        /* Card Head */
        <div class="card-head">
            <img class="card-head-avatar avatar" alt="avatar" src="./public/images/checker_bg.png">
            <div class="card-head-text">
                <span class="card-head-title"> card title </span>
                <span class="card-head-subtitle"> card subtitle </span>
            </div>
            <i class="card-head-icon icon icon-general_favorite_24px"></i>
        </div>

        /* Card Media */
        <div class="card-media-container">
            <img class="card-media" alt="card-media" src="./public/images/img_l.png">
            <div class="card-media-overlay">

            </div>
        </div>

        /* Card Body */
        <div class="card-body">
            /* Body Title */
            <span class="card-body-title">
                Hong Kong Disneyland Admisison Ticket (QR Code Direct)
            </span>

            /* Body Content */
            <span class="card-body-content">
                Enter directly with QR code
            </span>

            /* Body Tags */
            <span class="tag"> Okinawa </span>
            <span class="tag"> Koln </span>
            <span class="tag"> Hong Kong </span>
            <span class="tag"> Sydney </span>
            <span class="tag"> Moscow </span>
            <span class="tag"> Casablanca </span>

            /* Body Ticketing infos */
            <div class="card-body-ticketing">
                <div class="card-body-ticketing-rating">
                    <i class="icon icon-toggle_star_24px"></i>
                    <i class="icon icon-toggle_star_24px"></i>
                    <i class="icon icon-toggle_star_24px"></i>
                    <i class="icon icon-toggle_star_24px"></i>
                    <i class="icon icon-toggle_star_border_24px"></i>
                </div>
                <div class="card-body-ticketing-pricing">
                    <span class="card-body-ticketing-price-previous"> HK$ 888 </span>
                    <span class="card-body-ticketing-price"> HK$ 558 </span>
                </div>
            </div>

        </div>
    </div>
</div>

```
