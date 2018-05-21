<!-- 菜单栏的主要栏目的子组件 (一级菜单)-->
<template>
  <div>

        <div class="excavator container">
          <div class="excavator-filter ng-scope">
            <span class="excavator-filter-name">商家分类:</span>
             <!-- 一级菜单 -->
          <a  href="#"  class='excavator-filter-item' 
            v-for='(dataMenu,key,index) in menuDatas' 
            v-on:click="addClassFun1(index,$event)" 
            v-bind:class='{active:index == subscript}'
            :key="index+'menu'" 
           >
              {{dataMenu.data}}
          </a>
          <!-- 二级菜单 -->
          <!-- v-show -->
          <div class="excavator-filter-subbox" v-show="targetValue">
              <a href="#" class='excavator-filter-item' v-for="(item,index) in this.datas.get(targetValue)" v-bind:key='index' v-on:click="addClassFun2(index)" 
                v-bind:class='{focus:index===subscript2}'>
                {{item}}
              </a> 
          </div>
        
          </div>
        </div>

</div>
</template>

<script>

  export default {
    data () {
      return {
        menuDatas: {  // 一级菜单数据
          data1: {  
            data: "全部商家",  
            ifAdd: 0  
          },  
          data2: {  
            data: "美食",  
            ifAdd: 1  
          },  
          data3: {  
            data: "快餐便当",  
            ifAdd: 2  
          },
          data4: {  
            data: "特色菜系",  
            ifAdd: 3  
          },
          data5: {  
            data: "异国料理",  
            ifAdd: 4  
          },
          data6: {  
            data: "小吃夜宵",  
            ifAdd: 5  
          },
          data7: {  
            data: "甜品饮品",  
            ifAdd: 6  
          },
          data8: {  
            data: "果蔬生鲜",  
            ifAdd: 7  
          },
          data9: {  
            data: "商店超市",  
            ifAdd: 8  
          },
           data10: {  
            data: "鲜花绿植",  
            ifAdd: 9  
          },
           data11: {  
            data: "医药健康",  
            ifAdd: 10  
          },
           data12: {  
            data: "早餐",  
            ifAdd: 11  
          },
           data13: {  
            data: "午餐",  
            ifAdd: 12  
          },
           data14: {  
            data: "下午茶",  
            ifAdd: 13  
          },
           data15: {  
            data: "晚餐",  
            ifAdd: 14  
          },
           data16: {  
            data: "夜宵",  
            ifAdd: 15  
          }
        },
        datas:new Map([ // es6的map写法，上面也用map的get取值
          ['全部商家',['全部','简餐便当','地方菜系','小吃炸串','面食粥点','香锅冒菜','汉堡披萨','日韩料理','轻食西餐']],
          ['美食',['全部','简餐便当','地方菜系','小吃炸串','面食粥点','香锅冒菜','汉堡披萨','日韩料理','轻食西餐']],
          ['快餐便当',['全部','简餐','米粉面馆','麻辣烫','盖浇饭','香锅砂锅','饺子馄饨','包子粥店','汉堡','黄焖鸡米饭','烧腊饭','煲仔饭','生煎锅贴','咖喱饭']],
          ['特色菜系',['全部','川湘菜','火锅烤鱼','海鲜','其它菜系','粤菜','江浙菜','新疆菜','西北菜','东北菜','云南菜']],
          ['异国料理',['全部','日韩料理','西餐','披萨意面','东南亚菜']],
          ['小吃夜宵',['全部','地方小吃','小龙虾','烧烤','鸭脖卤味','炸鸡炸串','零食']],
          ['甜品饮品',['全部','甜品','面包蛋糕','奶茶果汁','咖啡']],
          ['果蔬生鲜',['全部','水果','蔬菜豆品','肉禽蛋品','海鲜水产']],
          ['商店超市',['全部','大型超市','便利店','名酒坊','休闲零食','饮料冰品','粮油副食','茶行','美妆母婴','水站','冷冻速食','宠物超市']],
          ['鲜花绿植',['全部','鲜花','绿植']],
          ['医药健康',['全部','药店','成人用品']],
          ['早餐',['全部','米粉面馆','奶茶果汁','饺子馄饨','包子粥店','汉堡','面包','生煎锅贴']],
          ['午餐',['全部','简餐','盖浇饭','包子粥店','汉堡']],
          ['下午茶',['全部','炸鸡小吃','甜品','面包蛋糕','奶茶果汁','水果','鸭脖卤味','咖啡']],
          ['晚餐',['全部','简餐','川湘菜','地方小吃','米粉面馆','奶茶果汁','麻辣烫','盖浇饭','炸鸡炸串','汉堡','披萨意面']],
          ['夜宵',['全部','地方小吃','米粉面馆','小龙虾','烧烤','麻辣烫','炸鸡炸串','汉堡']]
      ]),
        
       subscript:"0",
       subscript2:"0",
       targetValue:''

        }
      },
    methods: {
      addClassFun1 (index,e) { // 一级菜单的方法 
        this.targetValue = e.currentTarget.innerText;
        this. subscript = index;
        if (this.targetValue !== '') { // 当用户点击1级菜单是立刻让2级菜单跳转到‘全部’
          this.subscript2 = 0;
          // this.$http.post('/components/menu.vue').then((val)=>{
          //     console.log('')
          // });
        }
      },
      addClassFun2 (index) { // 二级菜单的方法 
        this. subscript2 = index;
      }

    }
    
  }
	
</script>

<style>
	
</style>