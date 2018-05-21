<!-- 侧边栏部分组件 -->
<template>
  <div class="sidebarData">
        <div class="sidebar" role="complementary" ng-hide="layoutState &amp;&amp; layoutState.hideSidebar">
      <div class="sidebar-tabs">
        <div class="toolbar-tabs-middle">
          <a class="toolbar-btn icon-order toolbar-close" href="/profile/order" hardjump="" tooltip="我的订单" tooltip-placement="left">
              
          </a>
          <div class="toolbar-separator">
            
          </div>
          <a class="toolbar-cartbtn icon-cart toolbar-open" href="JavaScript:" template="cart">
            购物车
              
          </a>
          <div class="toolbar-separator">
            
          </div>
          <a class="toolbar-btn icon-notice toolbar-open modal-hide" href="JavaScript:" template="message" ng-class="{'focus': (activeTemplate === 'message' &amp;&amp; isSidebarOpen), 'toolbar-open': user, 'modal-hide': user}" tooltip="我的信息" tooltip-placement="left" ubt-click="392">

              
          </a>
        </div>
        <div class="toolbar-tabs-bottom">
          <div class="toolbar-btn icon-QR-code">
            <div class="dropbox toolbar-tabs-dropbox">
              <a href="http://static11.elemecdn.com/eleme/desktop/mobile/index.html" target="_blank">
                <img src="//shadow.elemecdn.com/faas/desktop/media/img/appqc.95e532.png" alt="下载手机应用">
                <p>
                下载手机应用
                </p>
                <p class="icon-QR-code-bonus">
                即可参加分享红包活动
                </p>
              </a>
            </div>
          </div>
          <a class="toolbar-btn sidebar-btn-backtop icon-top" tooltip="回到顶部" title="回到顶部" href="JavaScript:" tooltip-placement="left" style="visibility: hidden;">
            
          </a>
        </div>
      </div>
      <div class="sidebar-content"> 
      </div>
    </div>

 </div>
</template>

<script>
  export default {
}
</script>

<style>
	
</style>