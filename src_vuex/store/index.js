import Vue from 'vue'
import Vuex from 'vuex'
// 响应组件的动作
const actions = {
    // add(context, value) {
    //     context.commit('ADD', value);
    // },//add和reduce不进行逻辑判断，直接commit所以不用卸载actions里面而是直接在组件里调用commit
    // reduce(context, value) {
    //     context.commit('REDUCE', value);
    // },
    addOdd(context, value) {
        console.log(context);
        if (context.state.sum % 2)
            context.commit('ADDODD', value);
    },
    addWait(context, value) {
        setTimeout(()=>context.commit('ADDWAIT', value),600);
    }
};
// 用于操作数据，或者说状态（指的是state）
const mutations = {
    ADD(_state, value) {
        _state.sum += value;
    },
    REDUCE(_state, value) {
        _state.sum -= value;
    },
    ADDODD(_state, value) {
        _state.sum += value;
    },
    ADDWAIT(_state, value) {
        _state.sum += value;
    },
};
//存储数据
const state = {
    sum: 0,
};

const getters = {
    fiveTimes(state){
        return state.sum * 5;
    }
}
Vue.use(Vuex);//useVuex必须在创建store之前执行，但是脚手架会把所有的import语句提升到最
// 上方执行，所以仅仅是改变代码顺序没用
export default new Vuex.Store({
    actions, mutations, state,getters
})

