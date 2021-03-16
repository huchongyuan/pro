/*
 * @Descripttion: 
 * @version: 
 * @Author: huchongyuan
 * @Date: 2021-03-17 00:21:34
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-17 00:21:55
 */
import service from '@/utils/request';

export default {
  query: (data) => service({
    method: 'get',
    url: '/api/bzysxt/normative/file/page',
    data,
  })
};