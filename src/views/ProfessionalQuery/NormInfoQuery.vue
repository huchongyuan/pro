<!--
 * @Descripttion:标准内容
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-11 14:25:55
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-17 16:18:45
-->
<template>
    <div class="normInfoQuery">
      <div class="normInfoQueryHeader">
         <Form ref="formInline" label-position="right" :label-width="80" inline>
            <FormItem prop="standDte" label="标准内容">
               <Input type="text" v-model="standDte" placeholder="请输入标准内容"></Input>
            </FormItem>
            <QueryParam ref="QueryParam" />
            <FormItem>
               <Button type="primary" class="leftBtn" @click="query">查询</Button>
            </FormItem>
         </Form>
      </div>
      <div class="normInfoQueryContent">  
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
import NormInfoQuery from '@/api/NormInfoQuery';
import statisticsModal from '@/components/statisticsModal';
import PdfModal from '@/components/PdfModal';
import ModifyModal from '@/components/ModifyModal';
export default {
   name:"NormInfoQuery",
   data(){
      return {
         "standDte":"",
         "columns":[     
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
            {"title":"明细编号","key":"standDetNo"},
            {"title":"序号","key":"indexNo"},
            {"title":"明细内容","key":"standDet"},
            {"title":"提出修订意见",
               "render":(h, params) => {
                   let {table,tableId,standNo,standName,standDet} = params['row'];
                  return h('div', [
                     h('a', {
                           on: {
                              click: () => {
                                 this.$refs["ModifyModal"].open({
                                     "table":table,
                                     "tableId":tableId,
                                     "standNo":standNo,
                                     "standName":standName,
                                     "otherInfo":standDet
                                  });
                              }
                           }
                        }, '提出修订意见')
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
         let standDte = this.standDte;
         this.$refs["QueryResult"].query(NormInfoQuery.query,{standDte,...queryParam},true);
      }
   }
}
</script>
<style lang="less">
.normInfoQuery{
   .normInfoQueryHeader{
      height:65px;
      .ivu-form-item{
         float:left;
      }
   }
}
</style>
