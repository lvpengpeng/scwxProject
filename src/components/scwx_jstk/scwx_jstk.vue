<template>
    <div class="scwx_jstk">
    <p class="jstk_navtitle" style="display:flex;justify-content:start"><router-link to="/" tag="span">宋慈网校&nbsp;&gt;&nbsp;</router-link>

    <span @click="toJstkPage">鉴识题库&nbsp;&gt;&nbsp;</span>

    <span :class="{'navMember':navMember,'navMember1':navMember1}" >{{openMember}}</span>
    <span v-show="BuyTitle">{{tryToBuyTitle}}</span>
    <span v-show="submitOrderTitle">&nbsp;&gt;&nbsp;{{submitOrderPage}}</span>


    </p>
<!--鉴识题库页面-->
    <div class="scwx_jstk_homePage" :class="{'activeHidden':hidden}">
     <button  @click="showMember">去开通会员页面 </button>

     <button @click="tryToBuy">去试题购买页面</button>
    </div>

<!-- 开通会员页面 -->
      <jstk_open_member :class="{'activeMember':activeMember}" v-show="isShow"></jstk_open_member>
<!-- 试题购买页面 -->
      <jstk_tryToBuy @submitOrder="getSubmitOrder" v-show="tryToBuyPage"></jstk_tryToBuy>
    </div>
</template>

<script>
//开通会员页面
import jstk_open_member from '../../components/scwx_jstk/jstk_open_member.vue';
//试题购买页面
import jstk_tryToBuy from '../../components/scwx_jstk/jstk_tryToBuy.vue'
    export default {
        name:'scwx_jstk',
        components: {
            jstk_open_member,
            jstk_tryToBuy
        },
        data () {
            return {
                isShow: false,
                hidden: false,
                activeMember:false,
                navMember:false,
                navMember1:true,
                openMember: '',
                tryToBuyPage: false,
                submitOrderPage: '',
                tryToBuyTitle:'',
                BuyTitle: true,
                submitOrderTitle: false
            }
        },
        methods: {
            showMember () {
                this.hidden = true;
                this.isShow = true;
                this.navMember = true;
                this.openMember = '开通会员';
                this.activeMember = false
            },
            toJstkPage () {
                this.hidden = false;
                this.isShow = false;
                this.navMember = false;
                this.tryToBuyPage = false;
                this.BuyTitle = false;
                this.submitOrderTitle = false
                
        },
        tryToBuy() {
                this.hidden = true;
                this.isShow = true;
                this.navMember = true;
                this.tryToBuyTitle = '试题购买';
                this.activeMember = true;
                this.tryToBuyPage = true


            },
            getSubmitOrder: function (data) {
                this.submitOrderPage = data;
                this.submitOrderTitle = true
            }
            }
            
    }
</script>

<style scoped lang="less">
@import '../../assets/scwx-less/px2rem.less';
.scwx_jstk {
    width:1200px;
   min-width: 1200px;
   margin:120px auto;
}
.activeHidden,.activeMember{
    display:none;
}
.navMember {
    display:block!important;
}
.navMember1 {
    display:none;
}
.jstk_navtitle span{
    color:#999999;
    .ft(16px);
    .pt(12px);
}
</style>