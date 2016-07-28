# jquery.full.screen

- One of the many jquery plugins that combine the <a href="http://caniuse.com/#search=fullscreen" target="_blank"> Full Screen API</a> in single call.
- Lightweight: ~60 lines - 1.2K minified 
- Allows toggling specific page elements and the window.

### Example usage:
```html
    <p data-toggle="fullscreen" > make page full screen</p>
    <p data-toggle="fullscreen" data-target="#mydiv" > make #mydiv full screen</p>

     $('[data-toggle="fullscreen"]').fullscreen();
```

### Options and callbacks
```js
          {
               iconEnter: 'zmdi zmdi-fullscreen-alt',
               iconExit: 'zmdi zmdi-fullscreen-exit',
               onenter: function() {},
               onexit: function() {}
          }
```

### Install
```sh
    bower / npm install jquery.full.screen
```

### [Demo](http://p34eu.github.io/jquery.full.screen/)

### Notes
Please check "can i use" for list of browsers which support the <a href="http://caniuse.com/#search=fullscreen" target="_blank"> Full Screen API</a>.
It seems that is not yet working on some mobile browsers, i.e IOS safari and native android browser.
