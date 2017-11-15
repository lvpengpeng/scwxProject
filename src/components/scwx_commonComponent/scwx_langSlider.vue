<style  lang="less"> 
div {
.slider {
  .btn-right {
  background: url('../../../static/scwx-images/scwx_homePage_imges/row_right.png') no-repeat left center;
 }
 .btn-left { 
  background: url('../../../static/scwx-images/scwx_homePage_imges/row_left.png') no-repeat left center;
 }
 .btn {
  transition:none;
 }
}
.slider-icon {
  border:none!important;
}
.slider:hover .btn-left {
  background: url('../../../static/scwx-images/scwx_homePage_imges/row_left.png') no-repeat left center !important;
}
.slider:hover .btn-right {
  background: url('../../../static/scwx-images/scwx_homePage_imges/row_right.png') no-repeat left center !important;
}
.btn:hover, .btn:focus, .btn.focus {
  border:none !important;
  text-decoration: none !important;
}
.btn-right:active,.btn-left:active {
  outline:none!important;
  background:none !important;
  border:none!important;
  box-shadow:none!important;
}
}

</style>


<template>
<!-- 调用参数 -->

<!-- width String  
height  String  
interval  Number  
speed Number 播放速率
auto  Boolean 自动播放   默认是true
indicators  'center', 'left', 'right', false  'center'  Show indicators on option 
control-btn Boolean true  ----》控制圆点
animation String - { normal, fade } normal  Change animation
<div> -->
<div id="order-list">
    <slider width="1200px"
        animation="fade"
        :interval="12000" 
        :speed="2000"
        height="186px"
        :indicators=false
        style="margin-top:300px">
  <slider-item>
    <p style="display:flex;justify-content:center;">
      <img :src="img.first" alt="" v-for="img in imges"/>
    </p>
  </slider-item>
  <slider-item>
    <p style="display:flex;justify-content:center;">

    <img src="../../../static/scwx-images/scwx_homePage_imges/langSlider2.png" height="193" width="302" alt="" />

    <img style="margin-left:30px;margin-right:30px;" src="../../../static/scwx-images/scwx_homePage_imges/langSlider2.png" height="193" width="302" alt="" />

    <img src="../../../static/scwx-images/scwx_homePage_imges/langSlider2.png" height="193" width="302" alt="" />

    </p>
  </slider-item>
</slider>
</div>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider';
    export default {
         components: {
            Slider,
            SliderItem
          },
        data () {
            return {
              imges:[
                {first:require('../../../static/scwx-images/scwx_homePage_imges/langSlider1.png') },
                {first:require('../../../static/scwx-images/scwx_homePage_imges/langSlider1.png') },
                {first:require('../../../static/scwx-images/scwx_homePage_imges/langSlider1.png') }
              ]

            }
        },
        methods:{

        },
        mounted:function () {

           }
    }
</script>
