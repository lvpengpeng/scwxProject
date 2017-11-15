import Vue from 'vue'
import Vuex from 'vuex'
import {mapState} from 'vuex';

Vue.use(Vuex)

const state = {
    sex:'',
    num: 1
}

const mutations = {
     GETSEX:(state,sex)=>{
        state.sex = sex;
    },
    INCREMENT (state) {
        state.num++
    },
    REDUCE (state) {
        if (state.num > 1) {
           state.num-- 
        }
    },
    ADDNUM (state,value) {
        state.num += value
    }
}

const actions = {
    getSex:({commit},sex)=>{
        commit('GETSEX',sex)
    },
    increment (context) {
        context.commit('INCREMENT')
    },
    reduce ({commit}){
        commit('REDUCE')
    },
    addNum ({commit},value) {
        commit('ADDNUM',value)
    }
}

const getters = {
    sex:(state)=>{
        return state.sex
    }
}
export default new Vuex.Store ({
    state,
    mutations,
    actions,
    getters
})

