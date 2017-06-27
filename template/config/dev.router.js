/**
 * 功能基于 http-proxy-middleware, 文档详见 https://github.com/chimurai/http-proxy-middleware
 *
 * Author: xiaohuajun@bilibili.com
 * Date: 2017.6.27
 */
'use strict'

class DirectProxy {
  constructor (url = '') {
    this.target = url
    this.changeOrigin = true
  }
}

const config = {}

// 自定义匹配.
const customProxy = [
  {
    target: 'http://api.live.bilibili.com',
    paths: []
  },
  {
    target: 'http://api.vc.bilibili.com',
    paths: []
  }
]

customProxy.forEach(proxy => {
  proxy.paths.forEach(path => {
    config[path] = new DirectProxy(proxy.target)
  })
})

module.exports = config
