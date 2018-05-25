<!-- 商品公告组件 -->
<template>
    <div class="shopmain-right ng-isolate-scope" data="shop" shop-bulletin="">
        <div class="shopbulletin">
            <div class="shopbulletin-section">
                <h3 class="shopbulletin-section-title">
                    商家公告
                </h3>
                <p class="shopbulletin-content ng-binding">
                    为了更好为顾客出产品。每天中午11：30-13：00不提供开票，若要开票。可以11点前提前下单，感谢你的支持，补开票可以电话联系15114039035
                </p>
                <div class="shopbulletin-delivery">
                    <h4>
                        配送说明：
                    </h4>
                    <p class="ng-binding">
                         配送费3元
                    </p>
                </div>
                <ul class="shopbulletin-supports">

                    <li class="ng-binding ng-scope" ng-repeat="support in shop.supports">
                        <span class="ng-binding" ng-style="{'background-color': '#' + support.icon_color}" style="background-color: rgb(153, 153, 153);">
                            票
                        </span>
                        该商家支持开发票，开票订单金额1元起，请在下单时填写好发票抬头
                    </li>
                  
                </ul>
                <a class="shopcomplaint" href="javascript:" ng-click="testLogin()">
                    举报商家
                </a>
            </div>
            <div class="dialog" dialog="complaintDialog" role="dialog" style="display: none;">
                <div class="dialog-close icon-close">
                </div>
                <div class="dialog-content" ng-transclude="">
                    <h5 class="complaint-title ng-scope">
                        举报商家
                    </h5>
                    <form class="ng-scope ng-pristine ng-valid" ng-submit="complaint()">
                        <label class="complaint-field">
                            <textarea class="shopcomplaint-textarea ng-pristine ng-valid" cols="40" ng-model="complaintObj.text" rows="6">
                            </textarea>
                        </label>
                        <div class="complaint-field">
                            <button class="btn-primary" type="submit">
                                提交
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

</template>
<script>

export default {
  name:'ShopNotice'
}
</script>
<style scoped="">
</style>
