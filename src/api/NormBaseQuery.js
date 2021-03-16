/*
 * @Descripttion:标准基础信息查询API
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-16 13:59:10
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-16 14:00:07
 */
import service from '@/utils/request';

export default {
  query: (data) => service({
    method: 'get',
    url: '/api/bzysxt/standard/dir/page',
    data,
  })
};