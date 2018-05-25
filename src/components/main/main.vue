<template>
	<div id="main">
		<div class="ng-scope">
          <!-- 地址及搜索部分 -->
          <search></search>
          <!-- 谁去拿外卖外面模型的部分 -->
          <take-out></take-out>
      <div class="container ng-scope">
            <!-- 菜单部分 -->
              <Edit v-on:setData='ByValue'></Edit>
        <div class="place-rstbox clearfix">
          <!-- 商家信息列表 -->
          <div class="clearfix" >
            <list-adds :getData='temporary'></list-adds>
            <router-view></router-view>
          </div>
          
        </div>
      </div>
    </div>

	</div>

</template>

<script>
import Edit from '@/components/main/Menu'; // 菜单部分的组件
import Search from '@/components/main/Search' ;// 地址及搜索部分的组件
import TakeOut from '@/components/main/TakeOut'; // 谁去拿外卖外面模型的组件
import ListAdds from '@/components/main/ListAdd';
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
        temporary:"全部商家" // 默认值
			}
      
		},
    methods:{    
       ByValue (val) { // 把子组件里接收传过来的值
          this.temporary = val 
       }

    }
		
	}
</script>

<style>
	
</style>