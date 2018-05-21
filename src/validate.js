/**
 * 统一的自定义表单验证规则 
 * 是否必填或者长度等验证，请在组件内部书写
 */
export default {
	/**
	 * [表单的自定义验证]
	 * @Author   lzm
	 * @DateTime 2018-05-11
	 * @param    {[Object]}   rule     [这是iview自动传入的规则对象]
   * @param    {[String]}   value    [输入的值]
   * @param    {Function} callback [验证成功或失败的回调函数]
	 * @return   {[type]}            [description]
	 */
	CheckChinese: (rule, value, callback) => {
    let reg = /^[\u4E00-\u9FA5]{1,10}$/;
    if (!reg.test(value)) {
      callback(new Error('只能全为中文'))
    } else {
      callback();
    }
  },

  CheckNumber: (rule, value, callback) => {
    let reg = /\D/g;
    if (reg.test(value)) {
      callback(new Error('只能输入数字'))
    } else {
      callback();
    }
  },

  CheckIp: (rule, value, callback) => {
    let reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
    if (!reg.test(value)) {
      callback(new Error('输入正确IP地址'))
    } else {
      callback();
    }
  },

  CheckPosNumber: (rule, value, callback) => {
    console.log(value)
    let reg = /\D/g;
    if (reg.test(value) || value <= 0) {
      callback(new Error('只能输入大于0的数'))
    } else {
      callback();
    }
  },

  CheckPhone: (rule, value, callback) => {
    let reg = /^1\d{10}$/g;
    if (!reg.test(value)) {
      callback(new Error('请输入正确的手机号'))
    } else {
      callback();
    }
  },

  CheckWebsite: (rule, value, callback) => {
    let reg = /^((https?|ftp|news):\/\/)?([a-z]([a-z0-9\-]*[\.。])+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel)|(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&]*)?)?(#[a-z][a-z0-9_]*)?$/g;

    if (!reg.test(value) && value !== '') {
      callback(new Error('请输入正确的网址'))
    } else {
      callback();
    }
  },

  CheckEmail(rule, value, callback) {
    let reg = /^[A-z0-9_]{3,12}@[A-z0-9]{2,12}(\.com|\.cn|\.com\.cn)$/g;

    if (!value) {
      callback();
      return;
    }

    if (!reg.test(value)) {
      callback(new Error('请输入正确的邮箱'))
    } else {
      callback();
    }
  },
  
}
