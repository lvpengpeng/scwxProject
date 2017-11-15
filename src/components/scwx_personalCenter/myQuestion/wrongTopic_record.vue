<template>
    <div class="wrongTopic_record">
       <div class="lists_right">
                        <p class="wrongTittle">
                            <span>错题记录</span> 
                        </p>

                        <div class="noteCount">
                        <div class="cousrce_select">
                        <label for="">
                            <span>课程</span>
                            <input type="text" placeholder="课程" list="courseList"/>
                            <datalist id="courseList">
                                <option label="Top1" value="法医鉴定"></option>
                                <option label="Top2" value="法医鉴定"></option>
                                <option label="Top3" value="法医鉴定"></option>
                            </datalist>
                        </label>

                        <label for="">
                            <span>题型</span>
                            <input type="text" placeholder="全部" list="courseList"/>
                            <datalist id="courseList">
                                <option label="Top1" value="法医鉴定"></option>
                                <option label="Top2" value="法医鉴定"></option>
                                <option label="Top3" value="法医鉴定"></option>
                            </datalist>
                        </label>

                        <span class="screen">
                            <input type="button" value="筛选"/>
                        </span>


                        </div>
                            
                        </div>
                    </div>
                      

        <!-- <scwx_personalCenter></scwx_personalCenter> -->
    </div>
</template>

<script>
// import scwx_personalCenter from '../../../components/scwx_personalCenter/scwx_personalCenter.vue'
export default {
    name: 'wrongTopic_record',
    // componetes: {
    //     scwx_personalCenter
    // },
        data () {
    return {

        }
    }
}
</script>


<style scoped lang="less">
@import  '../../../assets/scwx-less/px2rem.less';
.wrongTopic_record {
    .p-relative; 
            .lists_right {
            .w(952px);.h(850px);.bg_color(#ffffff);
           // border-image: -webkit-linear-gradient(#f4f4f4,#f4f4f4) 10;
           box-shadow:4px 4px #e6e6e6;.p-absolute;
           left:318px;top:-839px;
           .wrongTittle {
            .w-inherit;.h(60px);
            border-bottom:6px #f4f4f4 solid;
            .l-height(60px); .ft(20px);
            color:#3ba0a0; .pl(36px);
        }

        .noteCount {
            .w(913px);height:auto;
            .mt(24px);.pl(15px);
            label {
                .pl(15px);
                span {
                    color:#666666; 
                    .ft(16px);.pr(1
                        3px);
                }
                input {
                    .border(1px,#cccccc,solid );
                    .w(178);.h(28px);
                    .bg_color(#f4f4f4);
                    .pl(13px);color:#999999;
                }

            }
            label:last-child {.pl(6px)}
            .screen {
                .pl(26px);
                input {
                    .border(1px,#cccccc,solid );
                    .w(88px);.h(29px);
                    .bg_color(#219393);
                    color:#ffffff;.ft(15px);
                    .cursor;
                }
            }

        }
        }
}
</style>