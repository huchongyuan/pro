<!--
 * @Descripttion:标准基础查询
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-11 14:16:16
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-15 22:33:48
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
         <QueryResult />
      </div>
   </div>
</template>
<script>
import QueryResult from '@/components/QueryResult';
import QueryParam from '@/components/QueryParam';
export default {
   name:"NormBaseQuery",
   data(){
      return {

      }
   },
   components:{
      "QueryResult":QueryResult,
      "QueryParam":QueryParam
   },
   methods:{
      query(){
         console.log(this.$refs["QueryParam"]);
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
