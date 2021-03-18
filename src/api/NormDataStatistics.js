/*
 * @Descripttion:标准数据统计API接口 
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-18 14:19:54
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-18 14:21:19
 */
import service from '@/utils/request';

export default {
  query: (data) => service({
    method: 'get',
    url: '/api/bzysxt/standard/database/statistical',
    data,
  })
};