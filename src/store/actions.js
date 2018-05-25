/*
  这里面定义所有action，也就是store的dispatch方法，用于处理接收组件传入的请求
  所有的流程控制、逻辑处理、异步操作都放在这里面进行
  通过commit提交给mutations，通过type作为两者相连的唯一通道
 */
import * as types from './types.js';
import Router from '@/router/index'
export default {
  //示例
  decrement: ({ commit, state }) => {
    if (state.count > 0) {
      commit(types.DECREMENT); 

    }
  },
  // 获得商品数据
  adds:({ commit, state },data) => { 
  			 commit(types.MENUDATA,data);
  },
  // 获得菜单的价格
  compute:({ commit, state },data) => { 

       commit(types.MENUNUM,data);
      
  },
  // 清空
  clear:({ commit,state}) => {
    commit(types.MENUCLEAR);
  },
  // 本地商品数据传输
  ByValueData:({ commit, state },data) => {
    commit(types.BYVALUEDATA,data);
  },
  // 本地总价数据传输
  ByValueMoney:({ commit, state },data) => {
    commit(types.BYVALUEMONEY,data);
  }
}
