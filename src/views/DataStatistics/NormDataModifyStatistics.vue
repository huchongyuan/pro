<!--
 * @Descripttion:标准修订数据统计 NormDataModifyStatistics 
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-11 14:35:10
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-18 14:52:16
-->
<template>
   <div class="NormDataModifyStatistics">
      <div class="NormDataModifyStatisticsHeader">
         <Form ref="formInline" label-position="right" :label-width="80" inline>
            <QueryParam ref="QueryParam" />
            <FormItem>
               <Button type="primary" class="leftBtn" @click="query">查询</Button>
            </FormItem>
         </Form>
      </div>
      <div class="NormDataModifyStatisticsContent">  
         <QueryResult ref="QueryResult" :columns="columns" />
      </div>
   </div>
</template>
<script>
import QueryResult from '@/components/QueryResult';
import QueryParam from '@/components/QueryParam';
import NormDataModifyStatistics from '@/api/NormDataModifyStatistics';
export default {
   name:"NormBaseQuery",
   data(){
      return {
         columns:[
            {"title":"序号","key":"indexNo"},
            {"title":"标准编号","key":"standNo",
              //  "render":(h, params) => {
              //     var value = params["row"]["standNo"]
              //     return h('div', [
              //        h('a', {
              //              on: {
              //                 click: () => {
              //                    this.$refs["statisticsModal"].open({
              //                       "standNo":value
              //                    });
              //                 }
              //              }
              //           }, value)
              //        ]);
              //  }
            },
            {"title":"标准名称","key":"standName",
              //  "render":(h, params) => {
              //     let value = params["row"]["standName"];
              //     let fjUrl = params["row"]["fjUrl"];
              //     return h('div', [
              //        h('a', {
              //              on: {
              //                 click: () => {
              //                    this.$refs["PdfModal"].open(fjUrl);
              //                 }
              //              }
              //           }, value)
              //        ]);
              //  }
            },
            {"title":"修订类别","key":"reviseType"},
            {"title":"标准原内容","key":"otherInfo"},
            {"title":"修订意见","key":"reviesCont"},
            {"title":"备注","key":"reviesDesc"},
            {"title":"提出人单位","key":"reviesCor"},
            {"title":"提出人姓名","key":"reviseUser"},
            {"title":"提出日期","key":"reviesTime"},
            {"title":"操作",
               "render":(h, params) => {
                  return h('div', [
                     h('a', {
                           on: {
                              click: () => {
                                  
                              }
                           }
                        }, '删除')
                     ]);
               }
            }
         ]
      }
   },
   components:{
      "QueryResult":QueryResult,
      "QueryParam":QueryParam
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
          this.$refs["QueryResult"].query(NormDataModifyStatistics.query,queryParam,true);
      },
      formatterVal(params,key){
         let result = JSON.parse(sessionStorage.getItem("DD003"));
         let row = params['row'];
         return result.filter((item)=>{return item["statusNo"] == row[key]})[0]["statusDesc"];
      }
   }
}
</script>
<style lang="less">
.NormDataModifyStatisticsHeader{
   height:58px;
   .ivu-form-item{
      float:left;
   }
   .leftBtn{
      margin-right:20px;
   }
}

</style>