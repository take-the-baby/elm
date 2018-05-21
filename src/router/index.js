import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/components/layout/Layout'
import Main from '@/components/main/main'
import Goods from '@/components/goods/Goods'
import League from '@/components/league/league'
import Service from '@/components/service/Service'
import Shop from '@/components/shop/Shop'
Vue.use(Router)

export default new Router({
    mode:'history',
    base:'/elm',
    // redirect: '/index/index',
    routes: [
      {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: '/index',
      children:[
          {
          	path:'/index',
          	name:'index',
          	component:Main,
          },
          {
            path:'/shop',
            name:'shop',
            component:Shop
          },      
          {
          	path:'/goods',
          	name:'goods',
          	component:Goods
          },
          {
            path:'/league',
            name:'league',
            component:League
          },
          {
            path:'/service',
            name:'service',
            component:Service
          }
        ]
    }
  ]
})
