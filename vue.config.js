/*
 * @Descripttion:vue-cli跨域配置
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-10 16:25:12
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-10 16:26:49
 */
module.exports={
    devServer:{
        proxy:{
            "/api":{
                target:'http://47.98.203.99:80',
                changeOrigin: true,
                ws: false,
                pathRewrite: {
                '^/api': ''
                }
            }
        }
    }
}
