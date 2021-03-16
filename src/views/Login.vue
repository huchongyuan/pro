<!--
 * @Descripttion:登录页面
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-07 22:56:54
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-16 11:02:41
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
            // 查询数据字典并且缓存到sessionStorage中;
            LoginRequest.queryAllDis({}).then((resp)=>{
              console.log(resp);
              if(resp && resp.code ==="1000"){
                var result = resp.body;
                this.setSessionStorage("DD001",JSON.stringify(result["DD001"]));
                this.setSessionStorage("DD002",JSON.stringify(result["DD002"]));
                this.setSessionStorage("DD003",JSON.stringify(result["DD003"]));
                this.setSessionStorage("DD004",JSON.stringify(result["DD004"]));
                this.$router.push({"name":"IntegratedQuery"})
              }
            });
          });
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
    setSessionStorage(key,value){
      sessionStorage.setItem(key,value);
    }
  },
};
</script>
<style lang="less">
#login{
  width:800px;
  margin:50px auto 0 auto;
}
</style>
