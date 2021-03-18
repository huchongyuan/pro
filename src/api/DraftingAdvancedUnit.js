/*
 * @Descripttion:起草单位高级查询 
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-18 15:28:12
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-18 16:19:34
 */
import service from '@/utils/request';
export default {
  query: (data) => service({
    method: 'get',
    url: '/api/bzysxt/draft/unit/advanced',
    data,
  })
};
