/*
 * @Descripttion:全局通用的api
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-17 10:39:36
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-17 11:01:27
 */
import service from '@/utils/request';

export default {
  // 查询统计数据:
  queryStatic: (data) => service({
    method: 'get',
    url: '/api/bzysxt/standard/integrated/statistical',
    data,
  })
};
