 <template> 
 <div class="videoDisplay">
<div class="video_header"  :style="{height:'10%',width:'100%',background:'grey'}">
 <span class="video_titleIcon"><i class="el-icon-arrow-left"></i> <i class="back" @click="backPre">{{msg}}</i></span>
 <span class="biaoTi" v-text="biaoTi"></span>
</div>
<div class="video_player">
    <div  class="prism-player" id="J_prismPlayer"></div>
</div>
</div>

 </template>

 <style scoped lang="less">
@import '../../assets/scwx-less/px2rem.less';
.videoDisplay {
width:100%;
.video_header {.box;span{flex:1;}}
.video_titleIcon {
.pl(30px);
.el-icon-arrow-left{.w(14px);.h(24px);.l-height(14px)}
color:white;
.back{
color:white;.ft(16px);.l-height(70px);
}
}.biaoTi {color:white;.ft(20px);.l-height(70px);.pr(84px);}
 .video_player {
width:100%;height:90%;
.player_cont {
flex:1;
.h-inherit;
}
 }}

  </style>

<script>
 import bus from '../../assets/scwx-js/eventBus.js';
export default {
    name: 'videoDisplay',
    data () {
        return {
            msg:'默认',
            biaoTi: '医学理论',
            playerUrl:'//common.qupai.me/player/qupai.mp4'
        }
    },
    methods:{
        backPre () {
        this.$router.go(-1)
    }
    },
        mounted:function () {
        this.$nextTick (function () {
     var player = new prismplayer({
    id: "J_prismPlayer",
         autoplay: false,
         isLive:false,
         playsinline:true,
         width:"100%",
         height:"90%",
         controlBarVisibility:"always",
         useH5Prism:false,
         useFlashPrism:true,
         source:this.playerUrl,
         cover:"法医咨询"                  
}); 

     bus.$on("toComponents",function (msg) {
        this.msg = msg
     })
})
}
}
    
</script>





