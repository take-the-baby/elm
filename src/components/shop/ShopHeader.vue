<!-- 商品详情页头部组件 -->
<template>
    <div class="shopHeader">
        <div class="shopguide ng-isolate-scope" data="shop" >
            <div class="container">
                <div class="shopguide-info">

                        <img :alt="$route.params.value.tradeName" itemprop="image" :src="$route.params.value.url">
                            <div class="shopguide-info-wrapper">
                                <div>
                                    <h1 class="ng-binding" itemprop="name"  title="$route.params.value.tradeName">
                                        {{$route.params.value.tradeName}} 
                                    </h1>
                                </div>
                                <p class="shopguide-info-rate">
                                    <div class="starrating icon-star ng-isolate-scope" rate-star="" rating="shop.rating" title="评分5.0分">
                                        <span class="icon-star" style="width: 100%;">
                                        </span>
                                    </div>
                                    (
                                    <a class="ng-binding" href="/shop/159228632/rate">
                                        888
                                    </a>
                                    )
                                </p>
                                <p>
                                  
                                </p>
                            </div>
                            <div class="shopguide-info-extra">
                                <ul>
                                    <li class="shopguide-extra-item shopguide-extra-compete ng-scope">
                                        <div>
                                            <h2 class="color-stress ng-binding" itemprop="ratingValue">
                                                5.0
                                            </h2>
                                            <meta content="5" itemprop="bestRating">
                                                <meta content="897" itemprop="reviewCount">
                                                    <p>
                                                        综合评价
                                                        <br>
                                                            <span class="color-mute ng-binding">
                                                                高于周边商家
                                                            </span>
                                                            <span class="color-stress ng-binding ng-scope" >
                                                                50.0%
                                                            </span>
                                                          
                                                        </br>
                                                    </p>
                                                </meta>
                                            </meta>
                                        </div>
                                        <div>
                                            <p>
                                                服务态度
                                                <div class="starrating icon-star ng-isolate-scope" rate-star="" rating="shopRatingScore.service_score" title="评分5.0分">
                                                    <span class="icon-star" style="width: 100%;">
                                                    </span>
                                                </div>
                                                <span class="color-stress ng-binding">
                                                    5.0分
                                                </span>
                                            </p>
                                            <p>
                                                菜品评价
                                                <div class="starrating icon-star ng-isolate-scope" rate-star="" rating="shopRatingScore.food_score" title="评分4.7分">
                                                    <span class="icon-star" style="width: 93.5816%;">
                                                    </span>
                                                </div>
                                                <span class="color-stress ng-binding">
                                                    4.7分
                                                </span>
                                            </p>
                                        </div>
                                    </li>

                                    <li class="shopguide-extra-item address">
                                        <p>
                                            <span class="label">
                                                商家地址：
                                            </span>
                                            <span class="ng-binding">
                                                四川省成都市高新区天府大道北段1700号B1C27
                                            </span>
                                            
                                        </p>
                                        <p>
                                            <span class="label">
                                                营业时间：
                                            </span>
                                            <span class="ng-binding" itemprop="openingHours">
                                                10:00-20:40
                                            </span>
                                        </p>
                                    </li>
                                    <li class="shopguide-extra-item">
                                        <p class="shopguide-extra-delivery">
                                            由
                                            <span class="ng-binding">
                                                {{$route.params.value.tradeName}}
                                            </span>
                                            提供配送服务
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </img>
                    </meta>
                </div>
                <div class="shopguide-server">
                    <span class="">
                        <em>
                            起送价
                        </em>
                        <em class="shopguide-server-value ng-binding">
                             {{$route.params.value.qisong}}元
                        </em>
                    </span>
                    <span class="">
                        <em>
                            配送费
                        </em>
                        <em class="shopguide-server-value ng-binding">
                            {{$route.params.value.dispatching}}
                        </em>
                    </span>
                    <span class="" >
                        <em>
                            平均送达速度
                        </em>
                        <em class="shopguide-server-value ng-binding">
                            {{$route.params.value.time}}
                        </em>
                    </span>
                </div>
                <a class="shopguide-favor" href="javascript:" ng-click="favor()">

                    <i class="icon-favorite ng-scope">
                    </i>
                    <span class="ng-scope" >
                        收藏
                    </span>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {


}
</script>
<style scoped="">
</style>
