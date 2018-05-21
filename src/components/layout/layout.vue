<template>
	<div class="layout-main">
		<HeaderData></HeaderData>
		<SidebarData></SidebarData>
		<router-view></router-view>
		<FooterData></FooterData>
            <!-- 遮罩层 -->
    <div v-bind:class="{'shade':isActived}"></div>
    <!-- 谁去抢外卖 -->
    <TakeDelivery v-on:getData="getTakeDelivery" v-if="conceal"></TakeDelivery>
	</div>
</template>

<script>
import HeaderData from '@/components/layout/headerData'
import FooterData from '@/components/layout/footerData'
import SidebarData from '@/components/layout/sidebarData'
import TakeDelivery from '@/components/main/takeDelivery' // 谁去抢外卖内容的组件
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