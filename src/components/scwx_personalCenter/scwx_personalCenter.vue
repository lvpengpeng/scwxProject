<style scoped lang="less">
@import '../../assets/scwx-less/px2rem.less';
.scwx_personalCenter {
    background:#f4f4f4;-webkit-font-smoothing: antialiased;
    .pb(100px);
    .pesonIcon {
        .p-relative;.w(1200px);
        .m-top-auto(120px);
    .text_center;heihgt:auto;
    .icon_person {
        .w(138px);.h(135px);
        .p-absolute;top:50px;left:50%;
        .ml(-69px);
        p {color:#ffffff;.ft(16px);.l-height(20px);white-space: nowrap;}
    }
    .edit_Background {
        .p-absolute;
        right:0;top:10px;.mr(10px);
        input {.w(126px);.h(36px);.b_radius(6px);
            background:rgba(0,0,0,.5);border:none;
            color:#ffffff;.ft(16px);
            }
    }
.lists_main {
        .box;.box-flex(space-between,normal);.mt(18px);
        .lists_left {
            .w(229px);.bg_color(#ffffff);
            box-shadow:4px 4px #e6e6e6;
            .padding(20px,0px,5px,0px);
            .myTraining {
                ul > li {
                    .w(211px);.h(36px);
                    .ml(9px); .l-height(34px);
                    color:#333333;
                    .ft(16px);.cursor;
                    font-family: MicrosoftYaHei;
                    img {.mr(14px)}
                    i {
                        .pr(8px);
                        vertical-align: sub;
                    }
                    a {color:#333333;text-decoration: none;}
                }
               li.activeList {.bg_color(#e8fbff);}
                // li.activeList1 {.bg_color(#e8fbff);}
                *:hover {color:red;}
                ul > li:first-child {
                    color:#999999!important;
                    .ft(20px);
                }
            }
        }
// 右栏

    }


    // end
    }
}
</style>

<template>
    <div class="scwx_personalCenter">
            <div class="pesonIcon">
                <p><img src="../../../static/scwx-images/scwx_personalCenter_imges/note-taking.png" height="227" width="1200" alt="" /></p>
                <div class="icon_person">
                    <i><img src="../../../static/scwx-images/scwx_personalCenter_imges/personalIcon.png" height="73" width="74" alt="" /></i>
                    <p style="padding-top:10px">Slongarui</p>
                    <p><i :style="{paddingLeft:'17px'}">学历</i><i :style="{paddingLeft:'17px',paddingRight:'17px'}">|</i><i>专业方向</i></p>
                </div>
                <div class="edit_Background">
                    <input type="button" value="编辑背景"/>
                </div>

                <!-- main -->
                <div class="lists_main">
                    <div class="lists_left">
                        <ul>
                            <li class="myTraining">

                                <ul class="myTraining activeBgcolor">
                                    <li class="first"><img src="../../../static/scwx-images/scwx_personalCenter_imges/my_course.png" height="6" width="6" alt="" />
                                    我的培训
                                    </li>


                                    <li class="first_show" v-for="(traning,index) of tranings">
                                    <i>&ordm;</i><a :href="traning.href">{{ traning.lists }}</a>
                                    </li>
                                </ul>

                                <ul class="activeBgcolor" v-for="(myCourse,index) of myCourses">
                                    <li  class="first"><img :src="myCourse.url" height="6" width="6" alt="" />
                                   我的课程
                                    </li>
                                    <li  v-for="(courseList,index) in myCourse.courseLists"><i>&ordm;</i><a :href="courseList.href">{{ courseList.lists }}</a></li>
                                </ul>

                                <ul class="activeBgcolor" v-for="(myQuestion,index) of myQuestions">
                                    <li  class="first"><img :src="myQuestion.url" height="6" width="6" alt="" />我的题库</li>
                                    <li v-for="(questionList,index) in myQuestion.questionLists"><i>&ordm;</i><a :href="questionList.href">{{ questionList.lists }}</a></li>
                                   
                                </ul>

                                <ul class="activeBgcolor" v-for="(myJob,index) of myJobes">
                                    <li  class="first"><img :src="myJob.url" height="6" width="6" alt="" />我的招聘</li>
                                    <li v-for="(myJobList,index) in myJob.myJobListes"><i>&ordm;</i><a :href="myJobList.href">{{ myJobList.lists }}</a></li>
                                </ul>

                                <ul class="activeBgcolor" v-for="(personalCenter,index) of personalCenters">
                                    <li  class="first"><img :src="personalCenter.url" height="6" width="6" alt="" />个人中心</li>
                                    <li v-for="(personalCenterList,index) in personalCenter.personalCenterLists"><i>&ordm;</i><a :href="personalCenterList.href">{{ personalCenterList.lists }}</a></li>
                                   
                                </ul>
                            </li>
                        </ul>
                    </div>
<!-- 右栏 -->
                    

                </div>


            </div>
            <router-view></router-view>
    </div>
</template>


<script> 
    export default {
        data () {
            return {
//我的培训          
                tranings: Object.freeze ([
                    {href:'#scwx_personalCenter',lists: '我的培训'}
                    ]),
// 我的课程     
                myCourses:Object.freeze ([
                    {
                        url:require('../../../static/scwx-images/scwx_personalCenter_imges/cousrce2.png'),
                        courseLists: Object.freeze ([
                            {href:'#myCourses',lists:'我的课程'},
                            {href:'#courseNotes',lists:'课程笔记'},
                            {href:'#courseRecord',lists:'课程记录'},
                            {href:'#collectRecord',lists:'收藏记录'}
                            ])
                    }
                    ]),
// 我的题库
                myQuestions:Object.freeze ([
                    {
                        url:require('../../../static/scwx-images/scwx_personalCenter_imges/cousrce3.png'),
                        questionLists: Object.freeze ([
                            {href:'#myQuestion',lists:'我的题库'},
                            {href:'#answerQuestions_record',lists:'答题记录'},
                            {href:'#wrongTopic_record',lists:'错题记录'},
                            {href:'#collectionRecord',lists:'收藏记录'},
                            {href:'#noteTaking',lists:'笔记记录'}
                            ])
                    }
                    ]),
// 我的招聘
                myJobes:Object.freeze ([
                    {
                        url:require('../../../static/scwx-images/scwx_personalCenter_imges/cousrce4.png'),
                        myJobListes: Object.freeze ([
                            {href:'#myResume',lists:'我的简历'}
                           
                            ])
                    }
                    ]),

// 个人中心
                personalCenters:Object.freeze ([
                    {
                        url:require('../../../static/scwx-images/scwx_personalCenter_imges/cousrce5.png'),
                        personalCenterLists: Object.freeze ([
                            {href:'#myMessage',lists:'我的消息'},
                            {href:'#myOrder',lists:'我的订单'},
                            {href:'#personalData',lists:'个人资料'}
                            ])
                    }
                    ])

            }
        },
        methods: {
           
        },
        mounted () { 
            var vm = this;
            vm.$nextTick(function () {
                $(function () {
                        $('.first_show').addClass('activeList');
                $('.myTraining ul li').on('click',function (event) {
                    $(this).addClass('activeList').siblings('li'). 
                     removeClass('activeList').parent('ul').siblings('ul').children('li').removeClass('activeList');
                     $('.first').removeClass('activeList');
                    event.stopPropagation();
                });
                })
            })
        }
    }
</script>









