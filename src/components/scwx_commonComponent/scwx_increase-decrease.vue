<template>
    <div>
        <p>{{ num }}</p>
    <input type="button" value="+" @click="increment" />
    <input type="button" value="-"  @click="reduce"/>
    <input type="button" value="+200" @click="addNum"/>
    </div>
</template>

<script>
import regLogin from './components/regLogin.vue';
import {mapState,mapActions} from 'vuex';
    export default {
        data () {
            return {

            }
        },
        methods: {
        ...mapActions (['increment','reduce']),
        addNum () {
          this.$store.dispatch('addNum',this.number)
        },
        computed: {
        // num () {
        //   return this.$store.state.num
        // }
        // 
        ...mapState(['num'])
      },
    }
</script>

<style scoped lang="less">
@import '../../assets/scwx-less/px2rem.less';
</style>