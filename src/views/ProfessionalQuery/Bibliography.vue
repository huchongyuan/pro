<!--
 * @Descripttion:参考文献  
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-11 14:34:13
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-17 00:33:43
-->
<template>
    <div class="Bibliography">
      <div class="BibliographyHeader">
         <Form ref="formInline" label-position="right" :label-width="100" inline>
            <QueryParam ref="QueryParam" />
            <FormItem prop="reference" label="参考文献" class="last">
               <Input type="text" v-model="reference" placeholder="请输入参考文献"></Input>
            </FormItem>
            <FormItem>
               <Button type="primary" class="leftBtn" @click="query">查询</Button>
            </FormItem>
         </Form>
      </div>
      <div class="BibliographyContent">  
         <QueryResult ref="QueryResult" :columns="columns" />
      </div>
    </div>
</template>
<script>
import QueryResult from '@/components/QueryResult';
import QueryParam from '@/components/QueryParam';
import Bibliography from '@/api/Bibliography';
export default {
   name:"Bibliography",
   data(){
      return {
         "reference":"",
         "columns":[
            {"title":"参考文献序号","key":"indexNo"},
            {"title":"参考文献标准编号","key":"referenceNo"},
            {"title":"参考文献标准名称","key":"referenceName"},
            {"title":"标准编号","key":"standNo"},
            {"title":"标准名称","key":"standName"},
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
      if(this.$route.params.standName && this.$route.params.standNo){
        let {standName,standNo} = this.$route.params;
        this.$refs["QueryParam"].setParam({standName,standNo})
      }
   },
   components:{
      "QueryResult":QueryResult,
      "QueryParam":QueryParam
   },
   methods:{
      query(){
         let queryParam = this.$refs["QueryParam"].getParam();
         let reference = this.reference;
         this.$refs["QueryResult"].query(Bibliography.query,{reference,...queryParam},true);
      }
   }
}
</script>
<style lang="less">
.Bibliography{
   .BibliographyHeader{
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
