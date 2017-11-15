<style scoped="scoped" lang="less">
@import '../../assets/scwx-less/px2rem.less';
.home_banner {
    .m-auto; .line-top(1px,#ccc,solid); .mt(120px);.h(391px);
img { 
    disply:block;  width:100%; height:100%;.p-absolute;
    } 
}
.banner_list { 
.w(1200px);.h(391px); margin:-391px auto;.mb(30px);z-index:100;.p-relative;


.log_reg {
.float-r; .w(195px);.h(270px);.bg_color(white);
.padding(30px,13px,0px,13px);.text_center;
.title_login {.ft(14px);color:#3ba0a0;.dis-block; .pt(32px);
}
.btn_login {
.pt(40px);
input {
.bg_color(#3ba0a0);.padding(8px,23px,8px,23px);
color:white;
border:none;.b_radius(6px);
} } } 
}
.scwx-main {
.w(1200px); .m-auto; clear:both;

}.main_course {
.w(300px);
.h(24px);.m-top-auto(118px);clear:both; .text_center;.mb(118px);
p > span {.pl(20px);.pr(20px); }
p > img {.dis-inline;vertical-align:super; }
}
.video_base {
.box;.box-flex(space-between,center); .w(1200px);.h(436px);
.m-auto;.video_base1,.video_base2 {
.w(569px);.float-l; .h-inherit;.border(1px,#333333,solid);
}
.video_base1 {.mr(22px); }
}

// width:1200px

.overall-width {
.w(1200px);.m-auto;
.mt(103px);height:auto;
.apply {
.w(1204px)!important;.bg_color(#eeffff);
.padding(0px,10px,0px,4px);
ul > li {
input {
.padding(7px,18px,7px,18px);.bg_color(#219393); color:white;.b_radius(6px);
border:none;.ml(525px); .mt(15px);
}
.list_activities { .ft(15px);color:#333333; }
.activities2 { .pl(138px); }
}
}
// apply_end
.video-loading {div {.p-absolute;.ft(20); div {
.bo_btn{.w(99px);.h(33px);.bg_color(#219393);color:#ffffff;font-size:17px;
.p-absolute;.mt(-16px);.ml(-49px);top:50%;left:50%;.l-height(33px);.text_center;
.cursor;
}
.display_title {
.p-absolute;
bottom:0;
.w(600px);
.h(69px);
.pl(16px);
.bg_color(rgba(0,0,0,.6));
p{.l-height(69px);span {
i:last-child {
.pl(20px);
color:#ffffff;
.ft(18px);
vertical-align:middle;
}} span:last-child{
.ft(23px);
color:#ffffff;
float:right;
.pr(20px);
}

}
}
}} }
.video-cont {
.border(1px,skyblue,solid);.h(481px); .video-contLeft {.h(481px);
}
}
::-webkit-scrollbar {width: 4px;.bg_color(#ffffff); }
::-webkit-scrollbar-thumb {border-radius: 10px; .bg_color(#219393); }
.tabs-list {overflow-y: scroll;.h(481px);.bg_color(#f8f8f8);
ul {
li {
.h(60px);.l-height(60px);.ft(16px);color:#333333;border-left:10px #f8f8f8 solid;

}}
.active  {.bg_color(#f8f8f8); } }
}
// home_jskc
.home_jssz_jszp {
.w(1200px); .h(570px);.box;.m-top-auto(93px);.mb(96px);
.box-flex(sapce-between,center);.ml(76px);
.jssz_left {
.w(577px); .h-inherit; .mr(21px);
.jssz {
.pl(12px); color:#333333; .ft(20px); .pb(34px); vertical-align:middle;
}
.jssz_img {
.box; .box-flex(sapce-between,normal);
li {
.w(163px);.h(525px);.mr(44px); .img_title {.pt(8px);.ft(16px);color:#333333;.dis-block;
}
.abstract {.w(132px);.h(37px);.pt(20px);.ft(12px);color:#ccc;.l-height(26px);.dis-block;
.m-auto;}
p {.text_center;}
p:last-child {.pt(32px);}}
}
}
// leftend
.jszp_right {
.h-inherit; .w(601px);
.jssz {
.pl(12px); color:#333333; .ft(20px); .pb(34px); vertical-align:middle;
}
.jszp_a {
.ml(37px); .w(70px); .ft(16px); color:#333333; text-decoration: none;
vertical-align:middle;
&:hover {border-bottom:3px #219393 solid; color:#219393; .pb(3px); .cursor;}
}
// jszp_banner
.jszp_banner {.mt(20px); }
.jszp_data {
li{.pt(10px);}
p{.l-height(15px)}
.data_number {p span:first-child {.ft(16px); color:#333333;}
.right_number {.ft(12px); color:#ff6701; float:right; }
.right_number2 {.ft(12px); color:#ccc; float:right; }
} } }
}
// 题库
.home_jstk_book {
.mt(280px); .box; .box-flex(space-between,normal);
.w(1200px); .m-auto;.h(636px);.mb(280px);
// jstk_left
.jstk_left {
.w(577px);.h-inherit;
.jstk {
padding-left: 12px; color: #333333; .ft(20px); vertical-align: middle;
}
.jstk_lists {
.pt(30px); li span:first-child {.ft(16px); color:#333333; }
li {
.l-height(40px); .jstk_day {color:#ccc; .ft(12px); .float-r;
}
}
}
}
// scwx_end
}.activeBorder {
border-left:10px #219393 solid!important;
color:#219313; .bg_color(white);.cursor;
}
</style>

<template>
<div class="scwx_homePage">
<div class="home_banner">
<scwx_imageCarousel> </scwx_imageCarousel>
</div>
<div class="banner_list">
<!-- 课程列表 -->
<homePage_curriculumsTable></homePage_curriculumsTable>

<!-- login -->
<div class="log_reg" style="background:white">
<span class="login_icon">
<img src="../../../static/scwx-images/scwx_homePage_imges/login_icon.png" height="105" width="106" alt="" />
</span>
<span class="title_login">欢迎来到宋慈网校~</span>
<p class="btn_login">
<input type="button" value="登录"/>
<input type="button" value="注册"/>

</p>
</div>
</div>

<div style="clear:both"></div>
<!-- mian-two -->
<div class="scwx-main">
<!-- 角色登录 -->
<keep-alive include="homePage_loginRole">
<homePage_loginRole></homePage_loginRole>
</keep-alive>

</div>
<div style="clear:both"></div>
<!-- Selected course -->
<div class="main_course">
<p><img src="../../../static/scwx-images/scwx_homePage_imges/line1.png" height="2" width="70" alt="" /><span :style="{fontSize:'24px',color:'#333333'}">培训基地</span>
<img src="../../../static/scwx-images/scwx_homePage_imges/line1.png" alt="" /></p>
</div>
<div class="video_base">
<div class="video_base1">
<img :src="baseUrl1" height="436" width="569" alt="" />
</div>
<div class="video_base2">
<img :src="baseUrl2" height="436" width="569" alt="" />
</div>
</div>


<div class="overall-width">
<!-- 报名 -->
<div class="apply">
<ul>
<li v-for="activiti1 in activities">
<span><i><img src="../../../static/scwx-images/scwx_homePage_imges/apply.png" height="23" width="23" alt="" /></i><span :style="{fontSize:'20px',paddingLeft:'7px',color:'#333333'}">线下活动<i :style="{paddingRight:'9px',paddingLeft:'9px'}">:</i></span></span>
<span class="list_activities">
{{ activiti1 }}
</span>
<input type="button" value="报名"/>
</li>

<li v-for="activiti2 in activities2">
<span class="list_activities activities2">
{{activiti2.huoDong}}
</span>
<input type="button" value="报名"/>
</li>

</ul>

</div>


<!-- Selection of course recommendations -->
<div class="main_course" :style="{width:'330px'}">
<p><img src="../../../static/scwx-images/scwx_homePage_imges/line1.png" height="2" width="70" alt="" /><span :style="{fontSize:'24px',color:'#333333'}">精选课程推荐</span>
<img src="../../../static/scwx-images/scwx_homePage_imges/line1.png" alt="" /></p>
</div>
<!-- Selection of course recommendations -->
<!-- tabs课程精选 -->
<el-row :class="{'video-cont':isLoading}">
<el-col :span="12"><div :class="{'video-contLeft':isVideoContLeft}">

<div class="video-loading">
<div v-show="nowIndex===0" style="widht:inheit;height:inherit;">
<img style="position:relative;" :src="jinXuan1" alt="" />
<div style="position:absolute;background:rgba(0,0,0,.5);color:white;top:0;width:600px;height:481px;">

<div class="bo_btn"> 
<keep-alive v-if="!$route.meta.keepAlive">
<router-link to="/videoDisplay" tag="span">立即播放</router-link>
</keep-alive>
</div>
<div class="display_title">
<p><span class="left_title"><i><img src="../../../static/scwx-images/scwx_homePage_imges/bookTui.png" height="26" width="25" alt="" /></i> <i>张三</i></span> <span class="right_title">司法鉴定技术</span></p>
</div>
</div>
</div>

<div v-show="nowIndex===1">Lorg elit. Aenean</div>
<div v-show="nowIndex===2">efescing dewcdercan</div>
<div v-show="nowIndex===3">efeab4</div>
<div v-show="nowIndex==4">efewb5</div>
<div v-show="nowIndex===5">efeab6</div>
<div v-show="nowIndex===6">efeab7</div>
<div  v-show="nowIndex===7">eftab</div>
</div>

</div></el-col>
<!-- 右栏 -->
<el-col :span="12"><div class="tabs-list">
<ul>
<li class="li-tab" v-for="(item,index) in tabsParam" 
@mouseenter="toggleTabs(index)"
:class="{'activeBorder':change === index}">
<p style="margin-left:72px">
<span style="border-left:none!important;" :class="{'activeBorder':change === index}">{{item.num}}</span>   <span :style="{float:'right'}">{{ item.time }}</span>
</p>
</li>
</ul>
</div></el-col>
</el-row>
</div><div style="clear:both"></div>
<!-- tabs_end -->
<!-- homeJskc -->
<homePageJskc></homePageJskc>
<!-- homeJskc_end -->

<el-col :span="12" class="home_jssz_jszp">
<div class="jssz_left">
<p>
<i><img src="../../../static/scwx-images/scwx_homePage_imges/jssz_left.png" height="25" width="19" alt="" /></i><span class="jssz">鉴识师资</span></p>
<ul class="jssz_img">
<li v-for="jssz in jsszes">
<p>
<span><img :src="jssz.jsszImg" height="167" width="163" alt="" /></span>
<span class="img_title">{{ jssz.imgTitle }}</span>
<span class="abstract">{{ jssz.abstract }}</span>
</p>
<p>
<span><img :src="jssz.jsszImg" height="167" width="163" alt="" /></span>
<span class="img_title">{{ jssz.imgTitle }}</span>
<span class="abstract">{{ jssz.abstract }}</span>
</p>

</li>

</ul>
</div>
<div class="jszp_right">
<p><i><img src="../../../static/scwx-images/scwx_homePage_imges/jszp_right.png" height="24" width="21" alt="" /></i>
<span class="jssz" >鉴识招聘</span>
<span class="jszp_a" v-for="jszp of jszpes">{{ jszp }}</span>
</p>
<!-- nav_banner -->
<div class="jszp_banner">
<p><img src="../../../static/scwx-images/scwx_homePage_imges/jzzp_banner.png" height="289" width="602" alt="" /></p>
</div>
<div class="jszp_data">
<ul class="data_number">
<li v-for="number in numbers">
<p><span>{{ number.jianDing  }}</span>  <span class="right_number">{{ number.money }}</span></p>
<p><span>{{ number.jianDing1 }}<i :style="{paddingLeft:'10px',paddingRight:'10px'}">|
{{ number.company }}
</i></span>
<span class="right_number2">{{ number.money1 }}</span>
</p>
</li>
</ul>
</div>
</div>
</el-col>
<!-- question bankx   new arrivals -->
<!-- 新书推荐 -->
<homePage_newArrivals></homePage_newArrivals>
</div>
</div>
</template>
<script> 
// import axios from 'axios';
import jq from '../../assets/scwx-js/jq.js';
import scwx_headerNav from '../../components/scwx_commonComponent/scwx_headerNav.vue';
import scwx_imageCarousel from '../../components/scwx_commonComponent/scwx_imageCarousel.vue';
import homePageJskc from '../../components/scwx_homePage/homePageJskc.vue';
import homePage_newArrivals from '../../components/scwx_homePage/homePage_newArrivals.vue';
import homePage_loginRole from '../../components/scwx_homePage/homepage_loginRole.vue';
import homePage_curriculumsTable from '../../components/scwx_homePage/homePage_curriculumsTable.vue';
export default {
    name:'scwx_homePage',
components: {
'scwx_imageCarousel': scwx_imageCarousel,
'homePageJskc': homePageJskc,
'homePage_newArrivals': homePage_newArrivals,
'homePage_loginRole': homePage_loginRole,
'homePage_curriculumsTable': homePage_curriculumsTable
},
data () {
return {
// 课程列表

// end
isLoading:true,
isVideoContLeft:true,
// 基地
baseUrl1:'../../../static/scwx-images/scwx_homePage_imges/video.base.png',
baseUrl2:'../../../static/scwx-images/scwx_homePage_imges/video.base.png',
// 线下活动
activities:['司法鉴定与法庭科学百科司法鉴定与法庭科学百与法科与法庭科'],
activities2:[
{huoDong: '司法鉴定与法庭科学百科司法鉴定与法庭科学百与法科与法庭科'}
],  
// 鉴识课程

// 鉴识师资
jsszes:[    
{jsszImg:'../../../static/scwx-images/scwx_homePage_imges/zhangSan.png',imgTitle:'张三',abstract:'信息'},
{jsszImg:'../../../static/scwx-images/scwx_homePage_imges/zhangSan.png',imgTitle:'张三',abstract:'信息'},
{jsszImg:'../../../static/scwx-images/scwx_homePage_imges/zhangSan.png',imgTitle:'张三',abstract:'信息'}
],
// 鉴识招聘
jszpes: ['我要做鉴定人','我要招鉴定人'],
numbers:[
{jianDing:'法医鉴定',money:'67890',jianDing1:'百科司法鉴定学',company: '啦啦啦公司',money1:'78989'
},
{jianDing:'法医鉴定',money:'67890',jianDing1:'百科司法鉴定学',company: '啦啦啦公司',money1:'78989'
}
],

// 精选课程推荐
tabsParam:[
// 'first','second','thirdly','first','second','thirdly','thirdly'
{num:'first',time:'9:00'},
{num:'first',time:'9:00'},
{num:'first',time:'9:00'},
{num:'first',time:'9:00'},
{num:'first',time:'9:00'},
{num:'first',time:'9:00'},
{num:'first',time:'9:00'},
{num:'first',time:'9:00'}


],
change:0,
jinXuan1:'../../../static/scwx-images/scwx_homePage_imges/jskc_video.png',
nowIndex:0,
zhanshi:'change'
}},
methods: {
toggleTabs:function(index){
this.nowIndex=index
this.change = index
},


// 鉴识师资
getJssz () {
this.$http.post('http://123.56.226.246:8023/songci-api/expert/list',{isShown:0},{emulateJSON:true}).then((res) => {
for (var i=0; i < res.data.page.list.length;i++){
this.jsszes.push({
jsszImg:res.data.page.list[i].avatar,
imgTitle:res.data.page.list[i].name,
abstract:res.data.page.list[i].descp
})
}
console.log(this.jsszes);
},(errCode) => {
console.log(errCode)
})
},
// 课程精选
kcJinXuan:function () {
this.$http.post('http://123.56.226.246:8023/songci-api/lession/boutiqueLession',{
lessionId: 1
},{emulateJSON:true}).then((res) => {
for (var i = 0;i < res.data.list.length;i++) {
// this.jinXuan1 = res.data.list[i].img;
this.tabsParam.push({
num:res.data.list[i].lessionName,
time:res.data.list[i].addTime
},{
num:res.data.list[i].lessionName,
time:res.data.list[i].addTime
},{
num:res.data.list[i].lessionName,
time:res.data.list[i].addTime
})
}

},(errCode) => { 
console.log(errCode)
}).catch(function (error) {console.log(error)})
}
},

mounted () {
this.$nextTick (function　() {
this.getJssz();
this.kcJinXuan()

})
}
}
</script>









 

