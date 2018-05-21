<template>
<div class="goods">
<div  role="main" class="ng-scope">
	<div class="profile-container container" profile-container="" page-name="order" page-title="近三个月订单">
		<div class="clearfix">
			<div class="location"  role="navigation" location="">
				<span>
					当前位置:
				</span> 
				<span class="location-current">
					<a class="inherit ng-binding" >
						成都环球中心天堂洲际大饭店
					</a>
				</span> 
				<span class="location-change">
					<a ng-href="/home" ubt-click="400" hardjump="" href="/home">
						[切换地址]
					</a>
					<ul class="dropbox location-dropbox" ubt-visit="398">
						<li class="arrow">
							
						</li>
						<li class="changelocation">
							<a ng-href="/home" hardjump="" href="/home">
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
		<ul class="profile-sidebar" role="navigation" profile-sidebar="">
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
					<li  class="active">
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
	<h3 ng-if="pageTitleVisible" class="profile-paneltitle ng-scope">
		<span ng-bind="pageTitle" class="ng-binding">
			近三个月订单
		</span> 
		<span class="subtitle ng-binding">
			
		</span>
	</h3><div class="profile-panelcontent">
		<div class="order-fetchtakeout ng-scope ng-isolate-scope" show-fetch-takeout-dialog="">
			<img src="//shadow.elemecdn.com/faas/desktop/media/img/takeout.408a87.png">
		</div>
		<div class="order-extra ng-scope">
			<a href="/support/question/hotissue" target="_blank">
			热门问题
		</a> 
		<a href="//static11.elemecdn.com/eleme/desktop/mobile/index.html" target="_blank">
			随时关注订单状态
		</a>
	</div>
	<div class="loading ng-binding ng-isolate-scope ng-hide" loading="" >
		<img  src="//shadow.elemecdn.com/faas/desktop/media/img/profile-loading.4984fa.gif" alt="正在加载" >
			正在载入数据...
	</div>
	</div>
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
