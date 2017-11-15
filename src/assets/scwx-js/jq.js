$(function () {
    $('.list_item').mouseleave(function() {$('.jiNeng').removeClass('active');
     $('.el-carousel__indicators,.el-carousel__arrow').removeClass('curr');
         });
         $('.row_Left').on('click',function () {
            $('.icon_login').eq($(this).index()).show().siblings('.icon_login').hide();
         });
         // 鉴识课程


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
   