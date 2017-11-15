<template>
<div class="scwx_main">
  <div class="reg">
    <div class="reg_header">
        <span><img src="" alt="" /></span>
        <span>{{ userReg }}</span>
    </div>
    <div class="reg_npt">
    <div class="npt_header">
        <p>
        <span :style="border_color">{{ reg }}</span>
        <span>{{ reg_succees }}</span>
        </p>
    </div>
     <!-- form -->
        <div class="reg_form">
        <el-form style="width:380px" class="e-form" ref="form" :model="form" label-width="140px">

         <el-form-item label="登录账号">
    <el-input  v-model="username" placeholder="请输入手机或邮箱" class="reg_label"></el-input>
  </el-form-item>
  <el-form-item label="验证码" class="reg_huan">
    <el-input  id="reg_yan" v-model="form.name" placeholder="请输入验证码" class="reg_label"></el-input> <span class="reg_span"><img src="" alt="" />图片&nbsp;&nbsp;&nbsp;换一张</span>
  </el-form-item>

  <el-form-item label="短信验证" class="reg_huan">
    <el-input  id="reg_yan" v-model="form.name" placeholder="请输入验证码" class="reg_label"></el-input> 
    <span  v-text="get":style="reg_huo"></span>
  </el-form-item>
     <br>

   <el-form-item label="密码">
    <el-input  v-model="password" placeholder="6-18位大小写字母、数字" class="reg_label"></el-input>
  </el-form-item>

  <el-form-item label="确认密码">
    <el-input  v-model="form.name" placeholder="再次输入密码" class="reg_label"></el-input>
  </el-form-item>

    <el-form-item label="注册为鉴定人" style="margin-top:-15px;">
    <el-checkbox style="float:left;padding-left:60px" v-model="checked">备选项</el-checkbox>
    </el-form-item>
        <br>
    <el-form-item label="姓名">
    <el-input  v-model="form.name" placeholder="输入真实姓名" class="reg_label"></el-input>
  </el-form-item>
  <el-form-item label="省份证号">
    <el-input  v-model="form.name" placeholder="输入18身份证号码" class="reg_label"></el-input>
  </el-form-item>

  <el-form-item label="鉴定人资格证号">
    <el-input  v-model="form.name" placeholder="输入资格证号" class="reg_label"></el-input>
  </el-form-item>

  <el-form-item label="所在鉴定所">
    <el-input  v-model="form.name" placeholder="输入鉴定所" class="reg_label"></el-input>
  </el-form-item>

    <input type="submit" value="注册" @click="sub">
    </el-form>

        </div></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
        userReg: '用户注册',
        reg: '填写注册信息',
        reg_succees: '注册成功',
        get: '获取验证码',
        checked: true,
        username:'',
        password:'',
        border_color:[
        {
            borderBottom:'4px skyBlue solid'
        }
        ],
        reg_huo:[{
            background:'#ccc',
            color:'white',
            textAlign:'center',
            marginLeft:'20px',
            cursor:'pointer'
        }],
        form: {
        },

    }

  },
   // methods: {
   //  sub:function () {
   //    this.$http.post('/songci-api/user/regist',{username:'',password:''}).then((res) => {
   //      console.log(res);
   //    },(errCode)=>{
   //      console.log(errCode);
   //    })
   //  }
   //  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="scoped" lang="less">
@import '../../assets/scwx-less/px2rem.less';   
.reg {
    .mt(60px);
    .mb(190px);
}
.reg_header {
    .ft(23px)
}
.reg_header {
    padding-left:60px;
}
.reg_npt {
 width:auto;
 margin:50px auto;
 .text_center;
}
.npt_header { 
    .mb(40px);
    p {
        .w(400px);
        margin:auto;
  span {
   .padding(0px,70px,10px,70px)
  }}
}
.reg_form {
    .w(400px);
    height:auto;
    margin:auto;
    .e-form {
         .text_center;
    }
    .reg_label {
        .pl(25px);
        .w(240px);
        .h(45px);
    }
    #reg_yan {
        .w(160px);
        float:left;
    }
    .reg_huan {
        .w(400px)
    }
    .reg_span {
            // .pl(px)
        }
        input[type="submit"] {
            background:skyblue;
            color:white;
            .w(240px);
            .h(30px);
            margin-left:25%;
            border:none;
            outline:none;
            cursor:pointer;
        }
}
</style>
