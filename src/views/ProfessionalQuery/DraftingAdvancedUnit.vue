<!--
 * @Descripttion:起草单位高级查询
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-11 14:29:55
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-18 16:30:37
-->
<template>
    <div class="DraftingAdvancedUnit">
       <div class="DraftingAdvancedUnitHeader">
         <Form ref="formInline" :model="integratedQuery" :rules="ruleValidate" label-position="right" :label-width="100" inline>
            <FormItem prop="standClass" label="标准分类">
               <Select v-model="integratedQuery.standClass">
                  <Option v-for="opt in queryOptions" :value="opt.statusNo" :key="opt.statusNo">{{opt.statusDesc}}</Option>
               </Select>
            </FormItem>
            <FormItem prop="searchStr" label="查询内容">
               <Input type="text" v-model="integratedQuery.searchStr" placeholder="请输入查询内容" />
            </FormItem>
            <FormItem>
               <Button type="primary" @click="handleSubmit">查询</Button>
            </FormItem>
         </Form>
      </div>
      <div class="DraftingAdvancedUnitContent">
         <QueryResult ref="QueryResult" :columns="columns" />
      </div>
    </div>
</template>
<script>
import QueryResult from '@/components/QueryResult';
import DraftingAdvancedUnit from '@/api/DraftingAdvancedUnit';
export default {
   name:"DraftingAdvancedUnit",
   components:{
      "QueryResult":QueryResult
   },
   computed:{
      queryOptions:()=>{
         if(sessionStorage.getItem("DD003")){
                var result = JSON.parse(sessionStorage.getItem("DD003"));
                 result.unshift({"statusNo":"","statusDesc":"全部"});
                 return result;
            }
            return []
      }
   },
   data(){
      return {
         integratedQuery:{
            "standClass":"",
            "searchStr":""
         },
         ruleValidate:{
            searchStr:{ required: true, message:'请输入查询内容', trigger: 'blur' }
         },
         columns:[
           {"title":"序号","key":"indexNo"},
           {"title":"起草单位","key":"authorDep"},
           {"title":"起草标准数量","key":"standNum"},
           {"title":"标准编号","key":"simpleStands",
            "render":(h, params) => {
               if(this.$refs["QueryResult"].records[params.index]['simpleStands'][0]['standNo']!=undefined){
                   return h('div', {
                        attrs: {
                           class:'subCol'
                        },
                     }, [
                     h('ul', this.$refs["QueryResult"].records[params.index]['simpleStands'].map(item => {
                        return h('li', {
                        }, item.standNo)
                     }))
                  ]);
               }else{
                  return h('div', [h('span', '----'),])
               } 
            }
           },
           {"title":"标准名称","key":"simpleStands",
            "render":(h, params) => {
               if(this.$refs["QueryResult"].records[params.index]['simpleStands'][0]['standName']!=undefined){
                   return h('div', {
                        attrs: {
                           class:'subCol'
                        },
                     }, [
                     h('ul', this.$refs["QueryResult"].records[params.index]['simpleStands'].map(item => {
                        return h('li', {
                           attrs:{class:"standName"}
                        }, item.standName)
                     }))
                  ]);
               }else{
                  return h('div', [h('span', '----'),])
               } 
            }
           }
         ]
      }
   },
    methods:{
      handleSubmit(){
         this.$refs["formInline"].validate((valid) => {
            if (valid) {
               this.$refs["QueryResult"].query(DraftingAdvancedUnit.query,this.integratedQuery,true);
            } 
         })
      }
   }
}
</script>
<style lang="less">
.DraftingAdvancedUnitHeader .ivu-form-item-content{
    width:186px;
}
.subCol>ul>li{
      margin:0 -18px;
      list-style:none;
      text-Align: center;
      padding: 9px;
      border-bottom:1px solid #e8eaec;
      overflow-x: hidden;
}
.subCol>ul>li.standName{
   color:#2b85e4;
   cursor: pointer;
}
.subCol>ul>li:last-child{
  border-bottom: none
}
</style>
