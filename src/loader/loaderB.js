module.exports = function (src) {
  src = src.toUpperCase()
 // 直接返回转换后的字符串会报语法错误，import后转换成可以使用的字符串
 return `module.exports = '${src}'`
}

