<template>
  <div id="app">
    <scwx_headerNav v-if="homeReg"></scwx_headerNav>
     <scwx_backToTop></scwx_backToTop>
    <router-view></router-view>
     <scwx_footerNav v-if="footer"></scwx_footerNav>
  </div>
</template>

<script>
 import scwx_headerNav from './components/scwx_commonComponent/scwx_headerNav.vue';
 import scwx_footerNav from './components/scwx_commonComponent/scwx_footerNav.vue';
 import scwx_backToTop from './components/scwx_commonComponent/scwx_backToTop.vue'
export default {
  // 注册使用子组件
  components:{
    'scwx_headerNav': scwx_headerNav,
    'scwx_footerNav': scwx_footerNav,
    'scwx_backToTop': scwx_backToTop

  },
  data () {
    return {
      homeReg:true,
      footer:true
    }
  },
  computed: {
    pathName () {
      return this.$route.name
    }
  },
  // 监听路由状态控制组件
  watch: {
    '$route' (to,from) {
      if (to.path == '/scwx_reg' || to.path == '/videoDisplay') {
        this.homeReg = false
      } else {
        this.homeReg = true
      } if (to.path == '/videoDisplay') {
        this.footer = false
      } else {this.footer = true}
    }
  },
  mounted () {
    this.$nextTick(function () {
      var vm = this;
      if (this.pathName === 'scwx_reg' || this.pathName === 'videoDisplay') {
        this.homeReg =false
      }; if (this.pathName === 'videoDisplay') {
        this.footer = false

      }
    })
  }

}   
</script>
<style>
/*页面中间内容宽度*/
.scwx-main {
   width:1200px;
   min-width: 1200px;
   margin:150px auto;
}         
</style>



