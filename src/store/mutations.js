/*
  这里面只用于对state的操作，不允许进行逻辑、流程、异步等操作
 */
import {
  DECREMENT, MENUDATA,MENUNUM,MENUCLEAR,BYVALUEDATA,BYVALUEMONEY
} from './types'

export default {
	[DECREMENT]: (state,data) => {
    /*state.count--;*/
    state.array.push(data);
  },
  // 把商品数据push到定义的数组
  [MENUDATA]: (state,data) => {
  	state.menuData.push(data);

  },
  // 计算商品的总价
   [MENUNUM]: (state,data) => {
  	state.menuPrice += data;
  },
  // 清空
   [MENUCLEAR]: (state,data) => {
  	state.menuData = [];
  	state.menuPrice = 0;
  },
  // 本地商品数据传输
 [BYVALUEDATA]: (state,data) => {
  	state.menuData.push(...data);
  },
  // 本地总价数据传输
 [BYVALUEMONEY]: (state,data) => {
  	state.menuPrice = data;
  }


}
