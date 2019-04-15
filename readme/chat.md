### Chat
The Chat style library provides chat bubbles for plain text, voice message, input component including text field, record audio button and send button.

Include the handy js library to get auto resizing for textfield.

### Usage
Input text field
Class name is for styling

```html
<div class="chat-input">
    <i class="chat-voice icon icon icon-av_mic_24px"></i>
    <textarea
        class="chat-text" rows="1" 
        placeholder="type something"
        onkeyup="textAreaResize(this)"
    ></textarea>
    <i class="chat-send send-enabled icon icon-content_send_24px"></i>
</div>
```

Chat Bubbles
```html
<div class="chat-bubble bubble-right"> 
    <div class="msg-wrapper">
        <span class="chat-msg"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel magna malesuada, eleifend elit luctus, aliquam elit. Nam at vulputate leo. </span>
    </div>
</div>
```

Audio Chat Bubble
```html
<div class="chat-bubble bubble-left">
    <div class="msg-wrapper playing infinite-animation">
        <i class="audio-control icon icon-av_pause_circle_filled_24px"></i>
        <span class="audio-timer">0:01</span>
    </div>
</div>
```
