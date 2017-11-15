<template>
    <div class="scwx_footerNav">
        <div class="footerNav_main">
            <div class="footerNav_main_left">
                <p class="nav_a"  :style="{textAlign:'center'}">
                     <span v-text="lian"></span>
                     <span v-for="a in as">
                          <a :href="a.url">{{ a.name }} </a>
                     </span>
                 </p>
                 <p class="nav_a" :style="{paddingTop:'6px',textAlign:'center'}">
                     <span v-for="aa in aas">
                          <a :href="aa.url">{{ aa.name }}</a>
                          <i class="i">|</i>
                     </span>
                 </p>
                <p :style="{textAlign:'center',paddingTop:'10px',color:'white',lineHeight:'23px'}">
                    <span>版权所有xx网&nbsp;&nbsp;京ICP备xxxxxxx号&nbsp;&nbsp;版本号：V 1.0.0Alpha版</span>
                    <span :style="{display:'block',textAlign:'center'}">copyright&nbsp;&copy;&nbsp;2017&nbsp;xxx.com&nbsp;Comporation,AllRights Reserved.</span>
                  </p>
             </div> 
            <div class="footerNav_main_right">
                <div>
                <a href="javascript:void(0)">
                     <img src="../../../static/scwx-images/scwx_homePage_imges/footer_QRcode.png" height="83" width="85" alt="" />
                 </a>
                 <span>微信公众号</span>
                 </div>
            </div>
      </div>
</div>
</template>


<script> 
    export default {
        data () {
            return {
            lian:'友情链接 :',
         as: Object.freeze ([
          {url:'',name:'迪安网站'},
          {url:'',name:'司法网站'},
          {url:'',name:'法润数据库'}
        ]),
        aas: Object.freeze ([
          {url:'#/',name:'网站首页'},
          {url:'#scwx_jskc',name:'鉴识课程'},
          {url:'#scwx_jstk',name:'鉴识题库'},
          {url:'#scwx_jszp',name:'鉴识招聘'},
          {url:'#scwx_jssz',name:'鉴识师资'},
          {name:'留言反馈'},
          {name:'关于我们'}
        ]),
            }
        }

    }
</script>
<style scoped lang="less">
@import '../../assets/scwx-less/px2rem.less';
.scwx_footerNav {max-width:1920px;width:100%;margin:0 auto;
.bg_color(#219393);.box;.box-flex(center,center);
.h(318px);
.footerNav_main { .h(110px);.box;
.footerNav_main_left { .h-inherit;
.i { .pr(10px);.pl(6px);color:white;}
span:last-child i { .dis-none; }
.nav_a span a{  
.ft(14px);color:#ffffff;.cursor;}   
p:first-child span { .ft(14px);color:#ffffff;
a{ .pr(12px); }
} 
}  
.footerNav_main_right {
.ml(102px);.w(86px);.h-inherit;.text_center;
div:first-child {
span {
.dis-block;.ft(15px);color:#ffffff;.pt(9px);
}
}
}
}
 }
</style>      
    
   
     
        
   
   
    
    
    
     
   
    
    
    
    











