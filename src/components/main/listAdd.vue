<!-- 商家店铺列表组件 -->
<template>
	<div id="listAdd">
    <a class="rstblock"  @click="goPath(dataAdd)"
     v-for='(dataAdd,index) in productListData' v-bind:key="index+'list'" v-if="dataAdd.filter==getData||dataAdd.allAdd==getData||dataAdd.all==getData">
	      <div class="rstblock-logo">
	        <img v-bind:src="dataAdd.src" width="70" height="70" :alt="dataAdd.name" class="rstblock-logo-icon">
	        <span>{{dataAdd.time}}分钟</span>
	        <div class="elemeicon elemeicon-premiumsign rstblock-logo-premiumsign" v-show="dataAdd.trademark"></div>
	      </div>
	      <div class="rstblock-content">
	        <div class="rstblock-title">{{dataAdd.name}}</div>
		        <div class="starrating icon-star">
		          <span class="icon-star" :style="dataAdd.star"></span>
		        </div>
	        <div class="rstblock-cost">配送费￥{{dataAdd.dispatching}}</div>
		        <div class="rstblock-activity">
		        	<i style="background:#fff;color:#999999;border:1px solid;padding:0;"  v-show='dataAdd.keep'>
		        		保
		        	</i>
		        	<i style="background:#E75959;" v-show='dataAdd.neo'>
		        		新
		        	</i>
		          <i style="background:#fff;color:#999999;border:1px solid;padding:0;" v-show='dataAdd.ticket'>
		          	票 
		       		</i>			
		        </div>
	      </div>

  </a>

	</div>



</template>

<script>

  export default {
    props:['getData'],
  	data () {
  		return{
  			
  			subscript:null,
        productListData:[] // 接收请求来的数据
  		}
  	},
    methods: {
      goPath(dataAdd) {
        this.$router.push({ // 路由传参给商家详情页
          path:'/shop/shopAll',
          query:{
            value:dataAdd,
            id:dataAdd.id,
          }
        })
     },
     test(){ // 页面进来执行发送请求
      this.$http.post('/index')
      .then((res) =>{ 
        this.productListData = res.data.productList;

      })
    }
    },
 created(){
    this.test();
  }
  
}
</script>

<style>
	
</style>