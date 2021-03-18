<!--
 * @Descripttion:标准高级查询
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-11 14:18:26
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-18 17:14:57
-->
<template>
   <div class="NormAdvancedQuery">
      <div class="NormAdvancedQueryHeader">
         <Form ref="formInline" :model="integratedQuery" :rules="ruleValidate" label-position="right" :label-width="100" inline>
            <FormItem prop="standClass" label="标准分类">
               <Select v-model="integratedQuery.standClass">
                  <Option v-for="opt in queryOptions" :value="opt.statusNo" :key="opt.statusNo">{{opt.statusDesc}}</Option>
               </Select>
            </FormItem>
            <FormItem prop="standType" label="查询类别">
               <Select v-model="integratedQuery.standType">
                  <Option v-for="opt in options" :value="opt.statusNo" :key="opt.statusNo">{{opt.statusDesc}}</Option>
               </Select>
            </FormItem>
            <FormItem prop="searchStr" label="查询关键字">
               <Input type="text" v-model="integratedQuery.searchStr" placeholder="请输入查询关键字" />
            </FormItem>
            <FormItem>
               <Button type="primary" @click="handleSubmit">查询</Button>
            </FormItem>
         </Form>
      </div>
      <div class="NormAdvancedQueryContent">
         <QueryResult ref="QueryResult" :columns="columns" />
      </div>
   </div>
</template>
<script>
import QueryResult from '@/components/QueryResult';
import NormAdvancedQuery from '@/api/NormAdvancedQuery';
export default {
   name:"NormAdvancedQuery",
   components:{
      "QueryResult":QueryResult
   },
   computed:{
      options:()=>{
         if(sessionStorage.getItem("DD004")){
            var result = JSON.parse(sessionStorage.getItem("DD004"));
            result.unshift({"statusNo":"","statusDesc":"全部"});
            return result;
         }
         return [];
      },
      queryOptions:()=>{
         if(sessionStorage.getItem("DD003")){
                var result = JSON.parse(sessionStorage.getItem("DD003"));
                return result;
            }
            return []
      }
   },
   data(){
      return {
         integratedQuery:{
            "standClass":"",
            "standType":"",
            "searchStr":""
         },
         columns:[
           {"title":"标准分类","key":"standClassStr"},
           {"title":"序号","key":"indexNo"},
           {"title":"标准编号","key":"standNo"},
           {"title":"标准名称","key":"standName"},
           {"title":"查询内容","key":"standContent"},
           {"title":"查询分类","key":"standTypeStr"},
           {"title":"备注说明","key":"standDesc"}
         ],
         ruleValidate:{
            searchStr:{ required: true, message:'请输入查询内容', trigger: 'blur' }
         },
      }
   },
   mounted(){
      
   },
   methods:{
      handleSubmit(){
         this.$refs["formInline"].validate((valid) => {
            if (valid) {
                this.$refs["QueryResult"].query(NormAdvancedQuery.query,this.integratedQuery,true);
            } 
         })
      }
   }
}
</script>
<style lang="less">
.NormAdvancedQueryHeader .ivu-form-item-content{
    width:186px;
}
</style>