/**
 * mock用来模拟后端数据
 */
// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;

// mock一组数据
// const produceNewsData = function() {
//     let articles = [];
//     for (let i = 0; i < 100; i++) {
//         let newArticleObject = {
//             title: Random.csentence(5, 30), //  Random.csentence( min, max )
//             thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
//             author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
//             date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
//         }
//         articles.push(newArticleObject)
//     }
 
//     return {
//         articles: articles,
//         code:true
//     }
// }
 
// Mock.mock( url, post/get , 返回的数据)；
// Mock.mock('/news/index', 'post', produceNewsData);


const productListData = function() {
  let data = []; // 创建一个数组来接收
  let className = ['简餐','米粉面馆','麻辣烫','盖浇饭','香锅砂锅','饺子馄饨','包子粥店','汉堡','黄焖鸡米饭','烧腊饭','煲仔饭','生煎锅贴','咖喱饭',]
  let stars = ['width:96%','width:56%','width:76%','width:86%','width:66%'];

  for (let i = 0; i < 12; i++) {
    let newData = {
      all: '全部',
      allAdd:'全部商家',
      count:1, // 份数
      name: Random.ctitle(3, 5), // 商店名字 
      filter:Random.pick(className), // 随机生成相关类型的商店
      src: Random.dataImage('70x70'), //商店链接图片 
      add: Random.integer(100,1000), // 销量
      time: Random.integer(15,50),// 配送时间
      star: Random.pick(stars),// 星星
      dispatching: Random.integer(3,10),// 配送费
      ticket: Random.boolean(),// 票
      keep: Random.boolean(), // 保
      neo: Random.boolean(), // 新
      trademark: Random.boolean(), // 名牌
      introduction: Random.csentence(5,7),// 商家介绍||菜品介绍
      qisong: Random.integer(0,20), // 起送价
      price:Random.integer(1,50), //商品的价格
      nowTime:Random.now(), // 发送数据的时间
      call:Random.float(0), // 订单号
      id: new Date().getTime(),  // 通过时间转化的到一个唯一数
    }
    data.push(newData)
  }
  return {
    productList: data,
    code: true
  }
}
Mock.mock('/index','post',productListData);