/*
 * @Descripttion:标准修订数据统计API接口 
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-18 14:43:02
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-18 14:46:50
 */
import service from '@/utils/request';

export default {
  query: (data) => service({
    method: 'get',
    url: '/api/bzysxt/standard/revise/statistical',
    data,
  })
};
