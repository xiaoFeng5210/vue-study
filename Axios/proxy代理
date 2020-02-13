// 找到module.exports = { },dev.proxyTable里
proxyTable: {
'/api': {
   target: 'http://localhost:8080',
   // 把请求地址做个替换
   pathRewrite: {
      '^/api': '/static/mock'
   }
}
}
