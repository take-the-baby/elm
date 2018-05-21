
<template>
	<div id="listAdd">
    <a class="rstblock"  @click="goPath(dataAdd)"
     v-for='(dataAdd,index) in listDatas' v-bind:key="index+'list'">
	      <div class="rstblock-logo">
	        <img v-bind:src="dataAdd.url" width="70" height="70" :alt="dataAdd.tradeName" class="rstblock-logo-icon">
	        <span>{{dataAdd.time}}</span>
	        <div class="elemeicon elemeicon-premiumsign rstblock-logo-premiumsign" v-show="dataAdd.trademark"></div>
	      </div>
	      <div class="rstblock-content">
	        <div class="rstblock-title">{{dataAdd.tradeName}}</div>
		        <div class="starrating icon-star">
		          <span class="icon-star" style="width:96%;"></span>
		        </div>
	        <div class="rstblock-cost">{{dataAdd.dispatching}}</div>
		        <div class="rstblock-activity">
		        	<i style="background:#fff;color:#999999;border:1px solid;padding:0;"  v-show='dataAdd.keep'>
		        		保
		        	</i>
		        	<i style="background:#E75959;" v-show='dataAdd.neo'>
		        		新
		        	</i>
		          <i style="background:#fff;color:#999999;border:1px solid;padding:0;" v-show='dataAdd.ticket'>
		          	票 
		       		</i>			
		        </div>
	      </div>

  </a>
	</div>

</template>

<script>

  export default {
  	data () {
  		return{
  			listDatas: {

  				add1: {
            id:1,
            name:'shop',
            path:'/shop',
            qisong:15,
  					url: '//fuss10.elemecdn.com/2/a4/fd07830d7ff7b241cab959998eb4apng.png?imageMogr2/thumbnail/140x140/format/webp/quality/85',
  					tradeName:'廖记棒棒鸡（环球中心店）',
  					time: '20 分钟',
  					trademark:true,
  					dispatching: '配送费¥4',
  					keep: true,
  					neo:false,
  					ticket: false
  				},
					add2: {
            id:2,
            name:'shop',
            path:'/shop',
            qisong:10,
  					url: '//fuss10.elemecdn.com/9/47/39f3c04df7f5db9edb64871d127b1png.png?imageMogr2/thumbnail/140x140/format/webp/quality/85//fuss10.elemecdn.com/9/47/39f3c04df7f5db9edb64871d127b1png.png?imageMogr2/thumbnail/140x140/format/webp/quality/85',
  					tradeName:'乡村基(环球中心店)',
  					time: '22 分钟',
  					trademark:true,
  					dispatching: '配送费¥4.5',
  					keep: false,
  					neo:false,
  					ticket: true
  				},
  				add3: {
            id:3,
            name:'shop',
            path:'/shop',
            qisong:12,
  					url:'//fuss10.elemecdn.com/4/2c/ae015967cc0452aadeabd74cadd7djpeg.jpeg?imageMogr2/thumbnail/140x140/format/webp/quality/85//fuss10.elemecdn.com/4/2c/ae015967cc0452aadeabd74cadd7djpeg.jpeg?imageMogr2/thumbnail/140x140/format/webp/quality/85',
  					tradeName:'大米先生(奥克斯广场店)',
  					time: '27 分钟',
  					trademark:false,
  					dispatching: '配送费¥3',
  					keep: true,
  					neo:false,
  					ticket: true
  				},
  				add4: {
            id:4,
            name:'shop',
            path:'/shop',
            qisong:9,
  					url:'//fuss10.elemecdn.com/7/26/ca7cc407f192b56bd5d0c15b5b381png.png?imageMogr2/thumbnail/140x140/format/webp/quality/85',
  					tradeName:'张秀梅脆皮鸡饭(复城国际店)',
  					time: '35 分钟',
  					trademark:true,
  					dispatching: '配送费¥3',
  					keep: true,
  					neo:true,
  					ticket: false
  				},
          add5: {
            id:5,
            name:'shop',
            path:'/shop',
            qisong:15,
            url:'//fuss10.elemecdn.com/4/18/d5a8422b48de0eb86c0d537edc9b3png.png?imageMogr2/thumbnail/140x140/format/webp/quality/85',
            tradeName:'盒悦新概念主题餐厅',
            time: '34 分钟',
            trademark:false,
            dispatching: '配送费¥3.5',
            keep: true,
            neo:false,
            ticket:true
          },
          add6: {
            id:6,
            name:'shop',
            path:'/shop',
            qisong:14,
            url:'//fuss10.elemecdn.com/5/0f/dd31f33702cfe0490a6985ab0d5f4png.png?imageMogr2/thumbnail/140x140/format/webp/quality/85',
            tradeName:'绝味妙锡纸花甲米线（天府三街店）',
            time: '33 分钟',
            trademark:false,
            dispatching: '配送费¥3.5',
            keep: true,
            neo:false,
            ticket:false
          },
          add7: {
            id:7,
            name:'shop',
            path:'/shop',
            qisong:13,
            url:'//fuss10.elemecdn.com/3/f9/a548e01fe23cf8872a5938a9048ddjpeg.jpeg?imageMogr2/thumbnail/140x140/format/webp/quality/85',
            tradeName:'逸空间咖啡',
            time: '25 分钟',
            trademark:false,
            dispatching: '配送费¥3',
            keep: false,
            neo:true,
            ticket:false
          },
          add8: {
            id:8,
            name:'shop',
            path:'/shop',
            qisong:16,
            url:'//fuss10.elemecdn.com/2/f6/67d191012d50aff709ed75af16884jpeg.jpeg?imageMogr2/thumbnail/140x140/format/webp/quality/85',
            tradeName:'川香汇家常菜',
            time: '45 分钟',
            trademark:true,
            dispatching: '配送费¥4.5',
            keep: true,
            neo:false,
            ticket:false
          },
          add9: {
            id:9,
            name:'shop',
            path:'/shop',
            qisong:20,
            url:'//fuss10.elemecdn.com/f/af/0918d7c0e7d51c528f7527f0717eejpeg.jpeg?imageMogr2/thumbnail/140x140/format/webp/quality/85',
            tradeName:'军魂干拌冒菜',
            time: '42 分钟',
            trademark:false,
            dispatching: '配送费¥2',
            keep: false,
            neo:false,
            ticket:true
          },
          add10: {
            id:10,
            name:'shop',
            path:'/shop',
            qisong:15,
            url:'//fuss10.elemecdn.com/0/11/b0913b68de38d15d06160bef36f21jpeg.jpeg?imageMogr2/thumbnail/140x140/format/webp/quality/85',
            tradeName:'Kao！烤肉饭(复城国际店)',
            time: '36 分钟',
            trademark:true,
            dispatching: '配送费¥2.5',
            keep: true,
            neo:false,
            ticket:true
          },
          add11: {
            id:11,
            name:'shop',
            path:'/shop',
            qisong:9,
            url:'//fuss10.elemecdn.com/a/32/84c83028b4ee84c339eef766ceac7png.png?imageMogr2/thumbnail/140x140/format/webp/quality/85',
            tradeName:'必胜客宅急送(环球中心店)',
            time: '22 分钟',
            trademark:true,
            dispatching: '配送费¥4',
            keep: true,
            neo:false,
            ticket:false
          },
          add12: {
            id:12,
            name:'shop',
            path:'/shop',
            qisong:18,
            url:'//fuss10.elemecdn.com/3/9e/479ddf17474c8390b8066cdfdfdcfpng.png?imageMogr2/thumbnail/140x140/format/webp/quality/85',
            tradeName:'食其家(环球中心店)',
            time: '20 分钟',
            trademark:false,
            dispatching: '配送费¥5',
            keep: true,
            neo:true,
            ticket:false
          }
  			},
  			subscript:null
  		}
  	},
    methods: {
      goPath(dataAdd) {
        this.$router.push({
          name:'shop',
          params:{
            value:dataAdd
          }
        })
     }
    }

	}
</script>

<style>
	
</style>