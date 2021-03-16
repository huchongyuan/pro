<!--
 * @Descripttion:起草人 Rapporteur
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-11 14:31:01
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-17 00:18:47
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
               <Button type="primary" @click="query">高级查询</Button>
            </FormItem>
         </Form>
      </div>
      <div class="RapporteurContent">  
         <QueryResult ref="QueryResult" :columns="columns" />
      </div>
    </div>
</template>
<script>
import QueryResult from '@/components/QueryResult';
import QueryParam from '@/components/QueryParam';
import Rapporteur from '@/api/Rapporteur';
export default {
   name:"Rapporteur",
   data(){
      return {
         "term":"",
         "columns":[
            {"title":"序号","key":"indexNo"},
            {"title":"起草人姓名","key":"author"},
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
         let term = this.term;
         this.$refs["QueryResult"].query(Rapporteur.query,{term,...queryParam},true);
      }
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

