<!-- 商品详情页组件 -->
<template>
  <div class="shop">
      <!-- 商品详情页导航 -->
    <shop-header-data></shop-header-data>
      <!-- 商品详情页头部内容 -->
    <shop-header></shop-header>
      <!-- 商品详情页商品导航 -->
    <shop-nav></shop-nav>
        <!-- 主要内容区域 -->
     <shop-Menu></shop-Menu>
      <!-- 页脚 -->
    <footer-data></footer-data>
  </div>

</template>
<script>
  import ShopHeader from '@/components/shop/ShopHeader'
  import ShopHeaderData from '@/components/shop/ShopHeaderData'
  import ShopNav from '@/components/shop/ShopNav'
  import ShopMenu from '@/components/shop/ShopMenu'
  import FooterData from '@/components/layout/FooterData'
    export default {
      components:{
        ShopHeader,
        ShopHeaderData,
        ShopMenu,
        FooterData,
        ShopNav
      },
      name: 'shop',

}
</script>
<style scoped="">
</style>
