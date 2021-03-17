<!--
 * @Descripttion:规范性引用文件 
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-11 14:32:52
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-17 12:19:54
-->
<template>
    <div class="AuthorityFile">
      <div class="AuthorityFileHeader">
         <Form ref="formInline" label-position="right" :label-width="120" inline>
            <QueryParam ref="QueryParam" />
            <FormItem prop="quote" label="规范性引用文件" class="last">
               <Input type="text" v-model="quote" placeholder="请输入规范性引用文件"></Input>
            </FormItem>
            <FormItem>
               <Button type="primary" class="leftBtn" @click="query">查询</Button>
            </FormItem>
         </Form>
      </div>
      <div class="AuthorityFileContent">  
         <QueryResult ref="QueryResult" :columns="columns" />
      </div>
      <statisticsModal ref="statisticsModal" />
      <PdfModal ref="PdfModal" />
    </div>
</template>
<script>
import QueryResult from '@/components/QueryResult';
import QueryParam from '@/components/QueryParam';
import AuthorityFile from '@/api/AuthorityFile';
import statisticsModal from '@/components/statisticsModal';
import PdfModal from '@/components/PdfModal';
export default {
   name:"AuthorityFile",
   data(){
      return {
         "quote":"",
         "columns":[
            {"title":"引用标准序号","key":"indexNo"},
            {"title":"引用标准编号","key":"quoteNo"},
            {"title":"引用标准名称","key":"quoteName"},
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
                  return h('div', [
                     h('a', {
                           on: {
                              click: () => {
                                 let {standName,standNo} = params.row;
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
      "PdfModal":PdfModal
   },
   methods:{
      query(){
         let queryParam = this.$refs["QueryParam"].getParam();
         let term = this.term;
         this.$refs["QueryResult"].query(AuthorityFile.query,{term,...queryParam},true);
      }
   }
}
</script>
<style lang="less">
.AuthorityFile{
   .AuthorityFileHeader{
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
