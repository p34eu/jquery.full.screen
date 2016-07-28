/*
*   https://github.com/p34eu/jquery.full.screen
*   
 *   v0.0.9
*
*/

(function ($) {
    "use strict";
    $.fn.fullscreen = function (options) {
        var settings = $.extend({
            iconEnter: 'zmdi zmdi-fullscreen-alt',
            iconExit: 'zmdi zmdi-fullscreen-exit',
            onenter: function () { },
            onexit: function () { }
        }, options);
        return this.each(function () {
            var btn = $(this);
            btn.on('click', function (e) {
                var target = $(this).data('target'),
                    t = !target ? document.documentElement : $(target).get()[0],
                    i = btn.children('i').first();
                isfs() ? exit(t, i) : enter(t, i);
            });
        });

        function isfs() {
            return window.fulscr && window.fulscr === 1;
        }

        function exit(t, i) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
            if (window.fulscr) {
                delete (window.fulscr);
                setTimeout(function () {
                    settings.onexit.call();
                    i.removeClass(settings.iconExit).addClass(settings.iconEnter);
                }, 800);
            }
        }

        function enter(element, icon) {

            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
            } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
            }
            if (icon) {
                icon.removeClass(settings.iconEnter).addClass(settings.iconExit);
            }
            window.fulscr = 1;
            setTimeout(function () {
                settings.onenter.call();
                $(document).one('webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange', function (e) {
                    exit(element, icon);
                });
            }, 800);
        }
    }
})(jQuery);
