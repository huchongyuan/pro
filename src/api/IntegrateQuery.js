/*
 * @Descripttion:标准综合查询API接口
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-16 10:43:41
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-16 11:18:57
 */
import service from '@/utils/request';

export default {
  query: (data) => service({
    method: 'get',
    url: '/api/bzysxt/standard/integrated/page',
    data,
  })
};
