<!--
 * @Descripttion:登录页面
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-07 22:56:54
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-10 10:35:41
-->
<template>
    <div id="login">
        <Form ref="loginForm" :model="loginForm" :label-width="80">
            <FormItem label="username" prop="username">
                <Input type="text" v-model="loginForm.username"></Input>
            </FormItem>
            <FormItem label="password" prop="password">
                <Input type="password" v-model="loginForm.password"></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('loginForm')">Submit</Button>
                <Button @click="handleReset('loginForm')" style="margin-left: 8px">Reset</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!');
        } else {
          this.$Message.error('Fail!');
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
  },
};
</script>
