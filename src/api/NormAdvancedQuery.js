/*
 * @Descripttion:标准基础信息高级查询API 
 * @version:1.0.0 
 * @Author: huchongyuan
 * @Date: 2021-03-18 17:05:29
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-18 17:06:23
 */
import service from '@/utils/request';

export default {
  query: (data) => service({
    method: 'get',
    url: '/api/bzysxt/standard/dir/advanced',
    data,
  })
};
