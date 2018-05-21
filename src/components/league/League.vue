<template>
	<div class="league">
		<ul class="app"><li><img src="https://fuss10.elemecdn.com/e/bf/c48e4f5fa82a7fd2ab35918057ec3png.png" class="img"><div class="content"><h1 class="content-title">商家入驻</h1><p class="content-desc">上百万餐饮、商超便利店、鲜花蛋糕等商家已入驻</p></div><a href="https://napos-kaidian.faas.ele.me/" class="button">
      立即申请
    </a><!----></li><li><img src="https://fuss10.elemecdn.com/0/0e/901a6598095193f1f5f8e83f2febepng.png" class="img"><div class="content"><h1 class="content-title">配送服务加盟</h1><p class="content-desc">日均260万物流订单，商机无限</p></div><a href="https://lpdh5.faas.ele.me/agency/" class="button">
      立即申请
    </a><!----></li><li><img src="https://fuss10.elemecdn.com/9/52/cbe1c341d6e85b678d6adc60948a1png.png" class="img"><div class="content"><h1 class="content-title">城市代理申请</h1><p class="content-desc">请联系 daili@ele.me</p></div><a href="https://daili.ele.me/agent" class="button">
      立即申请
    </a><!----></li><li><img src="https://fuss10.elemecdn.com/7/41/77491e9e83798773a41fb5dd8e47cpng.png" class="img"><div class="content"><h1 class="content-title">未来餐厅代理</h1><p class="content-desc">未来餐厅，共赢未来</p></div><a href="http://erp.delimont.cn/api/apply" class="button">
      立即申请
    </a><!----></li><li><img src="https://fuss10.elemecdn.com/4/73/9372a5666015ed5aa066995b3021apng.png" class="img"><div class="content"><h1 class="content-title">媒体公关合作</h1><p class="content-desc">请联系 pr@ele.me</p></div><!----><!----></li><li><img src="https://fuss10.elemecdn.com/2/27/1d1c8a3cd08d2b63930287432e7f9png.png" class="img"><div class="content"><h1 class="content-title">品牌广告合作</h1><p class="content-desc">请联系 marketing_coop@ele.me</p></div><!----><!----></li><li><img src="https://fuss10.elemecdn.com/b/ae/bb7d521fe1b6d0eb6dc43330672fbsvg.svg" class="img"><div class="content"><h1 class="content-title">用户开放平台合作</h1><p class="content-desc">请联系 openapi.coop@ele.me</p></div><!----><!----></li><li><img src="https://fuss10.elemecdn.com/2/5b/289921843222b87f517d903426cd8png.png" class="img"><div class="content"><h1 class="content-title">商家开放平台合作</h1><p class="content-desc">开放平台技术咨询请联系 openapi.merchant@ele.me，商务接洽请联系 sm.merchant@ele.me</p></div><!----><!----></li></ul>
	</div>
</template>
<script>
	export default {}

</script>
<style scoped>
	@media screen and (max-width: 960px) {
    .app {
        margin-top:.266667rem;
        margin-top: 2.666667vw;
        background-color: #fff;
        border-top: 1px solid #e1e1e1;
        border-bottom: 1px solid #e1e1e1
    }

    li {
        display: -webkit-flex;
        display: flex;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        -webkit-align-items: center;
        align-items: center;
        margin-left: .4rem;
        margin-left: 4vw;
        padding: .426667rem .4rem .426667rem 0;
        padding: 4.266667vw 4vw 4.266667vw 0
    }

    li:not(:last-child) {
        border-bottom: 1px solid #eee
    }

    .img {
        width: .853333rem;
        width: 8.533333vw;
        height: .853333rem;
        height: 8.533333vw;
        margin-right: .266667rem;
        margin-right: 2.666667vw
    }

    .content {
        -webkit-flex: 1;
        flex: 1
    }

    .content-title {
        font-size: .426667rem;
        color: #333;
        margin: 0;
        font-weight: 400
    }

    .content-desc {
        margin: 0;
        font-size: .293333rem;
        color: #999
    }

    .button {
        width: 2.08rem;
        width: 20.8vw;
        line-height: .72rem;
        line-height: 7.2vw;
        border: 1px solid currentColor;
        margin-left: .266667rem;
        margin-left: 2.666667vw;
        border-radius: .053333rem;
        border-radius: .533333vw;
        color: #3190e8;
        text-align: center;
        font-size: .373333rem
    }

    .button[disabled] {
        color: #ddd
    }
}

@media (min-width: 960px) {
    .app {
        margin:30px;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap
    }

    li {
        position: relative;
        width: 24%;
        height: 5.333333rem;
        height: 53.333333vw;
        background-color: #fff;
        margin: 0 1.25% .4rem 0;
        margin: 0 1.25% 4vw 0;
        padding: 0 .266667rem;
        padding: 0 2.666667vw;
        text-align: center
    }

    li:nth-child(4n) {
        margin-right: 0
    }

    .img {
        width: 1.333333rem;
        width: 13.333333vw;
        height: 1.333333rem;
        height: 13.333333vw;
        margin-top: .8rem;
        margin-top: 8vw
    }

    .content {
        margin-top: 24px
    }

    .content-title {
        font-size: 22px;
        line-height: 22px;
        color: #333;
        margin: 0
    }

    .content-desc {
        font-size: 14px;
        color: #999;
        margin: 10px 0 30px
    }

    .button {
        position: absolute;
        bottom: .4rem;
        bottom: 4vw;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        color: #3190e8;
        width: 120px;
        font-size: 14px;
        border: 1px solid currentColor;
        border-radius: .04rem;
        border-radius: .4vw;
        line-height: .666667rem;
        line-height: 6.666667vw;
        text-align: center
    }

    .button[disabled] {
        color: #ddd
    }
}

</style>