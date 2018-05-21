<!-- 地址及搜索的组件 -->
<template>

      <div class="container clearfix ">
        <div class="location">
          <span>当前位置:</span>
          <span class="location-current">
            <a class="inherit ng-binding" href="#">
            成都环球中心天堂洲际大饭店</a>
          </span>
          <span class="location-change">
            <a hardjump="" href="/home">[切换地址]</a>
            <ul class="dropbox location-dropbox">
              <li class="arrow"></li>
              <li class="changelocation">
                <a href="/home">修改收货地址
                  <span class="icon-location"></span>
                </a>
              </li>
            </ul>
          </span>
          <span></span>
        </div>
        <div class="place-search">
          <a class="place-search-btn icon-search" title="搜索商家或美食"></a>
          <label for="globalsearch">搜索商家或美食</label>
          <input id="globalsearch" class="place-search-input ng-pristine ng-valid" placeholder="搜索商家,美食...">
          <div class="searchbox">
	            <div class="searchbox-list searchbox-rstlist ng-hide">
	              <ul>      
	              </ul>
	            </div>
	            <div class="searchbox-list searchbox-foodlist ng-hide">
	              <ul></ul>
	            </div>
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