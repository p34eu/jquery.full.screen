# jquery.full.screen
- jquery plugin
- Full screen anything with only 60 lines non-minified js.
- 1.2K minified.


# Example usage:

    <p data-toggle="fullscreen" > make page full screen</p>
    <p data-toggle="fullscreen" data-target="#mydiv" > make #mydiv full screen</p>

     $('[data-toggle="fullscreen"]').fullscreen();


# Options and callbacks

          {
               iconEnter: 'zmdi zmdi-fullscreen-alt',
               iconExit: 'zmdi zmdi-fullscreen-exit',
               onenter: function() {},
               onexit: function() {}
          }


# Install

    bower / npm install jquery.full.screen

# [Test](http://p34eu.github.io/jquery.full.screen/)
