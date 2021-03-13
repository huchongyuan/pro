<!--
 * @Descripttion:标准基础查询
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-11 14:16:16
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-13 18:03:06
-->
<template>
   <div class="normBaseQuery">
   
   <QueryResult />
   </div>
</template>
<script>
import QueryResult from '@/components/QueryResult'
export default {
   name:"NormBaseQuery",
   data(){
      return {
         normBaseQuery:{
            "code":"",
            "name":"",
            "category":""
         }
      }
   },
   components:{
      "QueryResult":QueryResult
   },
   methods:{
      onSubmit(){
         
      }
   }
}
</script>
