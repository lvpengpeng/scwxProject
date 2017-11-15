<template>
	<div class="scwx_jskc">
    <br /><br /><br /><br />
    <div class="scwx-main">
		我是鉴识课程
    </div>
        




    </div>
</template>



<script type="text/javascript">
import jq from '../../assets/scwx-js/jq.js';
   export default{
        data(){
            return {
                sexArr:['男','女'],
                isShow:3
            }
        },
        methods:{
            getSex(index,item){
                this.isShow = index;
                this.$store.dispatch('getSex',item)
            }
        }
    }
</script>


<style scoped>
</style>



