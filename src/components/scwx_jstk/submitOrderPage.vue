<template>
    <div class="submitOrderPage">
       <div>
           <p class="actually_title"><span>实付金额:</span> <span>{{actually}}</span></p>

          <table  width="1200px" class="indentLists" cellpadding="0" border="1px"  cellspacing="0">
            <tr class="title_kc" height="40px" style="background:#cccccc;font-size:16px;color:#666666;" align="center"><td>试题名称</td>
              <td>课程有效期</td>
              <td>金额（元）</td></tr>

              <tr align="center" class="testQuestion" height="72px">
                  <td v-for="(testQuestion,index) of testQuestions">{{ testQuestion }}</td>
              </tr>
          </table>
          <div class="payment" id="payments">
              <p>支付方式:</p>
              <p>
            <i class="i" @click="patternActive = index" :class="{'active':patternActive === index}" v-for="(pattern,index) of patternes"><img :src="pattern.paying"/></i>
              </p>
          </div>

          <div class="payment_case">
              <div class="payment_case_cont">
                <h4>扫一扫付款 （元）</h4>
                <p style="color:#ff3c00;font-size:20px;margin-top:14px">{{ money }}</p>
                <p style="margin-top:30px"><img src="../../../static/scwx-images/scwx_jstk_imges/QRcode.png" height="285" width="220" alt="" /></p>
              </div>

          </div>

       </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                actually: '￥99.00',
                testQuestions: ['模拟题','贷款90天有效','90.00'],
                money: '50.00',
                patternes: Object.freeze ([
                    {paying:require('../../../static/scwx-images/scwx_jstk_imges/zhifubao.png')},
                    {paying:require('../../../static/scwx-images/scwx_jstk_imges/WeChat.png')},
                    {paying:require('../../../static/scwx-images/scwx_jstk_imges/bank.png')}
                ]),
                patternActive: ''

            }
        },
        methods: {

        },
        mounted () {
            var vm = this;
            vm.$nextTick (function () {
          // let payments = document.getElementById('payments');
          // let payments_i = payments.getElementsByClassName('i');
          //           for (var i = 0;i < payments_i.length; i++) {
          //               payments_i[i].onclick = function () {
          //           this.style.background =  'url(../../../static/scwx-images/scwx_jstk_imges/right_pitchUp.png) no-repeat right top';
          //           payments_i[i].style.background = 'none'
          //       }

          //       }
          
            })
        }
    }
</script>

<style scoped lang="less">
@import '../../assets/scwx-less/px2rem.less';
.actually_title {
    .pt(24px);
    span:first-child {
        .ft(16px);
        color:#333333;
    }
    span:last-child {
        .ft(18px);
        color:#ff3c00;
    }
}

.indentLists {
.border(1px,#d6d6d6,solid);
tr,td {
border:none;
}

.testQuestion {
font-size:16px;
color:#666666;
td:nth-child(2) {
    color:#ff8000
}
}
}
.payment {
    .mt(24px);
    .mb(24px);
p:first-child{
    color:#333333;
    .ft(16px);
    .mb(30px);
    border-left:4px #219393 solid;
    .pl(6px)
}
p:last-child {
    i {
        .w(111px);.h(40px);.mr(81px);
        border-top:2px #e9e9e9 solid;
        border-left:1px #d6d6d6 solid;
        border-right: 1px #e2e2e2 solid;
        border-bottom: 1px #d6d6d6 solid;
        .cursor;
        background:url('../../../static/scwx-images/scwx_jstk_imges/right_icon.png') no-repeat right top;
        .text_center;
        .dis-inline;
        img {
            font-size: 0;
            display:inline-block;
        }
    }
    i:hover {.cursor;}
    i:first-child {.w(116px)}
    i:nth-child(2) {.w(130px) }
    .i:nth-child(3){.w(120px)}
    .i.active{background:url('../../../static/scwx-images/scwx_jstk_imges/right_pitchUp.png') no-repeat right top;}
    .pl(10px);

}
}
.payment_case {
    .w-inherit;
    .h(473px);
    .border(1px,#cccccc,solid);
    .box;
    .box-flex(center,center);
    .payment_case_cont {
        .w(220px);
        .h(361px);
        .text_center;


    }

}



 </style>
