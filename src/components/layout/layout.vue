<template>
	<div class="layout-main">
		<header-data></header-data>
		<sidebar-data></sidebar-data>
		<router-view></router-view>
		<footer-data></footer-data>
            <!-- 遮罩层 -->
    <div v-bind:class="{'shade':isActived}"></div>
    <!-- 谁去抢外卖 -->
    <take-delivery v-on:getData="getTakeDelivery" v-if="conceal"></take-delivery>
	</div>
</template>

<script>
import HeaderData from '@/components/layout/HeaderData'
import FooterData from '@/components/layout/FooterData'
import SidebarData from '@/components/layout/SidebarData'
import TakeDelivery from '@/components/main/TakeDelivery' // 谁去抢外卖内容的组件
// import TakeOut from '@/components/main/takeOut.vue'; // 谁去拿外卖外面模型的组件
	export default {
		data (){
			return {
				activeClass:false,
			  isActived:false, // 控制遮罩层的class
			  conceal:false // 判断是否让‘谁去抢外卖’的显示和隐藏
			}
		},
		methods:{
      // TakeDelivery () { // 让制遮罩层和谁去抢外卖的子组件显示
      //   this.isActived = true;
      //   this.conceal=true;
      // },   
       getTakeDelivery () {// 让制遮罩层和谁去抢外卖的子组件隐藏
        this.conceal = false;
        this.isActived = false;
      } 
		},
		components:{
			HeaderData,
			SidebarData,
			TakeDelivery,
			// TakeOut,
			FooterData
		}
	}
</script>

<style>
</style>