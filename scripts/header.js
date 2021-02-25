$(document).ready(function(){
    $('.menu-btn').change(function(event){
        if ($(this).is(":checked")) {
            $('.header').addClass('header-coloured');
        }
        else {
            $('.header').removeClass('header-coloured');
        }
    });

    $(window).resize(function() {
        $('.menu-btn').prop('checked', false).trigger('change');
    });
});