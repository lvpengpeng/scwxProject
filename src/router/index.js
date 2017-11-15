import Vue from 'vue'

import Router from 'vue-router'
// 首页
import scwx_homePage from '../components/scwx_homePage/scwx_homePage'


// 鉴识课程下
import scwx_jskc from '../components/scwx_jskc/scwx_jskc'
// 视频介绍
import videoIntroduction from '../components/scwx_jskc/videoIntroduction'
//视频播放
import videoDisplay from '../components/scwx_jskc/videoDisplay'


// 公用组件暂时性测试
////////
import scwx_marquee from '../components/scwx_commonComponent/scwx_marquee'
import scwx_langSlider from '../components/scwx_commonComponent/scwx_langSlider'
///////






// 鉴识题库
import scwx_jstk from '../components/scwx_jstk/scwx_jstk'
// 鉴识题库子页面
import jstk_SubjectToUpload from '../components/scwx_jstk/jstk_SubjectToUpload'







// 鉴识招聘
import scwx_jszp from '../components/scwx_jszp/scwx_jszp'
// 鉴识师资
import scwx_jssz from '../components/scwx_jssz/scwx_jssz'
// 我的课程
import scwx_wdkc from '../components/scwx_wdkc/scwx_wdkc'
// 课程搜索
import scwx_courseSearch from '../components/scwx_courseSearch/scwx_courseSearch'


// 个人中心
import scwx_personalCenter from '../components/scwx_personalCenter/scwx_personalCenter'
// 我的培训 => 我的培训
import myTraining from '../components/scwx_personalCenter/myTraining/myTraining'


// 个人中心 => 我的课程 => 我的课程
import myCourses from '../components/scwx_personalCenter/myCourses/myCourses'
// 我的课程 => 课程笔记
import courseNotes from '../components/scwx_personalCenter/myCourses/courseNotes'
// 我的课程 => 课程记录
import courseRecord from '../components/scwx_personalCenter/myCourses/courseRecord'
// 我的课程 => 收藏记录
import collectRecord from '../components/scwx_personalCenter/myCourses/collectRecord'


// 个人中心 => 我的题库 => 我的题库
import myQuestion from '../components/scwx_personalCenter/myQuestion/myQuestion'
// 我的题库 => 答题记录
import answerQuestions_record from '../components/scwx_personalCenter/myQuestion/answerQuestions_record'
// 我的题库 => 错题记录
import wrongTopic_record from '../components/scwx_personalCenter/myQuestion/wrongTopic_record'
// 我的题库 => 收藏记录
import collectionRecord from '../components/scwx_personalCenter/myQuestion/collectionRecord'
// 我的题库 => 笔记记录
import noteTaking from '../components/scwx_personalCenter/myQuestion/noteTaking'


// 个人中心 => 我的招聘
// import myJob from '../components/scwx_personalCenter/myJob/myJob'
// 我的招聘 => 我的简历
import myResume from '../components/scwx_personalCenter/myJob/myResume'


// 个人中心 => 个人中心
// 个人中心 => 我的消息
import myMessage from '../components/scwx_personalCenter/myCenter/myMessage'
// 个人中心 => 我的订单
import myOrder from '../components/scwx_personalCenter/myCenter/myOrder'
// 个人中心 => 个人资料
import personalData from '../components/scwx_personalCenter/myCenter/personalData'








// 鉴识网课
import scwx_jswk from '../components/scwx_jswk/scwx_jswk'
// 登录页
import scwx_login from '../components/scwx-login_reg/scwx_login'
// 注册页
import scwx_reg from '../components/scwx-login_reg/scwx_reg'
Vue.use(Router)

export default new Router({
  routes: [
// 首页
    { path: '/',name: 'scwx_homePage',component: scwx_homePage },








// 鉴识课程下
    { path: '/scwx_jskc',name: 'scwx_jskc',component: scwx_jskc
      // children:[
      // 视频介绍
      // {
      //   path:'/jskc_videoIntroduction',name:'jskc_videoIntroduction',component:jskc_videoIntroduction
      // },
      // 视频播放
      // {
      //   path:'/videoDisplay',name:'videoDisplay',component:videoDisplay
      // }
      // ]
     },

// 视频介绍
    { path:'/videoIntroduction',name:'videoIntroducti',component:videoIntroduction 
    },
 // 视频播放
    { path:'/videoDisplay',name:'videoDisplay',component:videoDisplay
    },




// 公用组件暂时性测试
//
{path:'/scwx_marquee',name: 'scwx_marquee',component:scwx_marquee},
{path:'/scwx_langSlider',name: 'scwx_langSlider',component:scwx_langSlider},
//


// 鉴识题库
    { path: '/scwx_jstk',name: 'scwx_jstk', component: scwx_jstk
     //  children:[
     //   { path: '/jstk_SubjectToUpload',name: 'jstk_SubjectToUpload', component:jstk_SubjectToUpload
     // }
     //  ]
     },
 // 鉴识题库子页面
{ path: '/jstk_SubjectToUpload',name: 'jstk_SubjectToUpload', component:jstk_SubjectToUpload
     },






 // 鉴识招聘
    { path: '/scwx_jszp',name: 'scwx_jszp', component: scwx_jszp },
// 鉴识师资   
    { path: '/scwx_jssz',name: 'scwx_jssz', component: scwx_jssz },  
// 我的课程
    { path: '/scwx_wdkc',name: 'scwx_wdkc', component: scwx_wdkc },
// 课程搜索
    { path: '/scwx_courseSearch',name: 'scwx_courseSearch', component: scwx_courseSearch },
// 鉴识网课
    { path: '/scwx_jswk',name: 'scwx_jswk',  component: scwx_jswk },
// 登录注册
    { path: '/scwx_login', name:'scwx_login', component: scwx_login },
    { path: '/scwx_reg', name: 'scwx_reg',  component: scwx_reg},
// 个人中心
   { 
    path: '/scwx_personalCenter',
    name: 'scwx_personalCenter', 
    component:scwx_personalCenter,
    children: [
    {
     path: '',
     name: 'myTraining',
     component: myTraining
   },
// 我的课程
  { path: '/myCourses', name: 'myCourses', component: myCourses },
  { path: '/courseNotes',
    name: 'courseNotes',
    component: courseNotes
  },
  { path: '/courseRecord',
    name: 'courseRecord',
    component: courseRecord
  },
  { path: '/collectRecord',
    name: 'collectRecord',
    component: collectRecord
  },
// 我的题库
   { path: '/myQuestion',
    name: 'myQuestion',
    component: myQuestion
  },
  { path: '/answerQuestions_record',
    name: 'answerQuestions_record',
    component: answerQuestions_record
  },
  { path: '/wrongTopic_record',
    name: 'wrongTopic_record',
    component: wrongTopic_record
  },
  { path: '/collectionRecord',
    name: 'collectionRecord',
    component: collectionRecord
  },
  { path: '/noteTaking',
    name: 'noteTaking',
    component: noteTaking
  },
// 我的招聘
  // { path: '/myJob',
  //   name: 'myJob',
  //   component: myJob
  // },
  { path: '/myResume',
    name: 'myResume',
    component: myResume
  },
// 个人中心
  { path: '/myMessage',
    name: 'myMessage',
    component: myMessage
  },
  { path: '/myOrder',
    name: 'myOrder',
    component: myOrder
  },
  { path: '/personalData',
    name: 'personalData',
    component: personalData
  }



    ]
    }
      ]
}) 
    


  
  
    
