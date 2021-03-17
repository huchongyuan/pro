<!--
 * @Descripttion:标准基础查询
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-11 14:16:16
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-17 12:59:23
-->
<template>
   <div class="normBaseQuery">
      <div class="normBaseQueryHeader">
         <Form ref="formInline" label-position="right" :label-width="80" inline>
            <QueryParam ref="QueryParam" />
            <FormItem>
               <Button type="primary" class="leftBtn" @click="query">查询</Button>
               <Button type="primary" @click="toUpperQuery">高级查询</Button>
            </FormItem>
         </Form>
      </div>
      <div class="normBaseQueryContent">  
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
import NormBaseQuery from '@/api/NormBaseQuery';
import statisticsModal from '@/components/statisticsModal';
import PdfModal from '@/components/PdfModal';
import ModifyModal from '@/components/ModifyModal';
export default {
   name:"NormBaseQuery",
   data(){
      return {
         columns:[
            {"title":"序号","key":"indexNo"},
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
            {"title":"英文名称","key":"engName"},
            {"title":"发布日期","key":"pubDate"},
            {"title":"实施日期","key":"estDate"},
            {"title":"标准ICS号","key":"ics"},
            {"title":"中标分类号","key":"ccs"},
            {"title":"替代以下标准","key":"subtitute"},
            {"title":"被以下标准替代","key":"besubtitudeby"},
            {"title":"标准状态","key":"status"},
            {"title":"出版语种","key":"pubLanguage"},
            {"title":"标准类型","key":"classify"},
            {"title":"标准属性","key":"property"},
            {"title":"标准编号","key":"shortNo"},
            {"title":"标准分类","key":"standClass"},
            { "title":"标准修订",
               "render":(h, params) => {
                  return h('div', [
                     h('a', {
                           on: {
                              click: () => {
                                  this.$refs["ModifyModal"].open();
                              }
                           }
                        }, '标准修订')
                     ]);
               }
            }
         ]
      }
   },
   components:{
      "QueryResult":QueryResult,
      "QueryParam":QueryParam,
      "statisticsModal":statisticsModal,
      "PdfModal":PdfModal,
      "ModifyModal":ModifyModal
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
   methods:{
      query(){
          let queryParam = this.$refs["QueryParam"].getParam();
          this.$refs["QueryResult"].query(NormBaseQuery.query,queryParam,true);
      },
      // 跳转到高级查询;
      toUpperQuery(){
         
      }
   }
}
</script>
<style lang="less">
.normBaseQueryHeader{
   height:58px;
   .ivu-form-item{
      float:left;
   }
   .leftBtn{
      margin-right:20px;
   }
}

</style>
