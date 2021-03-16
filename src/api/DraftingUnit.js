/*
 * @Descripttion:起草单位基本查询 
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-17 00:08:21
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-17 00:09:09
 */
import service from '@/utils/request';

export default {
  query: (data) => service({
    method: 'get',
    url: '/api/bzysxt/draft/unit/page',
    data,
  })
};