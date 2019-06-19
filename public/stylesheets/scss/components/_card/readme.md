### Card
Cards contain content and actions about a single subject.

Cards also come in various size and layout accoring to position on screen and functionality.

Card size and names are set referencing to handy phone / app.

### Usage
#### Full Width Card, 16:9, no padding

```html
<div class="card card-fw">
    <!-- Card wrapper -->
        <div class="card-container">
        <!-- Card Head -->
            <div class="card-head">
                <img class="card-head-avatar avatar" alt="avatar" src="./public/images/checker_bg.png">
                <div class="card-head-text">
                    <span class="card-head-title"> Full Width Card </span>
                    <span class="card-head-subtitle"> card-fw </span>
                </div>
                <i class="card-head-icon icon icon-general_favorite_24px"></i>
            </div>
        <!-- Card Media -->
            <div class="card-media-container">
                <img class="card-media" alt="card-media" src="./public/images/img_fw.png">
                <div class="card-media-overlay">
                    <div class="card-media-overlay-top">
                        <span class="tag"> Bestseller </span>
                        <i class="card-media-overlay-videoBtn
                        icon icon-av_play_circle_outline_24px"></i>
                    </div>
                    <div class="card-media-overlay-bottom">
                        <span class="card-media-overlay-bottom-title"> Image Title </span>
                        <span class="card-media-overlay-bottom-subtitle">Image subtitle</span>
                    </div>
                </div>
            </div>
        <!-- Card Body -->
            <div class="card-body">
                <!-- Body Title -->
                <span class="card-body-title"> Hong Kong Disneyland Admisison Ticket (QR Code Direct)
                </span>
                <!-- Body Content -->
                <span class="card-body-content"> Enter directly with QR code </span>
                <!-- Body Tags -->
                <span class="tag"> Hong Kong </span>
                
                <!-- Body Ticketing infos -->
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

#### Large Card 16:9

```html
<div class="card card-l">
    <div class="card-container">
        <div class="card-head">
            <img class="card-head-avatar avatar" alt="avatar" src="./public/images/checker_bg.png">
            <div class="card-head-text">
                <span class="card-head-title"> Large Card </span>
                <span class="card-head-subtitle"> card-l </span>
            </div>
            <i class="card-head-icon icon icon-general_favorite_24px"></i>
        </div>
        <div class="card-media-container">
            <img class="card-media" alt="card-media" src="./public/images/img_l.png">
            <div class="card-media-overlay">
                <div class="card-media-overlay-top">
                    <span class="tag"> Bestseller </span>
                    <i class="card-media-overlay-videoBtn
                    icon icon-av_play_circle_outline_24px"></i>
                </div>
                <div class="card-media-overlay-bottom">
                    <span class="card-media-overlay-bottom-title"> Image Title </span>
                    <span class="card-media-overlay-bottom-subtitle">Image subtitle</span>
                </div>
            </div>
        </div>
        <div class="card-body">
            <span class="card-body-title"> Hong Kong Disneyland Admisison Ticket (QR Code Direct)
            </span>
            <span class="card-body-content"> Enter directly with QR code </span>
            <span class="tag"> Hong Kong </span>
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

#### Medium Size Card, 16:9

```html
<div class="card card-m-wide">
    <div class="card-container">
        <div class="card-media-container">
            <img class="card-media" alt="card-media" src="./public/images/img_m_wide.png">
        </div>
        <div class="card-body">
            <span class="card-body-title"> Medium Card 16:9 image </span>
            <span class="card-body-content"> card-m-wide </span>
        </div>
    </div>
</div>
```

#### Medium Size Card, 4:3

```html
<div class="card card-m">
    <div class="card-container">
        <div class="card-media-container">
            <img class="card-media" alt="card-media" src="./public/images/img_m.png">
        </div>
        <div class="card-body">
            <span class="card-body-title"> Medium Card 4:3 image </span>
            <span class="card-body-content"> card-m </span>
        </div>
    </div>
</div>
```
