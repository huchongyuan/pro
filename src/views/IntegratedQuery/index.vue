<!--
 * @Descripttion:标准综合查询
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-11 14:15:50
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-16 13:12:00
-->
<template>
   <div class="integratedQuery">
      <div class="integratedQueryHeader">
         <Form ref="formInline" :model="integratedQuery" label-position="right" :label-width="100" inline>
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
               <Input type="text" v-model="integratedQuery.searchStr" placeholder="请输入查询关键字"></Input>
            </FormItem>
            <FormItem>
               <Button type="primary" @click="handleSubmit">查询</Button>
            </FormItem>
         </Form>
      </div>
      <div class="integratedQueryContent">
         <QueryResult ref="QueryResult" :columns="columns" />
      </div>
   </div>
</template>
<script>
import QueryResult from '@/components/QueryResult';
import IntegratedQuery from '@/api/IntegrateQuery';
export default {
   name:"IntegratedQuery",
   components:{
      "QueryResult":QueryResult
   },
   computed:{
      options:()=>{
         if(sessionStorage.getItem("DD004")){
            var result = JSON.parse(sessionStorage.getItem("DD004"));
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
           {"title":"序号","key":"indexNo"},
           {"title":"标准编号","key":"standNo"},
           {"title":"标准名称","key":"standName"},
           {
              "title":"操作",
              "render":(h, params) => {
                  return h('div', [
                     h('a', {
                           on: {
                              click: () => {
                                 let {standName,standNo} = params.rows;
                                // this.$router.push()
                              }
                           }
                        }, '查看详情')
                     ]);
               }
            }
         ]
      }
   },
   mounted(){
      // 默认查询一次;
      this.$set(this.integratedQuery,'standClass',this.queryOptions[0]['statusNo']);
      this.handleSubmit();
      
   },
   methods:{
      handleSubmit(){
         this.$refs["QueryResult"].query(IntegratedQuery.query,this.integratedQuery);
      }
   }
}
</script>
<style lang="less">
.integratedQueryHeader .ivu-form-item-content{
    width:186px;
}
</style>