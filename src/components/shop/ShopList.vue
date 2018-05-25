<!-- 商品详情页商品列表件 -->
<template>
    <div class="shoplist">

        <div class="shopmenu ng-isolate-scope">
            <div class="shopmenu-nav ng-isolate-scope">
                <a class="ng-binding ng-scope" href="javascript:" ng-class="{active: currentCategory.id === category.id}" ng-click="scrollToCategory(category)" ng-repeat="category in categorys">
                    热销
                </a>
                <a class="ng-binding ng-scope" href="javascript:" ng-class="{active: currentCategory.id === category.id}" ng-click="scrollToCategory(category)" ng-repeat="category in categorys">
                    优惠
                </a>
                <!-- end ngRepeat: category in categorys -->
                <a class="ng-binding ng-scope" href="javascript:" ng-class="{active: currentCategory.id === category.id}" ng-click="scrollToCategory(category)" ng-repeat="category in categorys">
                    精品盖饭
                </a>
                <!-- end ngRepeat: category in categorys -->
                <a class="ng-binding ng-scope" href="javascript:" ng-class="{active: currentCategory.id === category.id}" ng-click="scrollToCategory(category)" ng-repeat="category in categorys">
                    双拼套饭
                </a>
                <!-- end ngRepeat: category in categorys -->
                <a class="ng-binding ng-scope" href="javascript:" ng-class="{active: currentCategory.id === category.id}" ng-click="scrollToCategory(category)" ng-repeat="category in categorys">
                    小吃饮料
                </a>
                <!-- end ngRepeat: category in categorys -->
                <a class="ng-binding ng-scope" href="javascript:" ng-class="{active: currentCategory.id === category.id}" ng-click="scrollToCategory(category)" ng-repeat="category in categorys">
                    凑单优选
                </a>
                <!-- end ngRepeat: category in categorys -->
                <a class="ng-binding ng-scope" href="javascript:" ng-class="{active: currentCategory.id === category.id}" ng-click="scrollToCategory(category)" ng-repeat="category in categorys">
                    满减专区
                </a>
                <!-- end ngRepeat: category in categorys -->
            </div>
            <div class="shopmenu-main grid">
                <div class="ng-scope">
                    <div class="shopmenu-list clearfix ng-scope" ng-repeat="category in categorys">
                        <h3 class="shopmenu-title ng-binding">
                            热销
                            <span class="shopmenu-des ng-binding">
                                大家喜欢吃，才叫真好吃。
                            </span>
                        </h3>
                        <!-- 菜单 -->
                        <div class="shopmenu-food ng-isolate-scope" v-bind:key="index+'add'" v-for="(shopAdd,index) in productListData">
                            <span class="col-1 ng-scope">
                                <a href="javascript:">
                                    <img :alt="shopAdd.name" :src="shopAdd.src"/>
                                </a>
                            </span>
                            <div class="col-2 shopmenu-food-main">
                                <h3 class="shopmenu-food-name ui-ellipsis ng-binding">
                                    {{shopAdd.name}}
                                </h3>
                                <p class="color-mute ui-ellipsis ng-binding">
                                    {{shopAdd.introduction}}
                                </p>
                                <p>
                                    <div class="starrating icon-star ng-isolate-scope">
                                        <span :style="shopAdd.star" class="icon-star">
                                        </span>
                                    </div>
                                    <span class="color-mute ng-binding">
                                        {{shopAdd.time}}
                                    </span>
                                    <span class="color-mute ng-binding">
                                        月售{{shopAdd.add}}份
                                    </span>
                                </p>
                            </div>
                            <span class="col-3 shopmenu-food-price color-stress ng-binding">
                                {{shopAdd.price}}
                                <small class="ng-binding">
                                </small>
                            </span>
                            <span class="col-4">
                                <div class="ng-isolate-scope" food="food">
                                    <div class="ng-scope">
                                <!-- 加入购物车 -->
                                        <button @click="add(shopAdd)" class="shop-cartbutton ng-binding ng-scope" v-show="shopAddData">
                                            加入购物车
                                        </button>
                                    <!-- 加减 -->
                                        <div class="shop-cartctrl ng-scope" v-show="shopAddNum">
                                          <button class="ctrl minus" ng-click="cartItem.sub($event)">
                                            -
                                          </button>
                                          <input class="ctrl quantity ng-pristine ng-valid" min="1" >
                                          <button class="ctrl plus" ng-click="cartItem.add($event)">
                                            +
                                          </button>
                                      </div>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
                <div cart-link="cartLink" class="ng-isolate-scope" ng-hide="shopCache.id == 656683" shop-cart="">
                    <div class="shop-cart">
                      <div class="shop-cartbasket" id="shopbasket" style="top: -200px; height: auto;">
                          <div cart="shopCart" class="ng-isolate-scope" shop-groupswitcher="">

                              <div class="shop-grouphead single">

                                  <a class="icon-cart-add ng-scope" href="javascript:" >
                                  </a>

                                  <div class="shop-grouphead-row">
                                      
                                      购物车
                                      <a href="javascript:" @click="clearGroup()">
                                          [清空]
                                      </a>
                                  </div>
                              </div>
                          </div>
                          <!-- 购物车里内容 -->
                          <div class="shop-cartbasket-empty ng-scope" >

                            <p v-for="(item,index) in getData " :key="index+'num'">
                             <span> {{item.name}} </span>  
                              <span> {{item.count}} 份</span>
                              <span> ￥ {{item.price}} </span>
                            </p>
                          </div>

                      </div>
                      <div class="shop-cartfooter" ng-click="shopCart.toggleCart()">
                          <span class="icon-cart shop-carticon">

                          </span>

                          <div class="shop-cartfooter-text extras ng-binding">
                              总价¥{{this.getPrice}}
                          </div>
                          <button class="shop-cartfooter-checkout ng-binding" @click="checkout(getData,getPrice)">去结算 &gt;</button>
                      </div>
                      <div class="shop-carthelper-opener" ng-class="{show: shopCart.cartHelper.show}" ng-click="showCartHelper()">
                      </div>
                      <div cart="shopCart" class="shop-carthelper ng-isolate-scope" group="shopCart.cartHelper.group" id="shophelper" shop-cart-helper="">
                          <div class="shopcarhelper-title clearfix">
                              <span>
                                  凑一凑
                              </span>
                              <em>
                                  轻松凑满起送价
                              </em>
                              <a href="javascript:" ng-click="closeCartHelper()">
                                  [ 关闭 ]
                              </a>
                          </div>
                          <div class="shopcarthelper-container ui-scrollbar-light">

                          </div>
                      </div>
                      <div class="shop-flyitem">
                      </div>
                    </div>

                </div>

           
            </div>
        </div>

    </div>
</template>
<script>
  import store from '@/store/state';
  import { mapGetters } from 'Vuex';


  export default {

      data () {
      return{
        productListData:[], // 接收请求来的数据
        webData:'', // 本地商品数据
        webNum:0, // 本地的总价
        number:0, // 商品的单价
        shopAddData:true,// 加入购物车显示和隐藏
        shopAddNum: false,
       
      }
    },
    methods: {
      // 页面进来执行发送请求
       test(){ 
          this.$http.post('/index')
          .then((res) =>{ 
            this.productListData = res.data.productList;
            })
        },
        // 清空及本地删除购物车数据
        clearGroup() {
          this.$store.dispatch('clear');
          localStorage.removeItem('data')
        },
        // 添加到购物车 以及保存点击购买的商品
        add(val) {
          this.number = val.price;
          this.$store.dispatch('adds',val);
          this.$store.dispatch('compute',val.price);
          localStorage.setItem('data', JSON.stringify(this.getData));
        },
        // 结算提交订单（路由跳转到我的订单） 以及本地存储总价
        checkout(val,num) {  
          localStorage.setItem('money', JSON.stringify(num));

          this.$router.push({
           name: 'order',
           params:{ 
            dataValue: val,
            number: num,
           }
         })
        },
        // 本地数据传输
        byValue(web,mon) {
          this.$store.dispatch('ByValueData',web);
          this.$store.dispatch('ByValueMoney',mon);
        }

    },

    created: function () {
    
      this.test();
      // 当商品的数组为0且本地的data数据不为空把本地的值渲染到页面上
      if(this.getData.length == 0 && localStorage.getItem('data') !== null) {
       this.webData = JSON.parse(localStorage.getItem('data'));
       this.webNum = JSON.parse(localStorage.getItem('money'));
       this.byValue(this.webData,this.webNum);
        }

    },
    computed: {

      ...mapGetters([
          'count',
          'getData',
          'getPrice'
        ])
    }
  
}
</script>
<style scoped="">
</style>
