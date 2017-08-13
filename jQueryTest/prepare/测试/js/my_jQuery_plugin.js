/*
 扩展jQuery的工具方法 : $.extend(object)
   min(a, b) : 返回较小的值
   max(c, d) : 返回较大的值
   leftTrim() : 去掉字符串左边的空格
   rightTrim() : 去掉字符串右边的空格
 */

//正则
/*
 ^   匹配字符串开始
 \s  匹配空格
 +   匹配一次或者多次
 $   匹配字符串的末尾
 */
//扩展$
//扩展到$工具方法里
$.extend({
    //自定义方法 找最小值 和最大值
    min:function (a,b) {
        return (a<b)?a:b
    },
    max :function (a,b) {
        return(a>b)?a:b
    },
    //定义一个清除左右两边空白字符串的方法
    leftTrim:function(strToBeTrimed){
      return strToBeTrimed.replace(/^\s+/,'');
    },
    rightTrim:function(strToBeTrimed){
       return trToBeTrimed.replace(/\s+$/,'')
    }

})
/*$.extend({
  min: function (a, b) {
    return (a < b) ? a : b
  },
  max: function (a, b) {
    return (a > b) ? a : b
  },
  leftTrim: function (strToBeTrimed) {
    return strToBeTrimed.replace(/^\s+/, '')
  },
  rightTrim: function (strToBeTrimed) {
    return strToBeTrimed.replace(/\s+$/, '')
  }
})*/


//扩展 $('#id').XXXXX
//$.fn.extend(object)
// checkAll() : 全选
// unCheckAll() : 全不选
// reverseCheck() : 全反选
$.fn.extend({
  checkAll: function () {
    // console.log('checkAll')
    this.prop('checked', true)
  },
  unCheckAll: function () {
    this.prop('checked', false)
  },
  reverseCheck: function () {
    this.each(function () {
      this.checked = !this.checked
    })
  }
})





