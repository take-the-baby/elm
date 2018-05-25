<!-- 商品详情页评价组件 -->
<template>
    <div class="shoprate">
        <div class="commentfilter">
            <!-- ngRepeat: item in ratingTypeList -->
            <a class="commentfilter-item ng-binding ng-scope active" ng-class="{active: filter.type === item.record_type}" ng-click="select(item.record_type)" ng-repeat="item in ratingTypeList">
                全部(687)
            </a>
            <!-- end ngRepeat: item in ratingTypeList -->
            <a class="commentfilter-item ng-binding ng-scope" ng-class="{active: filter.type === item.record_type}" ng-click="select(item.record_type)" ng-repeat="item in ratingTypeList">
                满意(659)
            </a>
            <!-- end ngRepeat: item in ratingTypeList -->
            <a class="commentfilter-item ng-binding ng-scope" ng-class="{active: filter.type === item.record_type}" ng-click="select(item.record_type)" ng-repeat="item in ratingTypeList">
                不满意(28)
            </a>
            <!-- end ngRepeat: item in ratingTypeList -->
            <a class="commentfilter-item ng-binding ng-scope" ng-class="{active: filter.type === item.record_type}" ng-click="select(item.record_type)" ng-repeat="item in ratingTypeList">
                有图(99)
            </a>
            <!-- end ngRepeat: item in ratingTypeList -->
        </div>
        <!-- 评价数据 -->
        <ul class="commentlist" id="ratinglist">

            <li class="commentitem" >
                <span class="commentitem-avatar">
                    <img alt="匿**户" src="//fuss10.elemecdn.com/1/0c/4acb823b718db72d8d638f180031bjpeg.jpeg?imageMogr2/thumbnail/60x60/format/webp/quality/85"/>
                </span>
                <div class="commentitem-content">
                    <h4 class="commentitem-username ng-binding">
                        匿**户
                    </h4>
                    <div class="commentitem-main">
                        <div class="commentitem-stars rate ng-isolate-scope">
                            <p class="rate-star readonly star level5" >
                               
                                <span data-level="5">
                                    <a class="icon-star-rate active" data-level="1" href="javascript:">
                                    </a>
                                    <a class="icon-star-rate active" data-level="2" href="javascript:" >
                                    </a>
                                    <a class="icon-star-rate active" data-level="3" href="javascript:" >
                                    </a>
                                    <a class="icon-star-rate active" data-level="4" href="javascript:" >
                                    </a>
                                    <a class="icon-star-rate active" data-level="5" href="javascript:" >
                                    </a>
                                </span>

                                <span class="active rate-star-text ng-binding ng-scope" >
                                    惊喜
                                </span>
                                
                            </p>

                            <div class="rate-content simple ng-scope ng-hide">
                                <textarea class="ng-pristine ng-valid" placeholder="">
                                </textarea>
                            </div>

                        </div>
                        <span class="commentitem-time ng-binding" ng-bind="comment.time_spent_desc">
                        </span>

                    </div>

                    <div class="shoprate-itemrating shoprate-itemratinglist ng-isolate-scope" data="food" >
                        <span class="shoprate-itemratinglist-name ng-binding">
                            咖喱鸡盖饭
                        </span>
                        <div class="commentitem-stars rate ng-isolate-scope" >
                            <p class="rate-star readonly level4" >
                                <!-- ngIf: label -->
                                <span data-level="4" >
                                    <a class="icon-star-good active" data-level="1" href="javascript:" >
                                    </a>
                                    <a class="icon-star-good active" data-level="2" href="javascript:" >
                                    </a>
                                    <a class="icon-star-good active" data-level="3" href="javascript:">
                                    </a>
                                    <a class="icon-star-good active" data-level="4" href="javascript:" >
                                    </a>
                                    <a class="icon-star-good" data-level="5" href="javascript:" >
                                    </a>
                                </span>

                                <span class="active rate-star-text ng-binding ng-scope" >
                                    满意
                                </span>
                                
                            </p>
 
                            <div class="rate-content simple ng-scope ng-hide" >
                                <textarea class="ng-pristine ng-valid" placeholder="">
                                </textarea>
                            </div>

                        </div>
                        <a href="javascript:" >
                            查看商品
                        </a>

                    </div>

                    <div class="shoprate-itemrating shoprate-itemratinglist ng-isolate-scope" data="food" >
                        <span class="shoprate-itemratinglist-name ng-binding">
                            地瓜丸1份（2个）
                        </span>
                        <div class="commentitem-stars rate ng-isolate-scope" >
                            <p class="rate-star readonly level4" >
                                <!-- ngIf: label -->
                                <span data-level="4" >
                                    <a class="icon-star-good active" data-level="1" href="javascript:" >
                                    </a>
                                    <a class="icon-star-good active" data-level="2" href="javascript:">
                                    </a>
                                    <a class="icon-star-good active" data-level="3" href="javascript:" >
                                    </a>
                                    <a class="icon-star-good active" data-level="4" href="javascript:" >
                                    </a>
                                    <a class="icon-star-good" data-level="5" href="javascript:" >
                                    </a>
                                </span>
 
                                <span class="active rate-star-text ng-binding ng-scope" >
                                    满意
                                </span>
                             
                            </p>
                     
                   
                            <div class="rate-content simple ng-scope ng-hide" >
                                <textarea class="ng-pristine ng-valid" placeholder="">
                                </textarea>
                            </div>
                   
                        </div>
                        <a href="javascript:" >
                            查看商品
                        </a>
            
                    </div>
              
                    <span class="commentitem-date ng-binding">
                        2018-05-21 12:00:00
                    </span>
        
                    <div class="commentitem-reply ng-binding ng-scope">
                        <h6>
                            商家回复：
                        </h6>
                        谢谢亲的支持与肯定，㊗️您生活愉快
                    </div>
          
                </div>
            </li>
 
     


        </ul>
    </div>
</template>
<script>
    export default {

  }
</script>
<style scoped="">
</style>
