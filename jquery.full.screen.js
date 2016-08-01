/*
 *   https://github.com/p34eu/jquery.full.screen
 *   
 *   v0.1.0
 *
 */

(function ($) {
    "use strict";
    $.fn.fullscreen = function (options) {
        var settings = $.extend({
            iconEnter: 'zmdi zmdi-fullscreen-alt',
            iconExit: 'zmdi zmdi-fullscreen-exit',
            delay: 220,
            onenter: function () {},
            onexit: function () {}
        }, options);
        return this.each(function () {
            var btn = $(this);
            btn.on('click', function (e) {
                var target = $(this).data('target'), t = !target ? document.documentElement : $(target).get()[0], i = btn.children('i').first();
                if (isfs()) {
                    ex(t, i);
                } else {
                    ent(t, i);
                }
            });
        });
        function isfs(e) {
            if (document.webkitIsFullScreen !== 'undefined') {
                return document.webkitIsFullScreen;
            }
            if (document.msFullscreenElement !== 'undefined') {
                return document.msFullscreenElement;
            }
            if (document.fullscreen !== 'undefined') {
                return document.fullscreen;
            }
            if (document.mozFullScreen !== 'undefined') {
                return document.mozFullScreen;
            }
        }
        function ex(t, i) {
            exit();
            setTimeout(function () {
                settings.onexit.call();
                i.removeClass(settings.iconExit).addClass(settings.iconEnter);
            }, settings.delay);
        }
        function exit() {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
        function ent(e, icon) {
            exit();
            enter(e);
            setTimeout(function () {
                icon.removeClass(settings.iconEnter).addClass(settings.iconExit);
                $(document).one('webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange', function (e) {
                    ex(e, icon);
                });
                settings.onenter.call();
            }, settings.delay);
        }
        function enter(element) {
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
            } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
            }

        }
    };
})(jQuery);
