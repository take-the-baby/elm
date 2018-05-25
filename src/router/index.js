import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/components/layout/Layout'
import Main from '@/components/main/Main'
import Order from '@/components/order/Order'
import League from '@/components/league/league'
import Service from '@/components/service/Service'
import Shop from '@/components/shop/Shop'
import ShopList from '@/components/shop/ShopList'
import ShopRate from '@/components/shop/ShopRate'
import ShopInfo from '@/components/shop/ShopInfo'
Vue.use(Router)

export default new Router({
    mode:'history',
    // base:'/elm',
    // redirect: '/index/index',
    routes: [
      { //根路径
        path: '/',
        name: 'Layout',
        component: Layout,
        redirect: 'index',
        children:[
          { // 有内容显示的主首页
            path:'index',
            name:'index',
            component:Main
          },      
          { // 我的订单
            path:'order',
            name:'order',
            component:Order
          },
          { // 入驻商家
            path:'league',
            name:'league',
            component:League
          },
          { // 我的客服
            path:'service',
            name:'service',
            component:Service
          }
        ]
    },
       { // 商品的子网页
          path:'/shop',
          name:'shop',
          component:Shop,
          children:[

            { // 商品详情列表
              path:'shopAll',
              name:'shopAll',
              component:ShopList,
            },
            { // 评价
              path:'rate',
              name:'rate',
              component:ShopRate,
            },
            { // 商家资质
              path:'info',
              name:'info',
              component:ShopInfo,
            }
          ]
        }
  ]
})