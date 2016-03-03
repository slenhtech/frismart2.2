/**
 * Created by Alexandre on 3/1/2016.
 */
$(function () { $("[data-toggle='tooltip']").tooltip({placement: 'top', trigger: 'hover focus'}); });

/*****************

Smooth scroll

 *****************/

var topBarMenu_toggleButton = $('#menu-top-toggle-button');
topBarMenu_toggleButton.click(function () {
    var menuTop = $('#menu-top-collapse');
    menuTop.slideToggle();
})

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

/*****************************************************

  Owl carousel: -Page établissement #block-photos

 ****************************************************/

var photos = $("#photos-etablissement");
photos.owlCarousel({
    items : 4,
    lazyLoad : true,
    navigation : true,
    autoPlay: true,
    navigationText:	["&#xf053;","&#xf054;"]
});

/********************************

        back to top button

 ********************************/
var btt = $('.back-to-top');
btt.on('click', function () {
    $('html, body').animate({
        scrollTop:200
    },800);
})
$(window).on('scroll', function () {
    //120px
    var self = $(this),
        height = self.height(),
        top = self.scrollTop();

    if(top > height){
        if(!btt.is(':visible')){
            btt.fadeIn();
        }
    }
})

