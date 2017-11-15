<style scoped lang="less">
@import '../../assets/scwx-less/px2rem.less';
    .marquee {
        .w(450px);.h(450px);
        .border(2px,skyblue,solid);
        .mt(500px);
        .m-auto;
        .marqueeImg {
            .p-absolute;
            .ft(0px);.dis-block;
        }
        .character {
            .p-absolute;z-index:10;
            width:450px;height:450px;
            .w-inherit;.h-inherit;
            .bg_color(rgba(0,0,0,0.5));
            .text_center;color:#ffffff;
            .stage {
        width:400px;height:300px; position: relative;
        overflow: hidden;.text_center;.mt(50px);
         .slider {
        position: absolute; left:0;top:0;
        .content {width:400px;height:400px;.text_center;
            ;p {.l-height(30px);
       }
      }
     }
    }
   }
 }

.swiper-container {
    width: 450px;
    height: 450px;
}  
.swiper-button-prev,.swiper-button-next{
    .bg_color(rgba(0,0,0,.6));

}

</style>

<template>
    <div style="margin-top:400px">
       
<div class="swiper-container" @mouseenter="isShow = true"  @mouseleave="isShow = false">
    <div class="swiper-wrapper">
        <div class="swiper-slide"> <div class="marquee">
            <img class="marqueeImg" src="../../../static/scwx-images/scwx_homePage_imges/jskc_video.png" height="403" width="443" alt="" />
            <div class="character" >

                    <div class="stage">
        <div class="slider">
            <div class="content">
               <h4>培训</h4>
               <p>vvservfrsevrsv</p>
               <p>rgvresvgrs</p>
               <p>rtsvgrtgvrtsdgvtsdr</p>
               <p>gvtsrgvtrdg</p>
               <p>vrstdgvdrg</p>
               <p>srgtrgtrg</p>
               <h4>培训</h4>
               <p>vvservfrsevrsv</p>

             
            </div>
            </div>
        </div>
    </div>
            </div></div>
        <div class="swiper-slide"> <div class="marquee">
            <img class="marqueeImg" src="../../../static/scwx-images/scwx_homePage_imges/jskc_video.png" height="403" width="443" alt="" />
            <div class="character">

                    <div class="stage">
        <div class="slider">
            <div class="content">
               <h4>培训</h4>
               <p>vvservfrsevrsv</p>
               <p>rgvresvgrs</p>
               <p>rtsvgrtgvrtsdgvtsdr</p>
               <p>gvtsrgvtrdg</p>
               <p>vrstdgvdrg</p>
               <p>srgtrgtrg</p>
               <h4>培训</h4>
               <p>vvservfrsevrsv</p>

             
            </div>
            </div>
        </div>
    </div>
            </div></div>
        <div class="swiper-slide"> <div class="marquee">
            <img class="marqueeImg" src="../../../static/scwx-images/scwx_homePage_imges/jskc_video.png" height="403" width="443" alt="" />
            <div class="character">

                    <div class="stage">
        <div class="slider">
            <div class="content">
               <h4>培训</h4>
               <p>vvservfrsevrsv</p>
               <p>rgvresvgrs</p>
               <p>rtsvgrtgvrtsdgvtsdr</p>
               <p>gvtsrgvtrdg</p>
               <p>vrstdgvdrg</p>
               <p>srgtrgtrg</p>
               <h4>培训</h4>
               <p>vvservfrsevrsv</p>
             
            </div>
            </div>
        </div>
    </div>
            </div></div>
    </div>
    <div class="swiper-button-prev" v-show="isShow"></div>
    <div class="swiper-button-next" v-show="isShow"></div>
</div>

        </div>
 
</template>

<script>
import scwx_superSlider from  '../../assets/scwx-js/scwx_superSlider.js';
    export default {
        data () {
            return {
                isShow:false

            }
        }
    }
</script>







