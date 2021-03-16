/*
 * @Descripttion: 
 * @version: 
 * @Author: huchongyuan
 * @Date: 2021-03-17 00:16:55
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-17 00:17:13
 */
import service from '@/utils/request';

export default {
  query: (data) => service({
    method: 'get',
    url: '/api/bzysxt/drafter/page',
    data,
  })
};