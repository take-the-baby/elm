<!-- 我的订单组件 -->
<template>
    <div class="goods">
        <div class="ng-scope" role="main">
            <div class="profile-container container" page-name="order" page-title="近三个月订单" profile-container="">
                <div class="clearfix">
                    <div class="location" location="" role="navigation">
                        <span>
                            当前位置:
                        </span>
                        <span class="location-current">
                            <a class="inherit ng-binding">
                                成都环球中心天堂洲际大饭店
                            </a>
                        </span>
                        <span class="location-change">
                            <a hardjump="" href="/home" ng-href="/home" ubt-click="400">
                                [切换地址]
                            </a>
                            <ul class="dropbox location-dropbox" ubt-visit="398">
                                <li class="arrow">
                                </li>
                                <li class="changelocation">
                                    <a hardjump="" href="/home" ng-href="/home">
                                        修改收货地址
                                        <span class="icon-location">
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </span>
                        <span ng-transclude="">
                            <i class="icon-arrow-right ng-scope">
                            </i>
                            <span class="ng-binding ng-scope">
                                近三个月订单
                            </span>
                        </span>
                    </div>
                    <div search-input="">
                    </div>
                </div>
                <ul class="profile-sidebar" profile-sidebar="" role="navigation">
                    <li class="profile-sidebar-section">
                        <h2 class="profile-sidebar-sectiontitle">
                            <i class="icon-line-home">
                            </i>
                            <a href="/profile">
                                个人中心
                            </a>
                        </h2>
                    </li>
                    <li class="profile-sidebar-section">
                        <h2 class="profile-sidebar-sectiontitle">
                            <i class="icon-line-order">
                            </i>
                            我的订单
                        </h2>
                        <ul>
                            <li class="active">
                                <a href="/profile/order">
                                    近三个月订单
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="profile-sidebar-section">
                        <h2 class="profile-sidebar-sectiontitle">
                            <i class="icon-yen">
                            </i>
                            我的资产
                        </h2>
                        <ul>
                            <li>
                                <a href="/profile/hongbao">
                                    我的红包
                                </a>
                            </li>
                            <li>
                                <a href="/profile/balance">
                                    账户余额
                                </a>
                            </li>
                            <li>
                                <a href="/profile/points">
                                    我的金币
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="profile-sidebar-section">
                        <h2 class="profile-sidebar-sectiontitle">
                            <i class="icon-line-profile">
                            </i>
                            我的资料
                        </h2>
                        <ul>
                            <li>
                                <a href="/profile/info">
                                    个人资料
                                </a>
                            </li>
                            <li>
                                <a href="/profile/address">
                                    地址管理
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="profile-sidebar-section">
                        <h2 class="profile-sidebar-sectiontitle">
                            <a href="/profile/favor">
                                <i class="icon-order-favor">
                                </i>
                                我的收藏
                            </a>
                        </h2>
                    </li>
                </ul>
                <div class="profile-panel" role="main">
                    <h3 class="profile-paneltitle ng-scope" ng-if="pageTitleVisible">
                        <span class="ng-binding" ng-bind="pageTitle">
                            近三个月订单
                        </span>
                        <span class="subtitle ng-binding">
                        </span>
                    </h3>
                    <div class="profile-panelcontent">
                        <div class="order-fetchtakeout ng-scope ng-isolate-scope" show-fetch-takeout-dialog="">
                            <img src="//shadow.elemecdn.com/faas/desktop/media/img/takeout.408a87.png">
                            </img>
                        </div>
                        <div class="order-extra ng-scope">
                            <a href="#">
                                热门问题
                            </a>
                            <a href="#" >
                                随时关注订单状态
                            </a>
                        </div>
                        <div class="loading ng-binding ng-isolate-scope ng-hide" loading="" v-show="this.orderNum == 0">
                            <img alt="正在加载" src="//shadow.elemecdn.com/faas/desktop/media/img/profile-loading.4984fa.gif">
                                正在载入数据...
                            </img>
                        </div>
                <!-- 订单数据 -->
                			<h4  v-show="this.orderNum !== 0" >总价：￥{{this.orderNum}}</h4>
                			<h4 v-if="this.orderUser !== null" >用户：{{this.orderUser.user}}</h4>
                			<h4 v-if="this.orderUser !== null"  >电话：{{this.orderUser.call}}</h4>
                			<h4 v-if="this.orderUser !== null" >地址：{{this.orderUser.add}}</h4>
                        <table class="order-list ng-scope" v-show="this.orderNum !== 0">
                            <thead>
                                <tr>
                                    <th>
                                        下单时间
                                    </th>
                                    <th class="order-list-infoth">
                                        订单内容
                                    </th>
                                    <th>
                                    </th>
                                    <th>
                                        支付金额（元）
                                    </th>
                                    <th>
                                        状态
                                    </th>
                                    <th>
                                        操作
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                </tr>
     
                                <tr class="timeline" v-for="(item,index) in orderData" :key="index+'order'">
                                    <td class="ordertimeline-time">
                                        <p class="ng-binding">
                                            {{item.nowTime}}
                                        </p>
                          
                                        <i class="ordertimeline-time-icon icon-uniE65E finish ng-scope">
                                        </i>
                                
                                    </td>
                                    <td class="ordertimeline-avatar">
                                        <a href="" >
                                            <img :src="item.src" />
                                        </a>
                                    </td>
                                    <td class="ordertimeline-info">
                                        <h3 class="ordertimeline-title">
                                            <a class="ng-binding" href="#" >
                                            </a>
                                        
                                        </h3>
                                        <p class="ordertimeline-info-food">
                                            <a href="#" >
                                                <span class="ordertimeline-food ng-binding" ng-bind="item.product">
                                                    {{item.name}} {{item.count}}份
                                                </span>
                                          
                                                <span class="ordertimeline-info-productnum ng-binding">
                                                    {{item.count}}
                                                </span>
                                                <span>
                                                    个菜品
                                                </span>
                                            </a>
                                        </p>
                                        <p>
                                            订单号:
                                            <a class="ng-binding" :bind="item.call" >
                                                {{item.call}}
                                            </a>
                                        </p>
                                    </td>
                                    <td class="ordertimeline-amount">
                                        <h3 class="ordertimeline-title ordertimeline-price ui-arial ng-binding">
                                            {{item.price}}
                                        </h3>
                                    </td>
                                    <td class="ordertimeline-status">
                                        <h3 class="ng-binding end" >
                                            订单已完成
                                        </h3>

                                    </td>
                                    <td class="ordertimeline-handle">
                                        <a class="ordertimeline-handle-detail" href="#" >
                                            订单详情
                                        </a>

                                        <a class="ordertimeline-handle-a ng-scope" href="javascript:" >
                                            再来一份
                                        </a>

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
               <!-- 遮罩层 -->
        <div v-bind:class="{'shade':isActived}"></div>
        					<!-- 用户弹框 -->
           <user-data  v-if="conceal"  @byValue='valueData' @close="shut"></user-data>
    </div>
      
</template>
<script>
  import UserData from '@/components/order/UserData';
      export default { 
    components:{
      UserData
    },
    	data () {
    		return {
    			orderData:[], // 购物车里的数据
    			orderNum:0, // 总价
    			orderUser:null, // 用户数据
    			isActived:false, // 控制 遮罩层 
    			conceal:false // 控制用户弹窗
    		}
    	},
    	methods:{
    		// 如果有商品传过来会弹用户框
    		text() {
    			 this.isActived = true;
    			 this.conceal = true;
    		},
    		// 关闭用户框
    		shut() {
    			this.isActived = false;
    			this.conceal = false;
    		},
    		// 把用户数据渲染到
    		valueData(val) {
    			this.orderUser = val;
    		}
    	},

    created: function() {
    		 
    		// 判断路由传参过来是否有值，有的话进行本地保存
    		if (this.$route.params.dataValue !== undefined) {
    			this.orderData = this.$route.params.dataValue
    			this.orderNum = this. $route.params.number
    			localStorage.setItem('orderData', JSON.stringify(this.orderData));
                localStorage.setItem('orderMoney', JSON.stringify(this.orderNum));
                this.text();
                localStorage.removeItem('userData') // 如果传过来有值把最开始的本地的用户的数据进行清除
    		}
    		// 判断本地保存的订单 数据及用户数据里是否有值，有的话通过渲染到页面
    		if(localStorage.getItem('orderData') !== null) {
		       this.orderData = JSON.parse(localStorage.getItem('orderData'));
		       this.orderNum = JSON.parse(localStorage.getItem('orderMoney'));
		       
    		}
               // 本地有值的情况下，在页面刷新或关闭网页重新打开后把值重新渲染到网页上
    		if (localStorage.getItem('userData') !== null) {
    			this.orderUser = JSON.parse(localStorage.getItem('userData'));
    		}
	}
}
</script>
<style>
</style>
