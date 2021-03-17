/*
 * @Descripttion:基于axios的请求封装
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-08 00:15:18
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-17 15:06:29
 */
import axios from 'axios';
import qs from "qs";
const service = axios.create({
  baseURL: '',
  timeout: 1000 * 30, // 超时时间
  withCredentials: false, // 跨域请求是否需要凭证
  responseType: 'json',
  responseEncoding: 'utf8',
});
// 请求拦截(请求发出前处理请求)
service.interceptors.request.use(config=> {
  config.method === 'post' ? (config.data = config['contentType']?JSON.stringify({...config.data}):qs.stringify({ ...config.data })):config.params = { ...config.data };
  config.headers['Content-Type'] = config['contentType']?config['contentType']:'application/x-www-form-urlencoded';
  return config;
}, (error) => {
  Promise.reject(error);
});

// 响应拦截
service.interceptors.response.use((response) => {
   return response.data;
}, (error) => {
  Promise.reject(error);
});

export default service;
