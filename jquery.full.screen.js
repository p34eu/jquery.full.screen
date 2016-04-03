
(function ($) {
    "use strict";
    $.fn.fullscreen = function (options) {
        var settings = $.extend({
            iconEnter: 'zmdi zmdi-fullscreen-alt',
            iconExit: 'zmdi zmdi-fullscreen-exit',
            onenter: function () { }, onexit: function () { }
        }, options);

        return this.each(function () {
            var btn = $(this);
            btn.on('click', function (e) {
                e.preventDefault();
                var target = $(this).data('target');
                if (!target) {
                    target = document.documentElement;
                } else {
                    target = $(target).get()[0];
                }
                var i = btn.children(i).first();
                enter(target, $(i));
                //$(this).closest('.dropdown').removeClass('open');
            })
        });
        function exit() {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
            settings.onexit.call();
        }
        function enter(element, icon) {
            if (window.fulscr) {
                if (icon) {
                    icon.removeClass(settings.iconExit).addClass(settings.iconEnter);
                }
                exit();
                delete(window.fulscr);
                settings.onexit.call();
            } else {
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
                settings.onenter.call();
            }
        }

    }
})(jQuery);
