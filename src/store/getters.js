/*
  这里面定义所有页面需要的展示数据，具体的内容根据具体组件要求来定义
 */
export default { 
	//返回计数器
  count: (state) => {
    return state.array;
  },
  // 返回商品数据的数组
  getData: (state) => {
  	return state.menuData;
  },
  // 返回商品的总价
  getPrice: (state) => {
  	return state.menuPrice;
  }
}
