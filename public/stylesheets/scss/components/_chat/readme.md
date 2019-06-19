### Chat
The Chat style library provides chat bubbles for plain text, voice message, input component including text field, record audio button and send button.

For ordinary HTML, include the handy js library to get auto resizing for textfield.

You need to write your own trigger if you are using SPA like React.

#### Usage
Input text field

```html
<!-- chat input container -->
<div class="chat-input">
    <!-- `chat-voice` is the button for actions like voice recording -->
        <i class="chat-voice icon icon icon-av_mic_24px"></i>
    
    <!-- user text input area, you may need your own js to control its size -->
        <textarea
            class="chat-text" rows="1" 
            placeholder="type something"
            onkeyup="textAreaResize(this)"
        ></textarea>
    
    <!-- `chat-send` is the send button -->
    <!-- `send-enabled` is used to toggle the disable state -->
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
