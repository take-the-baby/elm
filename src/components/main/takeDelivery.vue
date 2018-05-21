<!-- 谁去抢外卖的组件 -->
<template>
	    <div class="fetchtakeout-dialog ng-scope" >
      <div class="fetchtakeout-dialog-header">
        <a href="JavaScript:" class="fetchtakeout-close icon-close" v-on:click="hide" >
          
        </a>
        <h3>
          谁去拿外卖
        </h3>
      </div>
      <div class="fetchtakeout-dialog-body">
        <div class="fetchtakeout-wrapper">
          <h2 class="fetchtakeout-badge">
            
          </h2>
          <button class="fetchtakeout-btn">
            
          </button>
          <div class="fetchtakeout-rules">
            随机到最小数字的人去拿外卖
          </div>
          <div class="fetchtakeout-emptytext">
            ↓ Start
          </div>
          <ul class="fetchtakeout-list">

              
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
	export default {

	methods: {
	 hide () {
      this.$emit('getData') // 子组件调父组件的方法
    }

	}
}
</script>

<style>
	
</style>