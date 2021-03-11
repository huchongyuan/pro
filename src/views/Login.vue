<!--
 * @Descripttion:登录页面
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-07 22:56:54
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-11 13:54:37
-->
<template>
    <div id="login">
        <Form ref="loginForm" :model="loginForm" :label-width="80">
            <FormItem label="用户名" prop="userName">
                <Input type="text" v-model="loginForm.userName"></Input>
            </FormItem>
            <FormItem label="密码" prop="password">
                <Input type="password" v-model="loginForm.password"></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('loginForm')">登录</Button>
                <Button @click="handleReset('loginForm')" style="margin-left: 8px">重置</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
import LoginRequest  from '@/api/login';
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        userName: '',
        password: '',
      },
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          LoginRequest.submitLogin(this.loginForm).then(data=>{
            console.log(data);
          });
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
  },
};
</script>
<style lang="less">
#login{
  width:800px;
  margin:50px auto 0 auto;
}
</style>
