/**
 * 定义vue的全局方法/属性、全局实例方法、全局过滤器、全局指令
 * 该文件会不断的添加公共方法、指令和过滤器
 * 文件需要各位不断维护下去
 * 请做必要的注释
 */
export default {
  install(Vue, options) {

    //添加全局实例方法 'Vue.prototype.xxx'

    //滚动条到顶部
    Vue.prototype.scrollTop = function(el, from = 0, to, duration = 500) {
      if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = (
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function(callback) {
            return window.setTimeout(callback, 1000 / 60);
          }
        );
      }
      const difference = Math.abs(from - to);
      const step = Math.ceil(difference / duration * 50);

      function scroll(start, end, step) {
        if (start === end) return;

        let d = (start + step > end) ? end : start + step;
        if (start > end) {
          d = (start - step < end) ? end : start - step;
        }
        if (el === window) {
          window.scrollTo(d, d);
        } else {
          el.scrollTop = d;
        }
        window.requestAnimationFrame(() => scroll(d, end, step));
      }
      scroll(from, to, step);
    }

    //格式化价格
    Vue.prototype.formatPrice = function(s, n = 2) {
      /*
       * 参数说明：
       * s：要格式化的数字
       * n：保留几位小数
       * */
      n = n > 0 && n <= 20 ? n : 2;
      s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
      var l = s.split(".")[0].split("").reverse(),
        r = s.split(".")[1];
      var t = "";
      for (var i = 0; i < l.length; i++) {
        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
      }
      return t.split("").reverse().join("") + "." + r;
    }

    //添加全局方法/属性 
    //一个叫做myGlobalMethod的全局方法
    Vue.myGlobalMethod = function() {
      //逻辑...
    }

    //添加全局指令
    //添加全局的drag指令
    Vue.directive('drag', function(el) {
      el.onmousedown = function(e) {
        //获取鼠标点击处分别与div左边和上边的距离：鼠标位置-div位置
        var divx = e.clientX - el.offsetLeft;
        var divy = e.clientY - el.offsetTop;
        //包含在onmousedown里，表示点击后才移动，为防止鼠标移出div，使用document.onmousemove
        document.onmousemove = function(e) {
          //获取移动后div的位置：鼠标位置-divx/divy
          var l = e.clientX - divx;
          var t = e.clientY - divy;
          el.style.left = l + 'px';
          el.style.top = t + 'px';
        }
        document.onmouseup = function(e) {
          document.onmousemove = null;
          document.onmouseup = null;
        }
      }
    })

    //添加全局过滤器
    //时间格式过滤器，输入内容是Number或者Date对象，输入是YYYY-MM-DD HH-MM-SS
    Vue.filter('formatTime',function (value) {
    	Date.prototype.Format = function(fmt){
    		var o ={
    			'M+':this.getMonth()+1,//月份
    			'd+':this.getDate(),//日
    			'h+':this.getHours(),//小时
    			'm+':this.getMinutes(),//分,
    			's+':this.getSeconds(),//秒,
    			'q+':Math.floor((this.getMonth()+3)/3),//季度
    			'S':this.getMilliseconds()//毫秒
    		};

    		if (/(y+)/.test(fmt)) 
    			fmt = fmt.replace(RegExp.$1,(this.getFullYear()+'').substr(4-RegExp.$1.length));
    		for (var k in o)
    			if (new RegExp("("+k+")").test(fmt)) 
    				fmt = fmt.replace(RegExp.$1,(RegExp.$1.length == 1)?(o[k]):(('00'+o[k]).substr((''+o[k]).length)))
    			return fmt;

    	}
    	return new Date(value).Format('yyyy-MM-dd hh:mm:ss')
    })


  }
}
