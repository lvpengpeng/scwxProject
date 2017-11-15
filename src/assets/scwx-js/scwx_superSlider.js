 ;$(function() {
        var oldSliderHeight = $('.stage .slider').height();
        var stageHeight = $('.stage').height();
        var cloneTime = Math.floor(stageHeight / oldSliderHeight);
        if (cloneTime < 1) {cloneTime = 1;}
        var maxTop = -1 * oldSliderHeight;
        for(var i = 0; i < cloneTime; i++){
            $('.stage .slider').append($('.stage .slider .content').clone());
        }
        // $('.stage').mouseenter(function() {
        //     $(this).children('.slider').stop();
        // }).mouseleave(function() {
        //     moveUp();
        // });

        // 为stage添加鼠标移入和移出事件响应函数，另一种写法
        $('.stage').hover(function() {
            $(this).children('.slider').stop();
        },function() {
            moveUp();
        });
        function moveUp() {
            if (parseFloat($('.stage .slider').css('top')) <= maxTop) {
                $('.stage .slider').css('top', '0');
            }
            $('.stage .slider').stop().animate({
                top: '-=3'
            }, 50, 'linear', function() {
                moveUp();
            });
        }
        moveUp();
    });
// imgSilder
$(document).ready(function(){
            var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        // autoplay:2000,
         autoplayDisableOnInteraction:false,
        loop: true,
          nextButton: '.swiper-button-next',
           prevButton: '.swiper-button-prev'
    });
     });