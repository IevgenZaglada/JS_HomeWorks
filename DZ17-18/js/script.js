$(function() {
    $(function() {
        $('[data-jcarousel]').each(function() {
            var el = $(this);
            el.jcarousel(el.data());
        });

        $('[data-jcarousel-control]').each(function() {
            var el = $(this);
            el.jcarouselControl(el.data());
        });
    });

    var params = {
        changedEl: '.teams',
        visRows: 5,
        scrollArrows: true
    };
    cuSel(params);

    $('input').styler();

});