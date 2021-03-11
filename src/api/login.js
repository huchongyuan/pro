/*
 * @Descripttion:
 * @version:
 * @Author: huchongyuan
 * @Date: 2021-03-08 00:15:42
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-10 16:27:37
 */

import service from '@/utils/request';

export default {
  submitLogin: (data) => service({
    method: 'post',
    url: '/api/bzysxt/system/login',
    data,
  })
};
