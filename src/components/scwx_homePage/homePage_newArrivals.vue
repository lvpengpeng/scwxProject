<template>
<div class="homePage_newArrivals">
    <div class="home_jstk_book" style="clear:both">
<div class="jstk_left">
<p><i><img src="../../../static/scwx-images/scwx_homePage_imges/jstk_icon.png" height="25" width="26" alt="" /></i><span class="jstk">鉴识题库</span></p>

<ul class="jstk_lists">
<li v-for="jstk in jstkes"><span>{{ jstk.dengJi }}</span>  <span class="jstk_day">{{ jstk.date }}</span></li>

</ul>
</div>

<!-- 推荐 -->
<div class="tuiJian_right">
<p><i><img src="../../../static/scwx-images/scwx_homePage_imges/bookTui.png" height="26" width="25" alt="" /></i><span class="shu">新书推荐</span></p>
<ul class="shu_lists">
<li v-for="book in bookes">
<p>
<p>
<i><img :src="book.bookImg" height="179" width="110" alt="" /></i>
</p>
<p class="fayi_data">
<span>{{ book.yiXue }}</span>
<span>{{ book.name }}</span>
<span class="shu_data">{{ book.date }}</span>
</p>
</p>

<p class="shu_2">
<p >
<i><img :src="book.bookImg" height="179" width="110" alt="" /></i>
</p>
<p class="fayi_data">
<span>{{ book.yiXue }}</span>
<span>{{ book.name }}</span>
<span class="shu_data">{{ book.date }}</span></p>
</p>
</li>
</ul>

</div>
</div>
<div style="clear:both"></div>
    </div>
</template>

<script>
import jq from '../../assets/scwx-js/jq.js';
    export default {
        name:'homePage_newArrivals',
        data () {
            return {
// 鉴识题库
jstkes: [
{dengJi: '登记测试题', date: '2017-09-3'},
{dengJi: '登记测试题', date: '2017-09-3'},
{dengJi: '登记测试题', date: '2017-09-3'}
],
// 新书推荐
bookes: [
{
bookImg:'../../../static/scwx-images/scwx_homePage_imges/medical.icon.png',
yiXue: '法医学', name: '龙钺', date: '2017年出版'
}
]
}},

methods: {

},
mounted () {
var vm = this
vm.$nextTick (function　() {
})
}
    }
</script>


<style scoped lang="less">
@import '../../assets/scwx-less/px2rem.less';
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
.tuiJian_right {
.h-inherit; .w(603px); .ml(12px);.shu {
padding-left: 12px; color: #333333; .ft(20px); vertical-align: middle; }
.shu_lists {
.pt(28px); .box; .box-flex(space-between,normal);
li {
.fayi_data {
.text_center;
.pt(10px);
.w(110px);
span {
.dis-block;
.ft(16px);color:#333333;
.l-height(23px);
}
.shu_data {
.ft(12px);color:#cccccc;
}
}
.shu_2  {.pt(19px);}
}
} 
}

}
</style>