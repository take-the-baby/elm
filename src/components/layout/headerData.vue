<!-- 头部 导航部分组件-->
<template>
  <div class="header">
    <header class="topbar" role="navigation">
          <div class="container clearfix">
            <h1>
              <a href="/" hardjump="" class="topbar-logo icon-logo">
                <span>
                  饿了么
                </span>
              </a>
            </h1>
              <a @click="goPath(item)" v-for="(item,index) in navRouter" :key="index+'nav'" class="topbar-item cooperation">
                {{item.cname}}
              </a>
            <nav class="topbar-nav">
              <a class="topbar-nav-link" target="_blank" href="//h5.ele.me/service/agreement/#HEAEDER_SHOW=1">
                规则中心
              </a>
              <div class="topbar-nav-link">
                <i class="topbar-nav-icon icon-mobile"></i>
                  手机应用
                <div class="dropbox topbar-mobile-dropbox">
                  <span>
                    扫一扫, 手机订餐更方便
                  </span> 
                  <img src="//shadow.elemecdn.com/faas/desktop/media/img/appqc.95e532.png" class="topbar-nav-qrcode" alt="扫一扫下载饿了么手机 App">
                </div>
              </div>
              <div topbar-profilebox="">
                <div class="topbar-profilebox">
                  <span class="topbar-profilebox-avatar icon-profile" ></span> 
                  <span>
                    <a  target="_blank" href="//h5.ele.me/login/#redirect=https%3A%2F%2Fwww.ele.me%2Fplace%2Fwm3zhxkucs0j%3Flatitude%3D30.802382%26longitude%3D103.915279">
                      登录/注册
                    </a>
                  </span> 
                  <span class="topbar-profilebox-wrapper ">
                    <span class="topbar-profilebox-username ">
                    </span> 
                    <span class="topbar-profilebox-btn icon-arrow-down ">
                    </span>
                    <div class="dropbox topbar-profilebox-dropbox">
                      <a class="icon-profile" href="/profile" hardjump="">
                        个人中心
                      </a> 
                      <a class="icon-star" href="/profile/favor" hardjump="">
                        我的收藏
                      </a> 
                      <a class="icon-location" href="/profile/address" hardjump="">
                        我的地址
                      </a> 
                      <a class="icon-setting" href="/profile/security" hardjump="">
                        安全设置
                      </a> 
                      <a class="icon-logout" href="JavaScript:" >
                        退出登录
                      </a>
                    </div>
                  </span>
                </div>
              </div>
            </nav>
          </div>
        </header>
 </div>
</template>

<script>
  export default {
    data() {
      return {
        navRouter:[{
          name:'index',
          path:'/index',
          cname:'首页'
        },{
          name:'goods',
          path:'/goods',
          cname:'我的订单'
        },{
          name:'league',
          path:'/league',
          cname:'加盟合作'
        },{
          name:'service',
          path:'/service',
          cname:'我的客服'
        }]
      }
    },
    methods: {
     goPath(item) {
        this.$router.push(item.path)
     }
    }
  }
	
</script>

<style>
	
</style>