/**
 * 统一配置项目的请求
 * 使用qs.stringify解决axios跨域问题
 * 配置axios请求类型为post时，使用qs.stringify来实现跨域访问，以及每次请求携带token
 * 配置请求成功后res，实现诸如登录失败，登录超时，账户密码错误和请求错误等拦截器
 */
import axios from 'axios'
import qs from 'qs'
import { Modal, Message } from 'iview'
import router from './router/index'

// axios 配置
axios.defaults.timeout = httpUrl.timeout; //请求超时时间
axios.defaults.baseURL = process.env.NODE_ENV === "development" ? httpUrl.useMock?'':httpUrl.devUrl: httpUrl.baseUrl; //根据不同的环境，切换请求的地址
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.withCredentials = true; //axios跨域携带cookie的配置

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      config.data = qs.stringify(config.data);
    } else if (config.method === 'get') {

    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });

// http response 拦截器
/**
 * 拦截器也可以判定返回的response成功时的状态码进行拦截
 */
axios.interceptors.response.use(
  res => {
    //根据各个项目情况,此处需要修改
    if (res.data.code) {
      return res;
    } else {
      //如果请求不成果，则做对应的处理
      return res;
    }
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 500:
          // Message.error(error.response.request.responseURL + '服务器无响应')
      }
    }
  });

export default axios;
