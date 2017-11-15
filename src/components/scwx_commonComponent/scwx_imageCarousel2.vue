<template>
<div class="banner" @mouseover="stop" @mouseout="autoChange">
  <transition-group tag="ul" class='list' name="list">
    <img :src="imgArr[0].src" alt="" style="opacity: 0;z-index: 0" key="0">
      <li v-for="(item,index) in imgArr" v-show="index == nowIndex" :key="index">
        <a href="javascript:void(0)">
          <img :src="item.src" alt="">
        </a>
     </li> 
  </transition-group>
  <ol class="btn">
    <li @click="change(prevIndex)">&lt;</li>
    <li  v-if="!isShow" v-for="(item,index) in imgArr" @click="change(index)" :class="{active:index == nowIndex}">{{index + 1}}</li>
    <li @click="change(nextIndex)">&gt;</li>
  </ol>
</div>
</template>

<script>
export default {
  data(){
    return {
      nowIndex:0,
      isShow:true
    }
  },
  computed:{
    nextIndex(){
      if(this.nowIndex == this.imgArr.length - 1){
        return 0
      }else{
        return this.nowIndex + 1
      }
    },
    prevIndex(){
      if(this.nowIndex == 0){
        return this.imgArr.length - 1
      }else{
        return this.nowIndex - 1
      }
    }
  },
  props:{
    imgArr:{
      type:Array,
      default:[]
    },
    time:{
      type:Number,
      default:2000
    }
  },
  mounted(){
    this.autoChange()
    console.log(this.imgArr)
  },
  methods:{
    change(index){
      this.nowIndex = index
    },
    autoChange(){
      this.timer = setInterval(()=>{
        this.change(this.nextIndex)
      },this.time)
    },
    stop(){
      clearInterval(this.timer)
    }
  }
}
</script>

<style scoped>
.list-enter-active {
  transition: all 1s ease;
  opacity: 1;
  transform:scale(2);
}

.list-leave-active {
  transition: all 1s ease;
  opacity: 0;
  transform:scale(2);
}

.list-enter {
  opacity: 0
}

.list-leave {
  opacity: 1;
}
/*.list-enter-active,.list-leave-active{
  transition: all 1s
}
.list-enter,.list-leave-active{
  opacity: 0
}
.list-leave,.list-enter-active{
  opacity: 1
}*/
*{margin:0; padding: 0}
.banner{position: relative; overflow: hidden;}
.list>li{list-style: none; position: absolute; width: 100% ; top: 0;}
/*.list img{width: 100%;}*/
.btn{position: absolute;  right: 50%; bottom: 4%;}
.btn>li{float: left; list-style: none; text-align: center;color: white; margin-left: 15px; cursor: pointer; font-size: 30px}
.active{text-decoration: underline;}
</style>
