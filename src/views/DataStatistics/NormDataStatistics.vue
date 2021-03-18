<!--
 * @Descripttion:标准数据统计 
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-11 14:35:10
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-18 14:30:25
-->
<template>
    <div class="NormDataStatistics">
      <div class="NormDataStatisticsHeader">
         <Form ref="formInline" :model="NormDataStatisticsQuery" label-position="right" :label-width="100" inline>
            <FormItem prop="standClass" label="标准分类">
               <Select v-model="NormDataStatisticsQuery.standClass">
                  <Option v-for="opt in queryOptions" :value="opt.statusNo" :key="opt.statusNo">{{opt.statusDesc}}</Option>
               </Select>
            </FormItem>
            <FormItem>
               <Button type="primary" @click="handleSubmit">查询</Button>
            </FormItem>
         </Form>
      </div>
      <div class="NormDataStatisticsContent">
          <ListResult v-for="(record,index) in records" :key="index" :record="record" />
      </div>
    </div>
</template>
<script>
import ListResult from '@/components/ListResult';
import NormDataStatistics from '@/api/NormDataStatistics';
export default {
   name:"NormDataStatistics",
   data(){
     return {
       NormDataStatisticsQuery:{
          standClass:""
       },
       records:[]
     }
   },
   components:{
     "ListResult":ListResult
   },
   mounted(){
     this.handleSubmit();
   },
   computed:{
      queryOptions:()=>{
         if(sessionStorage.getItem("DD003")){
                var result = JSON.parse(sessionStorage.getItem("DD003"));
                return result;
            }
            return []
      }
   },
   methods:{
     handleSubmit(){
        NormDataStatistics.query({...this.NormDataStatisticsQuery}).then((resp)=>{
          if(resp && resp.code == "1000"){
            let records = resp.body;
            this.$set(this,"records",records);
          }
        })
     }
   }
}
</script>
<style lang="less">
.NormDataStatisticsHeader .ivu-form-item-content{
    width:186px;
}
.NormDataStatisticsContent{
  width:80%;
  margin:0 auto;
}
</style>