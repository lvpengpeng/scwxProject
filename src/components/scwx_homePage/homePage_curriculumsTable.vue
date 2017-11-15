<template>
    <div class="homePage_curriculumsTable">
        <div class="list_item" @mouseleave="listShow = false">
<div style="" class="list_nav_left" @mouseenter="listShow = true" >

<ul>
<li class="jiNeng" style="height:63px;">
<div><span style="font-size:16px;font-weight:800;">鉴定技能</span></div>
<div>
<p><span>法医类鉴定</span><span style="font-size:14px;padding-left:24px">物证类鉴定</span></p>
<p><span>声像资料类鉴定</span><span style="font-size:14px;padding-left:24px">环境损害类鉴定</span></p>
<p><span>其他类</span></p>
</div>
</li>

<li class="jiNeng" style="height:40px;margin-top:10px">
<div><span style="font-size:16px;font-weight:800;">鉴定管理</span></div>
<div>
<p><span>鉴定行政与行业管理</span><span style="font-size:14px;padding-left:24px">鉴定机构管理</span></p>
<p><span>鉴定质量控制与管理</span><span style="font-size:14px;padding-left:24px">其他类</span></p>

</div>
</li>
<li class="jiNeng" style="height:40px;margin-top:22px;">
<div><span style="font-size:16px;font-weight:800;">鉴定与证据</span></div>
<div>
<p><span>法律与司法鉴定</span><span style="font-size:14px;padding-left:24px">证据法</span></p>
<p><span>鉴定意见审查质证</span><span style="font-size:14px;padding-left:24px">其他</span></p>

</div>
</li>

<li class="jiNeng" style="margin-top:22px;height:20px;">
<div><span style="font-size:16px;font-weight:800;line-height:20px">专家讲坛</span></div>
<div>
<p><span>专家讲座</span><span style="font-size:14px;padding-left:24px">名家访谈</span><span style="font-size:14px;padding-left:24px;line-height:20px">其他类</span></p>
</div>
</li>
<li class="jiNeng" style="height:20px;margin-top:22px">
<div><span style="font-size:16px;font-weight:800;line-height:20px">外国精品课</span></div>
<div>
<p><span style="line-height:20px">外国法庭科学公开课</span></p>
</div>
</li>

<li class="jiNeng" style="height:20px;margin-top:22px">
<div><span style="font-size:16px;font-weight:800;line-height:20px">鉴识微课</span></div>
<div>
<p><span style="line-height:20px">司法鉴定与法庭科学百科</span></p>
</div>
</li>

<li class="jiNeng" style="margin-top:22px;height:20px">
<div><span style="font-size:16px;font-weight:800;line-height:20px">品性评估课程</span></div>
<div>
<p><span style="line-height:20px">品性评估师培训课程</span></p>
</div>
</li>
</ul>

</div>

<div style="padding:26px 10px 32px 10px" v-if="listShow" @mouseleave="listShow = false" class="list_nav_right">

<div v-for="(courseList,index) of courseLists">

                            
    <p :class="[pt]" v-for="(courseListCount,index) in courseList.courseListCountes">
    <span class="lists_title"><a :href="courseListCount.href">{{ courseListCount.title }}</a></span>

       <span class="title_count">
       <p>
       <a v-for="(countList,index) in courseListCount.countListes" :href="countList.href">
          {{ countList.nav }}
       </a>
       </p>
       </span>
       </p>
</div>

</div>
    </div>
    </div>
</template>
<script>
import jq from '../../assets/scwx-js/jq.js';
export default {
    name:'homePage_curriculumsTable',
    data () {
        return {
            listShow:false,
            pt:'pt',
            courseLists: [
                {
                    courseListCountes: [
                        {
                            title: '法医类鉴定',
                            countListes:[
                            {nav: '法医鉴定'},{nav: '法医鉴定'},{nav: '法医鉴定'},
                            {nav: '法医鉴定'},{nav: '法医鉴定'},{nav: '法医鉴定'}
                             ]
                    }
                        ]
                },
                // 2
                {
                    courseListCountes: [
                        {
                            title: '2',
                            countListes:[
                             ]
                           }
                        ]
                },
                // 3
                {
                    courseListCountes: [
                        {
                            title: '3',
                            countListes:[
                           
                             ]
                           }
                        ]
                }
                // 4
                // {
                //     courseListCountes: [
                //         {
                //             title: '4',
                //             countListes:[
                          
                //              ]
                //            }
                //         ]
                // },
                // 5
                // {
                //     courseListCountes: [
                //         {
                //             title: '5',
                //             countListes:[
                           
                //              ]
                //            }
                //         ]
                // },
                //6
                // {
                //     courseListCountes: [
                //         {
                //             title: '6',
                //             countListes:[
                           
                //              ]
                //            }
                //         ]
                // },
                // 7
                // {
                //     courseListCountes: [
                //         {
                //             title: '7',
                //             countListes:[
                           
                //              ]
                //            }
                //         ]
                // }

                ]
            
        }
    },
    methods: {
        categoryList () {
            this.$http.post('http://123.56.226.246:8023/songci-api/category/list',{pid:1},{emulateJSON:true}).then ( (res) => {
                console.log(res);
                for (let i in res.data.data) {
                    this.courseLists.push(
                        
                        )

                        console.log(this.courseLists)
                    
                }
            },(errCode) => {
                console.log(errCode)
            })
        }

    },
     mounted () {
        var vm = this;
        vm.$nextTick(function () {
            vm.categoryList ();
            $(function () {

$('.jiNeng').mouseenter(function () {
$('.list_nav_right > div').eq($(this).index()).show().siblings('div').hide(); 
$(this).addClass('active').siblings('.jiNeng').removeClass('active');
$('.el-carousel__indicators,.el-carousel__arrow').addClass('curr');
$('.el-carousel__indicators,.el-carousel__arrow').addClass('curr'); });
$('.list_item').mouseleave(function() {
$('.el-carousel__indicators,.el-carousel__arrow').removeClass('curr');
$('.jiNeng').removeClass('active');
});
});
})
  }
}

</script>
<style scoped lang="less">
@import '../../assets/scwx-less/px2rem.less';
.list_nav_left { 
float:left;.bg_color(#332700);.h(391px);.w(372px);
.padding(26px,10px,35px,10px);color:#ffffff;
.jiNeng {.cursor;
.box;.box-flex(space-between,nomal);
div > p > span:hover {
text-decoration:underline;
}
div:first-child{.w(100px); }
div:last-child {
.w(240px);
}
}
.jiNeng:hover{
.bg_color(green)
}
.jiNeng.active{.bg_color(green)}
}
.list_nav_right {
opacity: 0.9;
background:#cccccc;float:left;.h(391px);.w(450px);.p-relative;
div {.dis-none;.p-absolute;.w-inherit;.h-inherit;}
div:first-child{
display:block
}
.lists_title {
.w(100px);height:auto;float:left;
a {color:#333333;.cursor;.ft(16px);}
}
.title_count {
.w(300px);height:auto;float:right;
a {.pl(10px);.pr(10px);.h(25px);display:inline-block;
color:black;.cursor;
}
a:hover {text-decoration: underline;color:red;}
}
.pt{.pt(10px);clear:both!important;}
p:first-child {padding-top:0!important;}
}
</style>
























