<template>
    <div class="jstk_tryToBuy">
    <div v-if="tryToBuyPage">
         <div>
            <p class="daTi"></p>
            <div class="MemberLists">
                <ul>
                    <li class="MemberListsTitle">
                        <span>试题名称</span>
                        <span>试题有效期</span>
                        <span>单价（元）</span>
                        <span>付款（元）</span>
                    </li>
                    <li class="memberFitst">
                        <span v-for="(memberFitst,index) of memberFitstes">{{ memberFitst }}</span>
                    </li>
                    <li class="account">
                    <span>
                        <i>总计：</i>
                        <i>{{ amountto }}</i>
                        </span>
                    </li>
                    <li class="indent">
                        <input @click="toSubmitOrder" type="button" value="提交订单"/>
                    </li>
                </ul>
            </div>




        </div>


        
        </div>

        <div>
            <submitOrderPage v-show="submitOrderPage"></submitOrderPage>
        </div>

            

    </div>
</template>

<script>
import submitOrderPage from '../../components/scwx_jstk/submitOrderPage.vue';
import jstk_open_member from '../scwx_jstk/jstk_open_member.vue'
    export default {
        name: 'jstk_tryToBuy',
        components: {
            submitOrderPage
        },
        data () {
            return {
                submitOrderPage: false,
                tryToBuyPage: true,
                 memberFitstes: ['一个月','付款后30天有效','50.00','50.00'],
             amountto:'￥80.00'
            }
        },
        methods: {
            toSubmitOrder () {
                this.tryToBuyPage = false;
                 this.submitOrderPage = true;
                 this.$emit("submitOrder","提交订单");

            }
        }
    }
</script>


<style scoped lang="less">
@import '../../assets/scwx-less/px2rem.less';
.daTi {
    border-bottom:2px #ebebeb solid;
  }
  .MemberLists {
    .w-inherit;.h(47px);
    .MemberListsTitle {
    .box;
    .box-flex(space-around,center);
    span {
        color:#333333;
        .ft(16px);
    }

    }

    .memberFitst {
    .box;.mt(15px);
    .box-flex(space-around,center);
    .w-inherit;.h(90px);
    .bg_color(#f4f4f4);
    span {text-align:center;.w(130px);}
    span:first-child {
        color:#333333;
        .ft(24px);
    }
    span:nth-child(2) {
        color:#ff8000;
        .ft(14px);
    }
    span:nth-child(3),span:nth-child(4) {
        color:#333333;
        .ft(14px);
    }
  }
  .account {
       .h(48px);
        .w-inherit;
        .bg_color(#dadada);
        span { float:right;.pr(44px);.l-height(48px)}
        i:first-child {
            .ft(18px);
            color:#333333; vertical-align: top
        }
    i:last-child {
        color:#ff3c00;
        .ft(24px);
    }
  }
.indent {
    input {
        clear:both;
        .w(160px);
        .h(46px);float:right;
        color:#ffffff;
        .ft(22px);
        .mt(36px);
        .bg_color(#ff8000);
        outline:none;
        border:none;
        .l-height(46px);
    }
}


  }
</style>