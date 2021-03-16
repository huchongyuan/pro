/*
 * @Descripttion:标准内容查询 
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-16 23:22:50
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-16 23:23:28
 */
import service from '@/utils/request';

export default {
  query: (data) => service({
    method: 'get',
    url: '/api/bzysxt/standard/dir/page',
    data,
  })
};