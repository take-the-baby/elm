<!-- 谁去拿外卖外形模块组件 -->
<template>
  <div class="place-tab clearfix container ng-scope">
        <div class="place-fetchtakeout ng-isolate-scope">
          <img src="//shadow.elemecdn.com/faas/desktop/media/img/takeout.408a87.png" alt="谁去拿外卖" v-on:click="takeDelivery">
        </div>
  </div>

</template>

<script>

  export default {
  	methods: {
  		takeDelivery () { // 子组件调父组件方法
  			this.$emit('takeOutData');
       
  		}
  		
  	}
	}
</script>

<style>
	
</style>