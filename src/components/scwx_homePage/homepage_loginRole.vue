<template>
    <div class="homepage_loginRole">
  
        <div class="main_login swiper-container">
<!-- 左按钮 -->
<span class="row_Left swiper-button-prev" style="position:absolute;left:0;">
<a href="javascript:void(0)"><img src="../../../static/scwx-images/scwx_homePage_imges/row_Left.png" height="80" width="40" alt="" /></a>
</span>

<div class="icon_login swiper-wrapper">
<div class="swiper-slide">
<span class="login_a">
<p style="line-height:30px">
<a href=""><img src="../../../static/scwx-images/scwx_homePage_imges/policeman.png" height="40" width="35" alt="" /></a><i>警察</i><span>司法鉴定与法庭科学</span>
</p>
</span>
<span class="login_a2 login_a">
<p style="line-height:30px">
<a><img src="../../../static/scwx-images/scwx_homePage_imges/man1.png" height="40" width="35" alt="" /></a><i>律师</i><span>司法鉴定与法庭科学</span>
</p>
</span>

<span class="login_a2 login_a">
<p style="line-height:30px">
<a><img src="../../../static/scwx-images/scwx_homePage_imges/attorney.png" height="38" width="33" alt="" /></a><i>法官</i><span>司法鉴定与法庭科学</span>
</p>

</span>
<span class="login_a2 login_a">
<p style="line-height:30px">
<a href=""><img src="../../../static/scwx-images/scwx_homePage_imges/attorney.png" height="38" width="33" alt="" /></a><i>检察官</i><span>司法鉴定与法庭科学</span>
</p>
</span>
<span class="login_a2 login_a">
<p style="line-height:30px">
<a><img src="../../../static/scwx-images/scwx_homePage_imges/appraiser.png" height="40" width="35" alt="" /></a><i>鉴定人</i><span>司法鉴定与法庭科学</span>
</p>
</span>
</div>

<div class="swiper-slide">
<span class="login_a">
<p style="line-height:30px">
<a href=""><img src="../../../static/scwx-images/scwx_homePage_imges/policeman.png" height="40" width="35" alt="" /></a><i>警察</i><span>司法鉴定与法庭科学</span>
</p>
</span>
<span class="login_a2 login_a">
<p style="line-height:30px">
<a><img src="../../../static/scwx-images/scwx_homePage_imges/man1.png" height="40" width="35" alt="" /></a><i>律师</i><span>司法鉴定与法庭科学</span>
</p>
</span>
<span class="login_a2 login_a">
<p style="line-height:30px">
<a><img src="../../../static/scwx-images/scwx_homePage_imges/attorney.png" height="38" width="33" alt="" /></a><i>法官</i><span>司法鉴定与法庭科学</span>
</p>

</span>
<span class="login_a2 login_a">
<p style="line-height:30px">
<a href=""><img src="../../../static/scwx-images/scwx_homePage_imges/attorney.png" height="38" width="33" alt="" /></a><i>检察官</i><span>司法鉴定与法庭科学</span>
</p>
</span>
<span class="login_a2 login_a">
<p style="line-height:30px">
<a><img src="../../../static/scwx-images/scwx_homePage_imges/appraiser.png" height="40" width="35" alt="" /></a><i>鉴定人</i><span>司法鉴定与法庭科学</span>
</p>
</span>
</div>

</div>
<!-- 右边按钮 -->
<span class="row_right swiper-button-next">
<a><img src="../../../static/scwx-images/scwx_homePage_imges/row_right.png" height="80" width="40" alt="" /></a>
</span>
</div>

    </div>
</template>
<script>
import swiper from '../../../static/swiper.js';
    export default {
        data () {
            return {

            }
        },
        mounted () {
             var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        // autoplay:2000,
         autoplayDisableOnInteraction:false,
        loop: true,
          nextButton: '.swiper-button-next',
           prevButton: '.swiper-button-prev'
    });
        }
    }
</script>

<style scoped lang="less">
@import '../../assets/scwx-less/px2rem.less';
@import '../../../static/swiper.css';
.main_login {
.w-inherit;.h(80px);.row_Left {.float-l;margin-top: -42px;}
.row_right {margin-top: -42px; }
.icon_login {
.w(1042px);.h-inherit;
.ml(85px);.l-height(80px);
.float-l;
.login_a {
.w(144px);.h-inherit;
.text_center; .dis-inline;
p > i {
.cursor;.pl(6px); .ft(20px);.ft(16px);color:#333333;vertical-align:middle;}
p > span {.dis-block;.l-height(60px);.cursor;} 
}
}
.login_a2 {.dis-inline;.ml(75px);}
}
</style>