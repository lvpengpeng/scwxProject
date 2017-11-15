<template>
<div class="videoIntroduction">

<div class="video_main">
<div class="main_top" v-for="mainTop in mainTops">
<div class="record_img">
<a href="javascript:viod(0)"> <img :src="mainTop.url" alt="" /> </a>
</div> 

<div class="collect">
<div :style="{marinTop:'77px'}">
<span><i class="mainTopTitle">{{ mainTop.title }}</i>
<i class="mainTopTitle":style="{marginLeft:'6px'}">{{ mainTop.title1 }}</i>
</span>
<span class="shareCollect"><i class="share_icon">分享</i> <i class="collect_icon">收藏</i></span>

<p :style="{clear:'both',paddingTop:'26px',fontSize:'14px',color:'#ccc'}"><span :style="{paddingRight:'2px'}">{{ mainTop.name}}</span>
<span :style="{paddingRight:'20px'}">
{{ mainTop.play}}
</span>
<span>{{ mainTop.time }}</span></p>
<p :style="{paddingTop:'25px',height:'27px'}">

<span :style="{fontSize:'27px',color:'#ff3c00',paddingRight:'12px'}">&yen;{{ mainTop.videoMoney }}</span>  

 <span :style="{color:'#999999',fontSize:'18px'}"><s>&yen;{{mainTop.cost}}</s></span>
 </p>

 <p :style="{paddingTop:'60px'}"><input :style="{border:'none',fontSize:'22px',
    color:'#fffefe',width:'160px',height:'34px',background:'#ff8000',
    borderRadius:'2px'}" type="button" value="立即购买"/></p>
</div>

</div>
</div>
<!-- 视屏介绍 -->
<div class="jieShao" :style="{marginTop:'26px'}">



<div class="jieShao_cont">
<p class="cont_nav">
<el-tabs type="card">

<el-tab-pane label="课程介绍" class="koko">
<ul  class="kcList" :style="{margin:'14px 21px 0px 16px'}">
<li v-for="kcList in kcLists">
<h5>{{ kcList.kc_title0 }}</h5>
<p>{{ kcList.kc_cont0 }}</p>

<h5>{{ kcList.kc_title1 }}</h5>
<p>{{ kcList.kc_cont1 }}</p>

<h5>{{ kcList.kc_title2 }}</h5>
<p>{{ kcList.kc_cont2 }}</p>

<h5>{{ kcList.kc_title3 }}</h5>
<p>{{ kcList.kc_cont3 }}</p>
</li>
</ul>
</el-tab-pane>
<!-- 目录 -->

<el-tab-pane label="目录" class="kc_muLu">
<ul>
    <li v-for="muLu in muLus">
    <span>{{ muLu.keShi }}</span>
     <i><img src="../../../static/scwx-images/scwx_jskc_imges/jskc_videoIntroduction_img/muLuCircle.png" height="14" width="15" alt="" /></i> 
     <span>{{ muLu.kcTitle }}</span>   
<span  :style="{float:'right',paddingRight:'21px'}"><img :src="muLu.notebook + '.png'" alt="" /></span>
     </li>
</ul>
<div style="clear:both"></div>
</el-tab-pane>


<!-- 笔记 -->
<el-tab-pane label="笔记" @click="note">
<div class="jsck_notebook">
    <ul class="notebook-label">
            <li v-for="(x,index) in tabs" :class="{active:tabIndex==index}" @click="tabIndex=index">{{x.title}}</li>
        </ul>

        <ul class="notebook-content">
            <li v-for="(x,index) in tabs" v-show="tabIndex==index">
            <!-- first speack -->
        <ul class="notebook_speak" v-for="content in x.contents">
            <li><img :src="content.portrait" alt="" /></li>
            <li>
                <p class="nickname">{{ content.nickname }}</p>
                <p class="cont">{{ content.cont }}</p>
                <p class="cont_line">
                <span class="commenTime">{{ content.time }}</span> 
                <span class="like"> <i>点赞</i> <i>评论</i></span></p>
            </li>
        </ul>
            </li>
        </ul>   
        <div class="comment_cont">   
         <textarea placeholder="说点神马吧…" name="" id="" cols="30" rows="10">
         </textarea>
          <p  :style="{float:'right',marginTop:'16px'}"><input :style="{padding:'7px 19px 7px 19px',background:'#219393',color:'white',outline:'none',border:'none'}" type="button" value="发布"/></p>
        </div>


</div>

</el-tab-pane>

<el-tab-pane label="讨论区">定时任务补偿</el-tab-pane>
<el-tab-pane label="答疑">定时任务补偿</el-tab-pane>
</el-tabs>
</p>
</div>
<div class="jieShao_person">
<span><i><img src="../../../static/scwx-images/scwx_jskc_imges/jskc_videoIntroduction_img/lecturer.icon.png" height="27" width="22" alt="" /></i><h2 :style="{fontSize:'18px',paddingLeft:'16px',display:'inline',verticalAlign:'bottom',fontWeight:'bold'}">主讲老师</h2></span>
<div class="person_img">
    <div v-for="person in persons" class="person_mes">
        <span><i><img :src="person.url" alt="" /></i></span>
        <ul>
            <li>{{ person.name }}</li>
        <li>{{ person.qutpatient}}</li>
            <li><span><i>职称</i><i :style="{paddingLeft:'6px',paddingRight:'6px'}">:</i></span>{{ person.jobTitle }}</li>
    <li><span><i>擅长</i><i :style="{paddingLeft:'6px',paddingRight:'6px'}">:</i></span>{{person.good}}</li>
        </ul>
    <p :style="{fontSize:'12px',color:'#b6b6b6',lineHeight:'34px',clear:'both'  }">
        <span :style="{color:'#333333',fontSize:'16px'}"><i>简介</i><i <i :style="{paddingLeft:'6px',paddingRight:'30px'}">:</i></span>
         <span style="letter-spacing:0.5px;fontSize:16px;">{{ person.between }}</span>
    </p>
    </div>
    
</div>

</div>
</div>
</div> 
</div>
</template>

<script>
    export default {
        name: 'videoIntroduction',
        data () {
            return {
                // mianTops
                mainTops:[
                {
                    url: '../../../static/scwx-images/scwx_jskc_imges/jskc_videoIntroduction_img/forensicFiles.png',
                    title: '法医秘档案01',
                    title1: '显微镜下的真相',
                    name: '龙钺',
                    play: '播放',
                    time: '1h3m',
                    videoMoney: '50.00',
                    cost: '70.00'
                }
                ],
            // 课程介绍
            kcLists: [
            {kc_title0: '第一节',
            kc_cont0: '产后覅事纠纷发生非技术及覅祭祀费祭祀费粉祭祀费粉祭祀费粉祭祀费粉祭祀费粉祭祀费粉祭祭祀费粉祭祀费粉祀费粉祭祀费粉祭祀费粉祭祀费粉祭祀费粉祭祀费粉祭祀费粉粉红色富士见覅' },
            {kc_title1: '第一节',
            kc_cont1: '' },
            {kc_title2: '第一节',
            kc_cont2: '' },
            {kc_title3: '第一节',
            kc_cont3: '' }
       
            ],
            // 目录
            muLus: [
            {
             keShi: '课时1',
            kcTitle: '罗永浩的演讲视频',
            notebook: '../../../static/scwx-images/scwx_jskc_imges/jskc_videoIntroduction_img/muLu_biji'
            }
            
            ],

            // 笔记
            tabs: [{
                    title: '课时1',
                    contents:[
                    {
                    portrait:'../../../static/scwx-images/scwx_jskc_imges/jskc_videoIntroduction_img/notebook.icon.png',
                    nickname: '浪花的美丽',
                    cont:'方式橘胡歌is会橘色胡歌i歌i歌i歌i歌i歌i歌i歌i歌i歌is会更合适好师傅好',
                    time:'2017-09-09'
                     }
                     
                    ]
                },

                {
                    title: '课时2',
                    contents:[
                    {
                    portrait:'../../../static/scwx-images/scwx_jskc_imges/jskc_videoIntroduction_img/notebook.icon.png',
                    nickname: '浪花的美丽',
                    cont:'方式橘胡歌is会橘色胡歌i歌i歌i歌i歌i歌i歌i歌i歌i歌is会更合适好师傅好',
                    time:'2017-09-09'
                    },
                    {
                    portrait:'../../../static/scwx-images/scwx_jskc_imges/jskc_videoIntroduction_img/notebook.icon.png',
                    nickname: '浪花的美丽',
                    cont:'方式橘胡歌is会橘色胡歌i歌i歌i歌i歌i歌i歌i歌i歌i歌is会更合适好师傅好',
                    time:'2017-09-09'
                    },
                    {
                    portrait:'../../../static/scwx-images/scwx_jskc_imges/jskc_videoIntroduction_img/notebook.icon.png',
                    nickname: '浪花的美丽',
                    cont:'方式橘胡歌is会橘色胡歌i歌i歌i歌i歌i歌i歌i歌i歌i歌is会更合适好师傅好',
                    time:'2017-09-09'
                    }
                    ]},
                    {
                    title: '课时3',
                    contents:[
                    {
                    portrait:'../../../static/scwx-images/scwx_jskc_imges/jskc_videoIntroduction_img/notebook.icon.png',
                    nickname: '浪花的美丽',
                    cont:'方式橘胡歌is会橘色胡歌i歌i歌i歌i歌i歌i歌i歌i歌i歌is会更合适好师傅好',
                    time:'2017-09-09'
                    },
                    {
                    portrait:'../../../static/scwx-images/scwx_jskc_imges/jskc_videoIntroduction_img/notebook.icon.png',
                    nickname: '浪花的美丽',
                    cont:'方式橘胡歌is会橘色胡歌i歌i歌i歌i歌i歌i歌i歌i歌i歌is会更合适好师傅好',
                    time:'2017-09-09'
                    },
                    {
                    portrait:'../../../static/scwx-images/scwx_jskc_imges/jskc_videoIntroduction_img/notebook.icon.png',
                    nickname: '浪花的美丽',
                    cont:'方式橘胡歌is会橘色胡歌i歌i歌i歌i歌i歌i歌i歌i歌i歌is会更合适好师傅好',
                    time:'2017-09-09'
                    }
                    ]},
                    {
                    title: '课时4',
                    contents:[
                    {
                    portrait:'../../../static/scwx-images/scwx_jskc_imges/jskc_videoIntroduction_img/notebook.icon.png',
                    nickname: '浪花的美丽',
                    cont:'方式橘胡歌is会橘色胡歌i歌i歌i歌i歌i歌i歌i歌i歌i歌is会更合适好师傅好',
                    time:'2017-09-09'
                    },
                    {
                    portrait:'../../../static/scwx-images/scwx_jskc_imges/jskc_videoIntroduction_img/notebook.icon.png',
                    nickname: '浪花的美丽',
                    cont:'方式橘胡歌is会橘色胡歌i歌i歌i歌i歌i歌i歌i歌i歌i歌is会更合适好师傅好',
                    time:'2017-09-09'
                    },
                    {
                    portrait:'../../../static/scwx-images/scwx_jskc_imges/jskc_videoIntroduction_img/notebook.icon.png',
                    nickname: '浪花的美丽',
                    cont:'方式橘胡歌is会橘色胡歌i歌i歌i歌i歌i歌i歌i歌i歌i歌is会更合适好师傅好',
                    time:'2017-09-09'
                    }
                    ]},
                    {
                    title: '课时5',
                    contents:[
                    {
                    portrait:'../../../static/scwx-images/scwx_jskc_imges/jskc_videoIntroduction_img/notebook.icon.png',
                    nickname: '浪花的美丽',
                    cont:'方式橘胡歌is会橘色胡歌i歌i歌i歌i歌i歌i歌i歌i歌i歌is会更合适好师傅好',
                    time:'2017-09-09'
                    },
                    {
                    portrait:'../../../static/scwx-images/scwx_jskc_imges/jskc_videoIntroduction_img/notebook.icon.png',
                    nickname: '浪花的美丽',
                    cont:'方式橘胡歌is会橘色胡歌i歌i歌i歌i歌i歌i歌i歌i歌i歌is会更合适好师傅好',
                    time:'2017-09-09'
                    },
                    {
                    portrait:'../../../static/scwx-images/scwx_jskc_imges/jskc_videoIntroduction_img/notebook.icon.png',
                    nickname: '浪花的美丽',
                    cont:'方式橘胡歌is会橘色胡i歌i歌i歌i歌i歌is会更合适好师傅好',
                    time:'2017-09-09'
                    }
                    ]},
                    {
                    title: '课时6',
                    contents:[
                    {
                    portrait:'../../../static/scwx-images/scwx_jskc_imges/jskc_videoIntroduction_img/notebook.icon.png',
                    nickname: '浪花的美丽',
                    cont:'方式橘胡歌is会橘色i歌i歌i歌i歌is会更合适好师傅好',
                    time:'2017-09-09'
                    },
                    {
                    portrait:'../../../static/scwx-images/scwx_jskc_imges/jskc_videoIntroduction_img/notebook.icon.png',
                    nickname: '浪花的美丽',
                    cont:'方式橘胡歌is会橘色胡歌i歌i歌i歌i歌i歌i歌i歌i歌i歌is会更合适好师傅好',
                    time:'2017-09-09'
                    },
                    {
                    portrait:'../../../static/scwx-images/scwx_jskc_imges/jskc_videoIntroduction_img/notebook.icon.png',
                    nickname: '浪花的美丽',
                    cont:'方式橘胡歌is会橘色歌i歌i歌i歌is会更合适好师傅好',
                    time:'2017-09-09'
                    }
                    ]},
                    {
                    title: '课时7',
                    contents:[
                    {
                    portrait:'../../../static/scwx-images/scwx_jskc_imges/jskc_videoIntroduction_img/notebook.icon.png',
                    nickname: '浪花的美丽',
                    cont:'方式橘胡歌is会橘色i歌i歌i歌i歌i歌is会更合适好师傅好',
                    time:'2017-09-09'
                    },
                    {
                    portrait:'../../../static/scwx-images/scwx_jskc_imges/jskc_videoIntroduction_img/notebook.icon.png',
                    nickname: '浪花的美丽',
                    cont:'方式橘胡歌is会橘色胡歌i歌i歌i歌i歌i歌i歌i歌i歌i歌is会更合适好师傅好',
                    time:'2017-09-09'
                    },
                    {
                    portrait:'../../../static/scwx-images/scwx_jskc_imges/jskc_videoIntroduction_img/notebook.icon.png',
                    nickname: '浪花的美丽',
                    cont:'方式橘胡歌is会橘色胡歌i歌i歌i歌i歌i歌i歌i歌i歌i歌is会更合适好师傅好',
                    time:'2017-09-09'
                    }
                    ]},
                    {
                    title: '课时8',
                    contents:[
                    {
                    portrait:'../../../static/scwx-images/scwx_jskc_imges/jskc_videoIntroduction_img/notebook.icon.png',
                    nickname: '浪花的美丽',
                    cont:'方式橘胡歌is会橘色胡歌i歌i歌i歌i歌i歌i歌i歌i歌i歌is会更合适好师傅好',
                    time:'2017-09-09'
                    },
                    {
                    portrait:'../../../static/scwx-images/scwx_jskc_imges/jskc_videoIntroduction_img/notebook.icon.png',
                    nickname: '浪花的美丽',
                    cont:'方式橘胡歌is会橘i歌i歌i歌i歌i歌is会更合适好师傅好',
                    time:'2017-09-09'
                    },
                    {
                    portrait:'../../../static/scwx-images/scwx_jskc_imges/jskc_videoIntroduction_img/notebook.icon.png',
                    nickname: '浪花的美丽',
                    cont:'方式i歌i歌i歌i歌i歌i歌is会更合适好师傅好',
                    time:'2017-09-09'
                    }
                    ]},


                


                ],
                tabIndex: 0,

            // 主讲老师
            persons:[
            {url:'../../../static/scwx-images/scwx_jskc_imges/jskc_videoIntroduction_img/jaingShi.png',

            name: '龙钺',
            qutpatient: '江苏服务法人',
            jobTitle: '主任',
            good: '扣扣我事纠非技术术及覅祭祀费扩',
            between: '扣我事纠非技术术及扣我事纠非技术术及扣我事纠非技术术及扣我事纠非技术术及扣我事纠非技术术及扣我事纠非技术术及扣我事纠非技术术及扣我事纠非技术术及扣我事纠非技术术及扣我事纠非技术术及扣我事纠非技术术及'
        }
            ]
            }
            
        },

        methods: {
            // 课程介绍
            getJieShao:function () {
                this.$http.post('http://123.56.226.246:8023/songci-api/lessionchapter/list',{
                      lession_id: 1 },{emulateJSON:true}).then((res) => {
                        for (var i = 0;i < res.data.page.length;i++)
                        {
                            this.kcLists.push({
                                kc_title0:res.data.page,
                                kc_cont0:res.data.page
                            },{
                                kc_title1:res.data.page,
                                kc_cont1:res.data.page
                            },{
                                kc_title2:res.data.page,
                                kc_cont2:res.data.page
                            })
                    console.log(res)
                }
                },(errCode) => {
                    console.log(errCode)
                })
            },
            // 课程目录
            kcLMuLu:function () {
                this.$http.post('http://123.56.226.246:8023/songci-api/lessionchapter/directory',{ lession_id: 1}).then((res) => {
        for (var i = 0;i < res.data.page;i++) {

        }
                    console.log(res)
                })
            },
        // 课程笔记
        note () {
            this.$http.post('http://123.56.226.246:8023/songci-api/lessionnote/list',{emulateJSON:true},{chapterId:1})
        }
        },

        mounted () {
            var vm = this;
            vm.$nextTick(function () {
            vm.getJieShao();
            vm.kcLMuLu()

            })
        }
    }

</script>
<style  lang="less">
@import '../../assets/scwx-less/px2rem.less';
.video_main {
.m-top-auto(177px); .w(1200px); height:auto;
.main_top {
.w-inherit;height:259px; border-bottom:2px #ebebeb solid;
.box;.box-flex(center,center);
.record_img {
.w(460px);.h-inherit;
}
.collect {
.w(764px); .pt(20px); .h-inherit;
.mainTopTitle {
.ft(16px);color:#333333;font-weight: bold; 
}
.shareCollect {.float-r;
.share_icon { background:url('../../../static/scwx-images/scwx_jskc_imges/jskc_videoIntroduction_img/share.icon.png')  no-repeat left center;
.pr(30px);.pl(30px);.ft(14px);color:#ccc;.cursor;
}
.collect_icon {
background:url('../../../static/scwx-images/scwx_jskc_imges/jskc_videoIntroduction_img/collect.iocn.png')  no-repeat left center;.pl(30px);.ft(14px);color:#ccc;.cursor;
 }
.collect_icon:hover {color:#ff3c00;}
.share_icon:hover {color:#ff3c00;}
}
}
}//maintop

// 视频介绍
.jieShao {
.mb(-100px);
.w-inherit;
.box;.box-flex(space-between,nomal);
.jieShao_cont {
.h-inherit;.w(706px);
// .border(1px,#ccc,solid);
border-top:none;
// nav
.el-tabs__item.is-active {
color:#ffffff;
.b_radius(6px);.ft(18px);
background: #219393;
}
.el-tabs__item {
.h(30px);color:#666666;.ft(18px);
.l-height(28px);
.text_center;
.mr(31px);
.ml(18px);
}
.el-tabs__header {
border:none;
}

.el-tabs__nav-prev,.el-tabs__nav-next {
.dis-none;
}
.el-tabs__content {
border:1px #b6b6b6 solid;
.mt(8px);
.h(600px);
}
// 课程内容
.kcList {
li {.l-height(151px);.h(128px);border-bottom:1px #b6b6b6 dashed;
.pb(25px);
h5 {.ft(16px);.mt(16px);}
p {.text(16px,#999999);.l-height(28px);letter-spacing:0.5px;font-family:MicrosoftYaHei;.ft(16px);}
}
li:last-child {
border:none;
}
}

// 课程目录
.kc_muLu {
ul li {
.pl(17px);.h(40px);.l-height(40px);.cursor;
i {.pl(12px);.pr(16px);}
span{.ft(16px);color:#333333;font-family:"PingFang-SC-Medium";}
} 
ul li:nth-child(odd) {.bg_color(#f4f4f4);}
ul li:hover {.bg_color(skyblue)}
}

// 笔记
.jsck_notebook {
.padding(22px,0px,0px,15px);
.notebook-label>li{
.w(71px);.mr(15px); .h(25px); .l-height(25px); .ft(16px);color:#666666;
.bg_color(#e9e9e9); display:inline-block;.text_center;.cursor;
}
.notebook-label>li.active{
color:skyblue; .border(1px,skyblue,solid); .bg_color(white);
}
::-webkit-scrollbar {width: 3px;.bg_color(#ffffff); }
::-webkit-scrollbar-thumb {border-radius: 10px; .bg_color(skyblue); }
.notebook-content {
.margin(29px,16px,17px,0px); overflow-y: scroll; .h(360px);
li {
.notebook_speak {
 .box;.box-flex(start,nomal);
li {.h-inherit; } }
.notebook_speak li:first-child {
.h-inherit;.w(56px);.mr(23px);
}
.notebook_speak li:last-child {
.h-inherit;.pt(6px);.w(576px);
.nickname {color:#eb7359;.ft(16px);}
.cont{.ft(14px);color:#313131}
p {.l-height(25px);
.commenTime {.ft(14px);color:#999999;}
.like { float:right;
i:first-child {
background:url('../../../static/scwx-images/scwx_jskc_imges/jskc_videoIntroduction_img/notebook_zan.png') no-repeat left center;.pl(30px);.pr(19px);color:#999999;.cursor;
}
i:last-child {
background:url('../../../static/scwx-images/scwx_jskc_imges/jskc_videoIntroduction_img/notbook_comment.png') no-repeat left center;.pl(30px);color:#999999;.cursor;
}
}
}
.cont_line {border-bottom:1px #ccc solid;.pb(10px);
.like i:hover {color:#ff3c00;}}
}
}
}
}

.comment_cont {
.w(580px);.h(78px);.ml(78px);
textarea {.w-inherit;.h-inherit;.border(1px,#acacac,solid);.bg_color(#f5f5f5);color:#acacac;}
}

}

// 讲师
.jieShao_person {
.h-inherit;.w(476px);
.person_img {
.h(600px);.w-inherit;
.border(1px,#b6b6b6,solid); .padding(10px,21px,200px,10px);
.mt(17px);
.person_mes {
.pb(27px);
i {
.float-l;
}
ul {
.float-r;
li {
.ft(16px); .l-height(52px);
}


}
}
}
}
}

}
</style>


