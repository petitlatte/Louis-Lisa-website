//scroll down button 

$(".ourservices").click(function() {
    $('html,body').animate({
        scrollTop: $(".conB").offset().top},
        'slow');
});



//back to top button
if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();

    $(window).on('scroll', function () {
        backToTop();
    });
    
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

AOS.init({
  duration: 1200,
   disable: 'mobile'
});
