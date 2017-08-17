$(window).scroll(function() {
    if($(this).scrollTop() > 50)
    {
        $('.custom-navbar').addClass('opaque');
    } else {
        $('.custom-navbar').removeClass('opaque');
    }
});
