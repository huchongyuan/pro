<!--
 * @Descripttion:表单查询组件 
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-13 18:00:34
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-16 11:11:30
-->
<template>
     <Form class="queryParam" ref="QueryParam" :model="normBaseQuery" label-position="right" :label-width="80" inline>
        <FormItem prop="code" label="标准号">
            <Input type="text" v-model="normBaseQuery.code" placeholder="标准号"></Input>
        </FormItem>
        <FormItem prop="name" label="标准名称">
            <Input type="text" v-model="normBaseQuery.name" placeholder="标准名称"></Input>
        </FormItem>
        <FormItem prop="category" label="标准分类" style="width:186px;">
            <Select v-model="normBaseQuery.statusClass">
                <Option v-for="opt in options" :value="opt.statusDesc" :key="opt.statusNo"></Option>
            </Select>
        </FormItem>
    </Form>
</template>
<script>
export default {
    name:"QueryParam",
    computed:{
        options:()=>{
            if(sessionStorage.getItem("DD003")){
                var result = JSON.parse(sessionStorage.getItem("DD003"));
                return result;
            }
            return []
        }
    },
    data(){
        return {
            normBaseQuery:{
                "code":"",
                "name":"",
                "statusNo":""
            }
        }
    },
    methods:{
        getParam(){
            return this.normBaseQuery
        },
        setParam(normBaseQuery){
           this.$set(this,'normBaseQuery',normBaseQuery); 
        }
    }
}
</script>
<style lang="less">
.queryParam .ivu-form-item-content{
    width:186px;
}
</style>

