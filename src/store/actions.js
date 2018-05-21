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
}
