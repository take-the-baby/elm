<template>
	<div id="main">
		<div class="ng-scope">
          <!-- 地址及搜索部分 -->
          <Search></Search>
          <!-- 谁去拿外卖外面模型的部分 -->
          <TakeOut v-on:TakeOutData="TakeDelivery"></TakeOut>
      <div class="container ng-scope">
            <!-- 菜单部分 -->
              <Edit></Edit>
        <div class="place-rstbox clearfix">
          <!-- 商家信息列表 -->
          <div class="clearfix" >
            <ListAdds></ListAdds>
            <router-view></router-view>
          </div>
          
        </div>
      </div>
    </div>

	</div>

</template>

<script>
import Edit from '@/components/main/menu.vue'; // 菜单部分的组件
import Search from '@/components/main/search.vue' ;// 地址及搜索部分的组件
import TakeOut from '@/components/main/takeOut.vue'; // 谁去拿外卖外面模型的组件
import ListAdds from '@/components/main/listAdd.vue';
// import TakeDelivery from '@/components/main/takeDelivery.vue'; // 谁去抢外卖内容的组件
	export default {
		components:{
    // TakeDelivery,
    Search,
    TakeOut,
    ListAdds,
    Edit
		},
		data() {
			return{
 			  activeClass:false,
        isActived:false, // 控制遮罩层的class
        conceal:false // 判断是否让‘谁去抢外卖’的显示和隐藏
			}
      
		},
    methods:{
      TakeDelivery () { // 让制遮罩层和谁去抢外卖的子组件显示
        this.isActived = true;
        this.conceal=true;
      },   
      // getTakeDelivery () {// 让制遮罩层和谁去抢外卖的子组件隐藏
      //   this.conceal = false;
      //   this.isActived = false;
      // }

    }

		
	}
</script>

<style>
	
</style>