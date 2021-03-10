/*
 * @Descripttion:
 * @version:
 * @Author: huchongyuan
 * @Date: 2021-03-08 00:15:42
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-10 10:21:26
 */

import service from '@/utils/request';

export default {
  submitLogin: (data) => service({
    methods: 'POST',
    url: '/login',
    data,
  }),
};
