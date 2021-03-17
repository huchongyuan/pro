<!--
 * @Descripttion:术语和定义
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-11 14:18:26
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-17 16:24:29
-->
<template>
    <div class="TermAndDefinition">
      <div class="TermAndDefinitionHeader">
         <Form ref="formInline" label-position="right" :label-width="100" inline>
            <QueryParam ref="QueryParam" />
            <FormItem prop="term" label="术语和定义" class="last">
               <Input type="text" v-model="term" placeholder="请输入术语和定义"></Input>
            </FormItem>
            <FormItem>
               <Button type="primary" class="leftBtn" @click="query">查询</Button>
            </FormItem>
         </Form>
      </div>
      <div class="TermAndDefinitionContent">  
         <QueryResult ref="QueryResult" :columns="columns" />
      </div>
      <statisticsModal ref="statisticsModal" />
      <PdfModal ref="PdfModal" />
      <ModifyModal ref="ModifyModal" />
    </div>
</template>
<script>
import QueryResult from '@/components/QueryResult';
import QueryParam from '@/components/QueryParam';
import TermAndDefinition from '@/api/TermAndDefinition';
import statisticsModal from '@/components/statisticsModal';
import PdfModal from '@/components/PdfModal';
import ModifyModal from '@/components/ModifyModal';
export default {
   name:"TermAndDefinition",
    data(){
      return {
         "term":"",
         "columns":[
            {"title":"序号","key":"indexNo"},
            {"title":"中文","key":"technicalTermName"},
            {"title":"英文","key":"technicalTermEngName"},
            {"title":"解释","key":"technicalTermDef"},
             {"title":"标准号","key":"standNo",
               "render":(h, params) => {
                  var value = params["row"]["standNo"]
                  return h('div', [
                     h('a', {
                           on: {
                              click: () => {
                                 this.$refs["statisticsModal"].open({
                                    "standNo":value
                                 });
                              }
                           }
                        }, value)
                     ]);
               }
            },
            {"title":"标准名称","key":"standName",
               "render":(h, params) => {
                  let value = params["row"]["standName"];
                  let fjUrl = params["row"]["fjUrl"];
                  return h('div', [
                     h('a', {
                           on: {
                              click: () => {
                                 this.$refs["PdfModal"].open(fjUrl);
                              }
                           }
                        }, value)
                     ]);
               }
            },
            {"title":"标准修订",
               "render":(h, params) => {
                   let {table,tableId,standNo,standName,technicalTermDef} = params['row'];
                  return h('div', [
                     h('a', {
                           on: {
                              click: () => {
                                 this.$refs["ModifyModal"].open({
                                     "table":table,
                                     "tableId":tableId,
                                     "standNo":standNo,
                                     "standName":standName,
                                     "otherInfo":technicalTermDef
                                  });
                              }
                           }
                        }, '标准修订')
                     ]);
               }
            }
         ]
      }
   },
   mounted(){
      // 获取查询参数;
      if(this.$route.params.standName){
         let {standName} = this.$route.params;
         this.$refs["QueryParam"].setParam({standName})
      }
      if(this.$route.params.standNo){
        let {standNo} = this.$route.params;
        this.$refs["QueryParam"].setParam({standNo})
      }
      this.query();
   },
   components:{
      "QueryResult":QueryResult,
      "QueryParam":QueryParam,
      "statisticsModal":statisticsModal,
      "PdfModal":PdfModal,
      "ModifyModal":ModifyModal
   },
   methods:{
      query(){
         let queryParam = this.$refs["QueryParam"].getParam();
         let term = this.term;
         this.$refs["QueryResult"].query(TermAndDefinition.query,{term,...queryParam},true);
      }
   }
}
</script>
<style lang="less">
.TermAndDefinition{
   .TermAndDefinitionHeader{
      height:65px;
      .ivu-form-item{
         float:left;
      }
      .last.ivu-form-item{
         margin-left:85px;
         margin-right:0px;
      }
   }
}
</style>