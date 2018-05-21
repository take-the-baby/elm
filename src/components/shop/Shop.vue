<!-- 商品详情页组件 -->
<template>
  <div class="shop">
      <!-- 商品详情页头部 -->
    <ShopHeader></ShopHeader>
      <!-- 商品详情页导航 -->
    <ShopNav></ShopNav>
  </div>

</template>
<script>
  import ShopHeader from '@/components/shop/ShopHeader'
  import ShopNav from '@/components/shop/ShopNav'
    export default {
      components:{
        ShopHeader,
        ShopNav
      },
      name: 'shop',

}
</script>
<style scoped="">
</style>
