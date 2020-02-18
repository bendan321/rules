/**
 * 数字&非必填
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
function checkNumber (rule, value, callback) {
  if (value && !Number(value) && !Number.isInteger(Number(value))) { // 无法转换成数字并且不是0
    callback(new Error('请输入数字'));
  } else {
    callback()
  }
}
/**
 * 整数校验
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
function checkInteger (rule, value, callback) {
  if (value && !(parseInt(value, 10) === Number(value))) {
    callback(new Error('请输入整数'));
  } else {
    callback()
  }
}

/**
 * 非负数校验
 */
function checkNotNegative (rule, value, callback) {
  if (value) {
    if (isNaN(Number(value)) || value.toString().endsWith('.')) { // 不是数字
      callback(new Error('请输入数字'));
    } else { // 是数字
      if (Number(value) < 0) {
        callback(new Error('不能为负'));
      }
      callback()
    }
  } else { // 不存在
    callback() // 非必填
  }
}

/**
 * 正整数校验
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
function checkPositiveInt (rule, value, callback) {
  var reg = /^[1-9]\d*$/
  if (value && !reg.test(value)) {
    callback(new Error('请输入正整数'))
  } else {
    callback()
  }
}
/**
 * 手机号校验
 * @param rule
 * @param value
 * @param callback
 */
function checkPhone (rule, value, callback) {
  let reg = /^1[345789]\d{9}$/;
  if (value && !reg.test(value)) {
    callback(new Error('请输入正确的手机号'));
  } else {
    callback()
  }
}
/**
 * 非负整数&非必填
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
function checkNotNegInt (rule, value, callback) {
  if (value && !/^([1-9]\d*|0)$/.test(value)) {
    callback(new Error('请输入非负整数'));
    return
  }
  callback()
}
/**
 * 身份证校验
 */
function veridc (rule, value, callback) {
  if (value && /(^\d{15}&)|(^\d{18})|(^\d{17}(\d|X|x)$)/.test(value)) {
    callback(new Error('请输入正确的身份证号码'));
    return
  }
  callback()
}
/**
 * 邮箱校验
 */
function vermail (rule, value, callback) {
  if (value && /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(value)) {
    callback(new Error('请输入正确的邮箱'));
    return
  }
  callback()
}
