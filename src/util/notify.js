export default function (factory) {
  "use strict"
  
  if (typeof define === 'function' && define.amd) {
    define(factory)
  } else if (typeof exports !== 'undefined') {
    module.exports = factory(window, document)
  } else {
    factory(window, document)
  }
}(function (window, document, undefined) {
  'use strict'

  Vue.prototype['Notify'] = function (options) {
    return new Notify(options)
  }
  class Notify {
    _options = {
      // 标题
      title: '成功',
      // 消息体
      msg: '成功',
      // 持续时间
      duration: 2000,
      // 按钮
      buttons: [
        { label: '确定', callback: function () {} },
        { label: '取消', callback: function () {} },
      ]
    }
    constructor(options) {
      Object.assign(this.options, _options, options)
      this.init()
    }

    init () {

    }
  }
})

Vue.prototype.$notify = function (options) {
  let body = document.body
}
