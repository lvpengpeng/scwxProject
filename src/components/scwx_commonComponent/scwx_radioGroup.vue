<template>
    <div>
        <div v-for="(item,index) in sexArr">
            <li @click="getSex(index,item)">
                <span>{{item}}</span>
                <img src="../../static/17.png" alt="" style="float:right; display:block; height:30px; margin-right:15px" v-show="isShow == index">
            </li>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {

            }
        }
    }
</script>

<style scoped>
    
    
</style>