<!--
 * @Descripttion:标准内容
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-11 14:25:55
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-16 23:33:32
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
    </div>
</template>
<script>
import QueryResult from '@/components/QueryResult';
import QueryParam from '@/components/QueryParam';
import NormInfoQuery from '@/api/NormInfoQuery';
export default {
   name:"NormInfoQuery",
   data(){
      return {
         "standDte":"",
         "columns":[
           
            {"title":"标准号","key":"standNo"},
            {"title":"标准名称","key":"standName"},
            {"title":"明细编号","key":"standDetNo"},
            {"title":"序号","key":"indexNo"},
            {"title":"明细内容","key":"standDet"},
            {"title":"提出修订意见",
               "render":(h, params) => {
                  return h('div', [
                     h('a', {
                           on: {
                              click: () => {
                                 let {standName,standNo} = params.row;
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
