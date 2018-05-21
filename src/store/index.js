/*
  这里面定义是store的出口，将actions，mutations，和getters整合
  这里需要引入到main.js中
  整个应用都能访问store里的actions，state等
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import state from './state.js'
import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'

import moduleA from "./car/index.js"


export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
	modules:{
		//具体业务的分块
		//例如购物车模块、详情模块等可以把state拆分
		//模块内部state，模块内部的state是局部的，也就是模块私有的，比如是car.js模块state中的list数据，我们要通过this.$store.state.car.list获取
		//放入modules的state会称为具体模块的私有state，其他的actions、getters、mutations注册仍然注册在全局命名空间内
		//传参：getters====({state(局部状态),getters（全局getters对象）,roosState（根状态）})；actions====({state(局部状态),commit,roosState（根状态）}).
		// a:moduleA,
	}
})