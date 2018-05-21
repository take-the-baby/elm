<!-- 商品详情页导航组件 -->
<template>
    <div class="shopnav">
        <div class="container clearfix">
            <div class="shopnav-left">

                <a @click='goPath(food,index)' title="导航" v-for="(food,index) in navData" :key="index+'nav'" class="shopnav-tab" :class='{active:index == subscript}'>
                	 {{food.cname}}
                </a>

                <span class="shopnav-filter ng-scope">
                    <a class="active" href="javascript:" >
                        默认排序
                    </a>
                    <a class="" >
                        评分
                        <i class="icon-uniE02D">
                        </i>
                    </a>
                    <a class="" href="javascript:" >
                        销量
                        <i class="icon-uniE02D">
                        </i>
                    </a>
                    <a href="javascript:" >
                        价格
                        <i class="icon-uniE02D" >
                        </i>
                        <i class="icon-uniE02C ng-hide" >
                        </i>
                    </a>
                    <span>
                        <a class="shopnav-filter-display icon-grid active" href="javascript:"  title="以网格形式显示菜单">
                        </a>
                        <a class="shopnav-filter-display icon-list" href="javascript:" title="以列表形式显示菜单">
                        </a>
                    </span>
                </span>

            </div>
            <div class="shopnav-search">
                <form class="place-search ng-pristine ng-valid" role="search">
                    <button class="place-search-btn icon-search"  title="搜索商家或美食" >
                    </button>
                    <label for="globalsearch">
                        搜索商家或美食
                    </label>
                    <input autocomplete="" class="place-search-input ng-pristine ng-valid" id="globalsearch" placeholder="搜索商家,美食..."/>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
  	    data() {
      return {
       navData:[{
          name:'shopAll',
          path:'/shopAll',
          cname:'所有商品'
        	},{
          name:'rate',
          path:'/rate',
          cname:'评价'
        	},{
          name:'info',
          path:'/info',
          cname:'商家资质'
        	}],
        	subscript:0
      }
    },
    methods: {
     goPath(food,index) {
     		this.subscript = index;
        this.$router.push(food.path);
     }
    }
}
</script>
<style scoped="">
</style>
