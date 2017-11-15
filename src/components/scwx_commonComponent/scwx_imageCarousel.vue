<template>
     <el-carousel arrow="always" height="394px" class="banner-zindex">
    <el-carousel-item v-for="item in 4" :key="item">
    <p  v-for="bannerImg in images" class="demonstration">
      <img :src="bannerImg.url + '.png'" alt="" height="391" width="1919"/>
    </p>
    </el-carousel-item>
  </el-carousel>

</template>

<script>
 export default {
        data () {
            return {
             images: [
                {url: '../../../static/scwx-images/scwx_homePage_imges/home_banner'},
                 {url: '../../../static/scwx-images/scwx_homePage_imges/home_banner'},
                  {url: '../../../static/scwx-images/scwx_homePage_imges/home_banner'}
             ]
            }
        }
     }
        
</script>

<style  lang="less">
@import '../../assets/scwx-less/px2rem.less';
.el-carousel__button {
.w(25px)!important;
.h(25px)!important;
-webkit-border-radius:50px!important; -moz-border-radius:50px!important;
-ms-border-radius:50px!important; -o-border-radius:50px!important;
cursor:pointer!important;
.pr(15px); .mb(10px); .mr(12px); border:4px grey solid; .bg_color(skyblue);
}
.el-carousel__indicator {background-color:transparent; padding:12px 4px;}
.demonstration {img {width:100%;.dis-block;} }
.el-carousel__indicators {z-index:200!important;}
.el-carousel__indicators.curr{display:none};
.banner-zindex {overflow-y:hidden;}
.el-carousel__arrow {margin-left:33%;z-index: 700;right:21%;}
.el-carousel__arrow.curr{display:none};
</style>



