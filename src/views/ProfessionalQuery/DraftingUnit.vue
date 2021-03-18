<!--
 * @Descripttion:起草单位基本查询 
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-11 14:28:33
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-18 17:30:13
-->
<template>
    <div class="DraftingUnit">
      <div class="DraftingUnitHeader">
         <Form ref="formInline" label-position="right" :label-width="100" inline>
            <QueryParam ref="QueryParam" />
            <FormItem prop="term" label="起草单位" class="last">
               <Input type="text" v-model="term" placeholder="请输入起草单位"></Input>
            </FormItem>
            <FormItem>
               <Button type="primary" class="leftBtn" @click="query">查询</Button>
               <Button type="primary" @click="toUpperQuery">高级查询</Button>
            </FormItem>
         </Form>
      </div>
      <div class="DraftingUnitContent">  
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
import DraftingUnit from '@/api/DraftingUnit';
import statisticsModal from '@/components/statisticsModal';
import PdfModal from '@/components/PdfModal';
import ModifyModal from '@/components/ModifyModal';
export default {
   name:"DraftingUnit",
   data(){
      return {
         "term":"",
         "columns":[
            {"title":"序号","key":"indexNo"},
            {"title":"单位名称","key":"authorDep"},
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
                  let {table,tableId,standNo,standName,authorDep} = params['row'];
                  return h('div', [
                     h('a', {
                           on: {
                              click: () => {
                                this.$refs["ModifyModal"].open({
                                     "table":table,
                                     "tableId":tableId,
                                     "standNo":standNo,
                                     "standName":standName,
                                     "otherInfo":authorDep
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
         this.$refs["QueryResult"].query(DraftingUnit.query,{term,...queryParam},true);
      },
      // 跳转到高级查询;
      toUpperQuery(){
         this.$router.push({"name":"DraftingAdvancedUnit"});
      },
   }
}
</script>
<style lang="less">
.DraftingUnit{
   .DraftingUnitHeader{
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
