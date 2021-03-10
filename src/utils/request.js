/*
 * @Descripttion:基于axios的请求封装
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-08 00:15:18
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-10 10:43:48
 */
import axios from 'axios';
const service = axios.create({
  baseURL: 'http://www.baidu.com',
  timeout: 1000 * 30, // 超时时间
  withCredentials: false, // 跨域请求是否需要凭证
  responseType: 'json',
  responseEncoding: 'utf8',
});
// 请求拦截(请求发出前处理请求)
service.interceptors.request.use( config => {
  config.method === 'POST' ? config.data = JSON.stringify({ ...config.data }) : config.params = { ...config.data };
  config.headers['Content-Type'] = 'application/json';
  return config;
}, (error) => {
  Promise.reject(error);
});

// 响应拦截
service.interceptors.response.use((response) => {

}, (error) => {

});

export default service;
