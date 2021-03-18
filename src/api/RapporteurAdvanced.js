/*
 * @Descripttion:起草人高级查询api接口 
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-18 16:35:17
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-18 16:36:14
 */
import service from '@/utils/request';

export default {
  query: (data) => service({
    method: 'get',
    url: '/api/bzysxt/drafter/advanced',
    data,
  })
};