<template>
    <div class="jstk_SubjectToUpload">
        <div class="uploading">
            <p><i><img src="../../../static/scwx-images/scwx_jstk_imges/uploading.png" height="24" width="24" alt="" /></i>
            <span>题目上传</span></p>
        </div>
        <div class="major_lists">
        <label for="">
        <span>专业方向<i>:</i></span>
            <select name="" id="">
                <option value="">鉴定类别</option>
                <option value="">鉴定类别</option>
                <option value="">鉴定类别</option>
             </select>
            </label>
            
            <label for="">
            <span>鉴定类别<i>:</i></span>
            <select name="" id="">
                <option value="">鉴定类别</option>
                <option value="">鉴定类别</option>
                <option value="">鉴定类别</option>
            </select>
            </label>
            <label for="">
            <span>题目类型<i>:</i></span>
            <input type="text" placeholder="单项选择"/>
            </label>

            <label for="">
            <span>题目来源<i>:</i></span>
          <input type="text" placeholder="教育网n"/>
          </label>

          
    <div  :style="{position:'relative',zIndex:'0'}" class="editor-container">
      <label for=""><span>试题内容<i>:</i></span></label><UE style="float:right;margin-left:98px;margin-top:-20px;" :defaultMsg=defaultMsg :config=config :id=ue1 ref="ue"></UE>
    </div>
     <label for=""><span>征集说明<i>:</i></span></label>
    <ul style="padding-top:20px">
        <li class="explain">
            <p>权限说明&nbsp;:&nbsp;2015年医师技能015年医师技能考试015年医师技能考试考试</p>
             <p>权限说明&nbsp;:&nbsp;2015年医师015年医师技能考试015年医师技能考试技能考试</p>
              <p>权限说明&nbsp;:&nbsp;2015年医师技能考试</p>
               <p>权限说明&nbsp;:&nbsp;2015年医师技能考试</p>
        </li>
    </ul>

   <div class="footer_next">
       <input type="button" value="下一步" />
   </div>

          

          
        </div>
    </div>
</template>

<script>
 import UE from '../../components/scwx_commonComponent/ue/ue.vue';
   export default {
    components: {UE},
    data() {
      return {
        defaultMsg: '请上传题目',
        config: {
          initialFrameWidth: 1000,
          initialFrameHeight: 733
        },
        ue1: "ue1", // 不同编辑器必须不同的id
        ue2: "ue2"
      }
    },
    methods: {
      // getUEContent() {
      //   let content = this.$refs.ue.getUEContent(); // 调用子组件方法
      //   this.$notify({
      //     title: '获取成功，可在控制台查看！',
      //     message: content,
      //     type: 'success'
      //   });
      //   console.log(content)
      // }
    }
  };
</script>

<style scoped lang="less"> 
@import '.../../../../assets/scwx-less/px2rem.less';

.jstk_SubjectToUpload {
.w(1200px);margin: 130px auto;
.uploading {
.mt(42px);.mb(43px);
p{
span {
vertical-align:middle;
.pl(10px);
.ft(24px);
font-weight:400;
color:#333333;
}
}
}
.major_lists {
    .pl(34px);
    label{.dis-block;.mt(35px)} 
    label > span {
        .ft(16px);
        font-family: "微软雅黑";
        color:#333333;
        i {
            .pl(8px);
        }

    }
    label > select,label > input,label > select > option {
        outline:none;
        border:1px #999999 solid;
        .b_radius(4px);
        .w(190px);.h(32px);
        .pl(12px);
        color:#999999;
        .ml(17px);
        .cursor;
    }
    label > input {
        color:#999999;

    }
}
}
.explain {
    p {color:#999999;.l-height(25px);.ft(16px)}
}
.questions {
.dis-inline;
}

.footer_next {
    .w(1200px);.box;.mt(50px);.mb(-100px);.box-flex(center,center);
    input {
        .w(120px);.h(40px);.b_radius(10px);color:#ffffff;.ft(18px);outline:none;border:none;.bg_color(#219393)
    }
}
.info{
    border-radius: 10px;
    line-height: 20px;
    padding: 10px;
    margin: 10px;
    background-color: #ffffff;
  }
  .editor-container {display:inline-block;}
</style>