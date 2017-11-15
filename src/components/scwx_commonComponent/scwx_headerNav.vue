<template>
   <div class="home_header">
      <div class="header_cont">
          <ul>
            <li class="home_log">
                <router-link to="/">
                     <img src="../../../static/scwx-images/scwx_homePage_imges/home_log.png" height="77" width="101" alt="" />
                  <span class="baseline" style="color:#333333;fontSize:12px;letter-spacing:1px"><i>鉴识教育&middot;宋慈网校</i></span>
                </router-link>
            </li>
            <li class="nav_a" v-for="(a,index) of navA">
            <a :href="a.url" :class="{'nav_active': init== index}"
            @click="changes(index)"
            :style="{textDecoration:'none'}"
            class="nav_actives" 
            >{{ a.name }}</a>
            </li>
            <li class="home_select">
            <el-dropdown>
          <span style="width:93px!important;display:block;cursor:pointer;lineHeight:28px;fontSize:16px;color:#333333;paddingLeft:3px">
            课程选择<i class="el-icon-arrow-down el-icon--right"></i>
          </span> 
          <el-dropdown-menu slot="dropdown" style="disply:block;border:none;">
            <div v-for="typeCourse of typeCourses">
            <el-dropdown-item>  {{ typeCourse }}</el-dropdown-item>
         </div> </el-dropdown-menu>
        </el-dropdown>
             
              <input type="text" placeholder="搜索"/>
               <a href=""><img src="../../../static/scwx-images/scwx_homePage_imges/serach_input.png" alt="" height="20" width="20" /></a>
            </li>
            <li class="home_login">
              <span>
                <a class="loginIcon"><img :src="loginIcon" height="30" width="30" alt="" /></a>
                <a class="login" @click="dialogVisible = true">{{ home_login }}</a> | <router-link to="/scwx_reg">
                <a href="" class="login">{{ home_reg }}</a>
                </router-link>
              </span>
            </li>
          </ul>
      </div>
      <!-- 登录 -->
   </div>
</template>
<script>
  export default {
    data () {
      return {
        navA: Object.freeze ([
        {name:'全部课程'},{url:'#scwx_jskc',name:'鉴识课程'},
        {url:'#scwx_jstk',name:'鉴识题库'},{url:'#scwx_jssz',name:'鉴识师资'},
        {url:'#scwx_jszp',name:'鉴识招聘'},{url:'#scwx_wdkc',name:'我的课程'}
        ]),
        home_login: '登录',
        home_reg: '注册',
        loginIcon: '../../../static/scwx-images/scwx_homePage_imges/home_login.png',
        typeCourses: ['法医鉴定','法医类鉴定','法医鉴定','法医类鉴定'], init:''
      }
     
    },
    methods: {
          changes (index) {
            this.init = index
          }
         },
         mounted () {
           this.$nextTick (function (index) {
            //防止模板未加载
           })
         },
    watch:{
          '$route' (to,from) {
    computed:{
            if(to.path == '/') this.init = null
            }
        }
    }
  }
</script>
<style lang="less">
@import '../../assets/scwx-less/px2rem.less';
.nav_active {color:#219393!important;border-bottom:2px #219393 solid;.pb(4px);}
.nav_actives:hover {color:#219393!important;}
.home_header { width:100%;.h(120px);.p-fixed;top:0;z-index:999;.bg_color(white);.border(2px,#ebebeb,solid);
.header_cont {.w(1200px);.h-inherit;.m-auto;
.home_log { .float-l; 
a img { .ml(17px); }
span { .dis-block;.pt(5px);transform: scale(1);color:#a1a1a1;
i {color:#7a7a7a;}
}
}
.nav_a { .l-height(110px);.float-l;
a {.ft(18px);.ml(17px);.mr(16px);color:black;font-family: PingFangSC;
&:hover {
text-decoration: underline; disply:block; color:blue;
}}
}
.home_select { .float-l;.w(270px);.h(28px);.border(1px,#ccc,solid);.b_radius(4px);.box;.l-height(28px);.mt(39px);
.ml(15px);
input {border:none;border-left:1px #ccc solid!important;.pl(8px);}
a { .pl(20px);img {vertical-align:top;.mt(2px)}}
}
.home_login { .float-r; .l-height(100px);}
}    .login {color:#219393;vertical-align:middle;}
.loginIcon { .pr(5px) }
}
</style>
