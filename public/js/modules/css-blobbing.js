jQuery(document).ready(function($) {

    if ($('.css-blobbing-demo').length > 0) {

        var demo = $('.css-blobbing-demo'),
            hover = demo.find('.hover'),
            top = demo.offset().top,
            left = demo.offset().left,
            width = hover.width();

        demo.on('mousemove', function(e) {
            hover.css({
                left: e.pageX - left - width / 2,
                top: e.pageY - top - width / 2
            });
        });
    }

});
