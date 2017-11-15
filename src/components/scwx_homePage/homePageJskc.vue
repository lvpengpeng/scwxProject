<template>
        <div class="homeJskc">
<el-col :span="12" class="jskc_list">
<ul>
<li><i><img style="vertical-align:center;" src="../../../static/scwx-images/scwx_homePage_imges/home_jskc.png" height="19" width="24" alt="" /></i>
<span class="title-a">鉴识课程</span>
<span  v-for="(info,index) in infos" class="ifos_a" @click="jskcClick=index" :class="{jskcActive:jskcClick===index}">
<a @click="changeList(index)"> {{ info }}</a>
</span>
</li>
</ul>
</el-col>
<!-- lsit_cont -->
<!--鉴识课程 -->
<el-col :span="12">
<!--  -->
<div class="list_kca">
<div class="kca_left" v-for="kca in kcas">
<img :src="kca.videoImg" height="403" width="443" alt="" />
<span class="video_title">{{ kca.videoTitle }}</span>
<span class="boFang">{{ kca.boFang}}</span>
</div>

<div class="kca_right">
<ul>
<li @click="sendMsg(index)" v-for="(jskc,index) in jskces">
<p>
<span><img :src="jskc.jskcImg" height="167" width="241" alt="" /></span>
<span class="video_title">{{  jskc.videoTitle }}</span>
<span class="boFang">{{ jskc.boFang }}</span>
</p>
</li>
</ul>

<ul>
<li @click="toPlayer(index)" v-for="(jskc,index) in jskcess">
<p>
<span><img :src="jskc.jskcImg" height="167" width="241" alt="" /></span>
<span class="video_title">{{  jskc.videoTitle }}</span>
<span class="boFang">{{ jskc.boFang }}</span>
</p>
</li>
</ul>
</div>
</div>
<!--  -->
</el-col>
    </div>
</template>

<script>
import bus from '../../assets/scwx-js/eventBus.js';
    export default {
        data () {
            return {
                jskcClick:0,
infos: [
'鉴定技能', '鉴定管理', '诉讼证据',
'专家讲坛', '鉴定文化', '外国精品课'
],

// right_video
jskces: [
{
jskcImg: '../../../static/scwx-images/scwx_homePage_imges/kc_right.png',
videoTitle: '法医迷当01 显微镜下的真相',
boFang:'xx 播放 1h32'
},
{
jskcImg: '../../../static/scwx-images/scwx_homePage_imges/kc_right.png',
videoTitle: '法医迷当01 显微镜下的真相',
boFang:'xx 播放 1h32'
},
{
jskcImg: '../../../static/scwx-images/scwx_homePage_imges/kc_right.png',
videoTitle: '法医迷当01 显微镜下的真相',
boFang:'xx 播放 1h32'
}
],
jskces0: [
{
jskcImg: '../../../static/scwx-images/scwx_homePage_imges/kc_right.png',
videoTitle: '法医迷当01 显微镜下的真相',
boFang:'xx 播放 1h32'
},
{
jskcImg: '../../../static/scwx-images/scwx_homePage_imges/kc_right.png',
videoTitle: '法医迷当01 显微镜下的真相',
boFang:'xx 播放 1h32'
},
{
jskcImg: '../../../static/scwx-images/scwx_homePage_imges/kc_right.png',
videoTitle: '法医迷当01 显微镜下的真相',
boFang:'xx 播放 1h32'
}
],

jskces1: [
{
jskcImg: '../../../static/scwx-images/scwx_homePage_imges/kc_right.png',
videoTitle: '法医迷当01 显微镜下的真相',
boFang:''
},
{
jskcImg: '../../../static/scwx-imaddges/scwx_homePage_imges/kc_right.png',
videoTitle: '法医迷当01 显微镜下的真相',
boFang:'xx 播放 1h32'
},
{
jskcImg: '../../../static/scwx-images/scwx_homePage_imges/kc_right.png',
videoTitle: '法医迷当01 显微镜下的真相',
boFang:'xx 播放 1h32'
}
],
jskces2: [
{
jskcImg: '../../../static/scwx-images/scwx_homePage_imges/kc_right.png',
videoTitle: '法医迷当01 显微镜下的真相',
boFang:''
},
{
jskcImg: '../../../static/scwx-imaddges/scwx_homePage_imges/kc_right.png',
videoTitle: '法医迷当01 显微镜下的真相',
boFang:'xx 播放 1h32'
},
{
jskcImg: '../../../static/scwxfee-images/scwx_homePage_imges/kc_right.png',
videoTitle: '法医迷当01 显微镜下的真相',
boFang:'xx 播放 1h32'
}
],
jskces3: [
{
jskcImg: '../../../static/scwx-images/scwx_homePage_imges/kc_right.png',
videoTitle: '法医迷当01 显微镜下的真相',
boFang:''
},
{
jskcImg: '../../../static/sfffcwx-imaddges/scwx_homePage_imges/kc_right.png',
videoTitle: '法医迷当01 显微镜下的真相',
boFang:'xx 播放 1h32'
},
{
jskcImg: '../../../static/scfffwxfee-images/scwx_homePage_imges/kc_right.png',
videoTitle: '法医迷当01 显微镜下的真相',
boFang:'xx 播放 1h32'
}
],


jskcess: [
{
jskcImg: '../../../static/scwx-images/scwx_homePage_imges/kc_right.png',
videoTitle: '法医迷当01 显微镜下的真相',
boFang:'xx 播放 1h32'
},
{
jskcImg: '../../../static/scwx-images/scwx_homePage_imges/kc_right.png',
videoTitle: '法医迷当01 显微镜下的真相',
boFang:'xx 播放 1h32'
},
{
jskcImg: '../../../static/scwx-images/scwx_homePage_imges/kc_right.png',
videoTitle: '法医迷当01 显微镜下的真相',
boFang:'xx 播放 1h32'
}
],
jskcess0: [
{
jskcImg: '../../../static/scwx-images/scwx_homePage_imges/kc_right.png',
videoTitle: '法医迷当01 显微镜下的真相',
boFang:'xx 播放 1h32'
},
{
jskcImg: '../../../static/scwx-images/scwx_homePage_imges/kc_right.png',
videoTitle: '法医迷当01 显微镜下的真相',
boFang:'xx 播放 1h32'
},
{
jskcImg: '../../../static/scwx-images/scwx_homePage_imges/kc_right.png',
videoTitle: '法医迷当01 显微镜下的真相',
boFang:'xx 播放 1h32'
}
],
jskcess1: [
{
jskcImg: '../../../statfffffic/scwx-images/scwx_homePage_imges/kc_right.png',
videoTitle: '法医迷当01 显微镜下的真相',
boFang:'xx 播放 1h32'
},
{
jskcImg: '../../../static/scwx-images/scwx_homePage_imges/kc_right.png',
videoTitle: '法医迷当01 显微镜下的真相',
boFang:'xx 播放 1h32'
},
{
jskcImg: '../../../static/scwx-images/scwx_homePage_imges/kc_right.png',
videoTitle: '法医迷当01 显微镜下的真相',
boFang:'xx 播放 1h32'
}
],
jskcess2: [
{
jskcImg: '../../../static/scwx-images/scwx_homePage_imges/kc_right.png',
videoTitle: '',
boFang:'xxh32'
},
{
jskcImg: '../../../static/scwx-images/scwx_homePage_imges/kc_right.png',
videoTitle: '法医迷当01 显微镜下的真相',
boFang:'xx 播放 1h32'
},
{
jskcImg: '../../../static/scwx-images/scwx_homePage_imges/kc_right.png',
videoTitle: '法医迷当01 显微镜下的真相',
boFang:'xx 播放 1h32'
}
],


// left_video
kcas: [
{
videoImg:'../../../static/scwx-images/scwx_homePage_imges/jskc_video.png',
videoTitle: '法医迷当01 显微镜下的真相',
boFang:'xx 播放 1h32'
}
],
kcas0: [
{
videoImg:'../../../static/scwx-images/scwx_homePage_imges/jskc_video.png',
videoTitle: '法医迷当01 显微镜下的真相',
boFang:'xx 播放 1h32'
}
],
kcas1: [
{
videoImg:'../..x-images/scwx_homePage_imges/jskc_video.png',
videoTitle: '法医迷当01 显微镜下的真相',
boFang:'x32'
}
],kcas2: [
{
videoImg:'../../../static/scwx-images/scwx_homePage_imges/jskc_video.png',
videoTitle: '法医迷当01 显微镜下的真相',
boFang:'x32'
}
],kcas3: [
{
videoImg:'../../../static/scwx-images/scwx_homePage_imges/jskc_video.png',
videoTitle: '法医迷当01 显微镜下的真相',
boFang:'x32'
}
]
   }
        },
        methods: {
            changeList (index) {
switch (index) {
case 1:this.kcas = this.kcas1;this.jskcess = this.jskcess1;this.jskces = this.jskces1;break;
case 0:this.kcas = this.kcas0;this.jskcess = this.jskcess0;this.jskces = this.jskces0;break;
case 2:this.kcas = this.kcas2;this.jskcess = this.jskcess2;this.jskces = this.jskces2;break;
case 3:this.kcas = this.kcas3; this.jskces = this.jskces3;break;
        }
},
        toPlayer (index) {
            window.location.href = '/#/videoDisplay'
        },
        sendMsg (index) {
            bus.$emit("toComponents","thisMsg");
            window.location.href = '/#/videoDisplay'
        }
        }
        
    }
</script>
<style scoped lang="less">
@import '../../assets/scwx-less/px2rem.less';
.homeJskc {
clear:both;
.m-top-auto(130px);.w(1200px);
.jskc_list { 
.w-inherit;
.title-a {color:#333333;.pl(10px);.ft(20px);vertical-align:middle;}
.ifos_a {display:inline-block;.ml(37px);
a {
.w(70px);.ft(17px); color:#333333; text-decoration: none;disply:inline-block;
&:hover {
  color:#219393; .pb(3px);.cursor;
}}}
.jskcActive {border-bottom:3px #219393 solid;  color:#219393; .pb(3px);.cursor;}
}
.list_kca {
.mt(37px);  .w(1200px);
.h(450px);.box-flex(space-between,center); .box;

.kca_left {
.w(446px);.h-inherit;.mr(12px);
img {
.dis-block;.mb(8px);
}
.video_title {
.ft(16px); color:#333333;
}
.boFang {
color:#ccc;.ft(12px);
.pt(8px); .dis-block;
}
}
.kca_right{
.w(773px); .h-inherit;
ul{ 
.box;.box-flex(space-between,normal);
li {
.w(241px); .h(216px);
img {.dis-block;.mb(8px);}
p:nth-child(2) {.mt(19px);}
.video_title {
.ft(16px); color:#333333; .pt(8px);
}
.boFang {
color:#ccc;.ft(12px);
.pt(8px);.dis-block;

} } } } } 
}
</style>