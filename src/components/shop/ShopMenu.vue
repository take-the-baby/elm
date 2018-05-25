<!-- 商品详情页组件 -->
<template>
    <div class="shopMenu">
        <div class="shopmain clearfix container ng-scope">
            <!-- 菜品信息 -->
            <router-view></router-view>
            <!-- 商家公告 -->
          <shop-notice></shop-notice>
        </div>
    </div>
</template>
<script>
    import ShopNotice from '@/components/shop/ShopNotice'

export default {
  name:'ShopMenu',
  components:{
    ShopNotice
  }

}
</script>
<style scoped="">
</style>
