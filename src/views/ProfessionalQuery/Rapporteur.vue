<!--
 * @Descripttion:起草人 Rapporteur
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-11 14:31:01
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-18 17:31:21
-->
<template>
    <div class="Rapporteur">
      <div class="RapporteurHeader">
         <Form ref="formInline" label-position="right" :label-width="100" inline>
            <QueryParam ref="QueryParam" />
            <FormItem prop="term" label="起草人" class="last">
               <Input type="text" v-model="term" placeholder="请输入起草人"></Input>
            </FormItem>
            <FormItem>
               <Button type="primary" class="leftBtn" @click="query">查询</Button>
               <Button type="primary" @click="toUpperQuery">高级查询</Button>
            </FormItem>
         </Form>
      </div>
      <div class="RapporteurContent">  
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
import Rapporteur from '@/api/Rapporteur';
import statisticsModal from '@/components/statisticsModal';
import PdfModal from '@/components/PdfModal';
import ModifyModal from '@/components/ModifyModal';
export default {
   name:"Rapporteur",
   data(){
      return {
         "term":"",
         "columns":[
            {"title":"序号","key":"indexNo"},
            {"title":"起草人姓名","key":"author"},
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
                  let {table,tableId,standNo,standName,author} = params['row'];
                  return h('div', [
                     h('a', {
                           on: {
                              click: () => {
                                 this.$refs["ModifyModal"].open({
                                     "table":table,
                                     "tableId":tableId,
                                     "standNo":standNo,
                                     "standName":standName,
                                     "otherInfo":author
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
         this.$refs["QueryResult"].query(Rapporteur.query,{term,...queryParam},true);
      },
      // 跳转到高级查询;
      toUpperQuery(){
         this.$router.push({"name":"RapporteurAdvanced"});
      },
   }
}
</script>
<style lang="less">
.Rapporteur{
   .RapporteurHeader{
      height:65px;
      .ivu-form-item{
         float:left;
      }
      .last.ivu-form-item{
         margin-left:85px;
         margin-right:0px;
      }
      .leftBtn{
         margin-right:20px;
      }
   }
}
</style>

