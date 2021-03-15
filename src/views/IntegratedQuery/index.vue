<!--
 * @Descripttion:标准综合查询
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-11 14:15:50
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-15 10:15:11
-->
<template>
   <div class="integratedQuery">
      <div class="integratedQueryHeader">
         <Form ref="formInline" :model="integratedQuery" label-position="right" :label-width="100" inline>
            <FormItem prop="category" label="标准分类">
               <Select v-model="integratedQuery.category">
                  <Option value="1">旅游标准</Option>
                  <Option value="2">文化标准</Option>
                  <Option value="3">其他标准</Option>
               </Select>
            </FormItem>
            <FormItem prop="queryType" label="查询类别">
               <Select v-model="integratedQuery.queryType">
                  <Option value="1">标准基础信息查询</Option>
                  <Option value="2">标准内容查询</Option>
                  <Option value="3">术语和定义查询</Option>
                  <Option value="4">起草单位查询</Option>
                  <Option value="5">起草人查询</Option>
                  <Option value="6">规范性引用文件查询</Option>
                  <Option value="7">参考文献查询</Option>
               </Select>
            </FormItem>
            <FormItem prop="param" label="查询关键字">
               <Input type="text" v-model="integratedQuery.param" placeholder="请输入查询关键字"></Input>
            </FormItem>
            <FormItem>
               <Button type="primary" @click="handleSubmit">查询</Button>
            </FormItem>
         </Form>
      </div>
      <div class="integratedQueryContent">
         <QueryResult />
      </div>
   </div>
</template>
<script>
import QueryResult from '@/components/QueryResult';
export default {
   name:"IntegratedQuery",
   components:{
      "QueryResult":QueryResult
   },
   data(){
      return {
         integratedQuery:{
            "cataegory":"",
            "queryType":"",
            "param":""
         }
      }
   },
   methods:{
      handleSubmit(){
         
      }
   }
}
</script>
<style lang="less">
.integratedQueryHeader .ivu-form-item-content{
    width:186px;
}
</style>