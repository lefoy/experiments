jQuery(document).ready(function($) {

    var demo = $('.css-blobbing-demo'),
        hover =  demo.find('.hover'),
        top = demo.offset().top,
        left = demo.offset().left,
        width = hover.width();

    if (hover.length > 0) {
        $(document).on('mousemove', function(e) {
            hover.css({
                left: e.pageX - left - width / 2,
                top: e.pageY - top - width / 2
            });
        });
    }

});
