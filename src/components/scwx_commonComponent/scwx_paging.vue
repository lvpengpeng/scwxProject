<template>
 <div class="pagination">
    <ul>
      <li style="background:#3ba0a0;color:white;" :class="{disabled: curPage == 1}" @click="prevPage" v-if="pageCount > 1">上一页</li>
      <li :class="{active: curPage == 1}" @click="page(1)">1</li>
      <li class="ellipsis" v-show="curPage > 5 && pageCount > 10">...</li>
      <li :class="{active: curPage == index+offset}" v-for="(item,index) in middlePages" @click="page(index+offset)">{{index+offset}}</li>
      <li class="ellipsis" v-show="curPage < bigLimit && pageCount > 10">...</li>
      <li :class="{active: curPage == pageCount}" @click="page(pageCount)" v-if="pageCount > 1">{{pageCount}}</li>
      <li :class="{disabled: curPage == pageCount}" @click="nextPage" v-if="pageCount > 1" style="background:#3ba0a0;color:white;">下一页</li>
    </ul>
  </div>
</template>
<script>
    export default {
data () {
    return {
        curPage: 1,
       pageCount:10,
    }
    },
    methods: {
        page(indexPage){
        this.$emit('togglePage',indexPage);
        this.curPage = indexPage;
      },
      prevPage(){
        if(this.curPage != 1){
          this.page(this.curPage-1);
        }
      },
      nextPage(){
        if(this.curPage != this.pageCount){
          this.page(this.curPage+1);
        }
      }
            
    },
    computed:{
      middlePages(){
        if(this.pageCount <= 2){
          return 0;
        }else if(this.pageCount> 2 && this.pageCount <= 10){
          return this.pageCount-2;
        }else{
          return this.curPage > 999 ? 5 : 8;
        }
      },
      bigLimit(){
        return this.middlePages > 5 ? this.pageCount-6 : this.pageCount -3;
      },
      offset(){
        if(this.curPage <= 5){
          return 2;
        }else if(this.curPage >= this.bigLimit){
          return this.bigLimit-2;
        }else{
          return this.middlePages > 5 ? this.curPage-3 : this.curPage-2;
        }
      }
    }
   }
</script>

<style scoped lang="less">
@import '../../assets/scwx-less/px2rem.less';
  .pagination{
    ul{
      li{
        cursor: pointer;
        display: inline-block;
        padding:8px 17px 8px 17px;
        border: 1px solid #3ba0a0;
        color:#3ba0a0;
        margin-right: 15px;
       border-radius: 4px;
        &:hover {
            background:rgba(0,0,0,0.09);
            color:#3ba0a0;
        }
        &.active{
          .bg_color(#3ba0a0);
          color: #fff;
        }
        &.ellipsis{
          border: none;
        }
        &.disabled{
          color: #dcdcdc;
        }
      }
    }
  }
</style>
