$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
       $('fixedBar').addClass('fixed-header');
    }
    else {
       $('fixedBar').removeClass('fixed-header');
    }
});