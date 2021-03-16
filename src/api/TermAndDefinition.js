/*
 * @Descripttion:术语和定义
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-16 23:58:59
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-16 23:59:36
 */
import service from '@/utils/request';

export default {
  query: (data) => service({
    method: 'get',
    url: '/api/bzysxt/standard/term/page',
    data,
  })
};
