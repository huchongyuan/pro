<!--
 * @Descripttion:表单查询组件 
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-13 18:00:34
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-17 00:30:57
-->
<template>
     <Form class="queryParam" ref="QueryParam" :model="normBaseQuery" label-position="right" :label-width="80" inline>
        <FormItem prop="standNo" label="标准号">
            <Input type="text" v-model="normBaseQuery.standNo" placeholder="标准号"></Input>
        </FormItem>
        <FormItem prop="standName" label="标准名称">
            <Input type="text" v-model="normBaseQuery.standName" placeholder="标准名称"></Input>
        </FormItem>
        <FormItem prop="category" label="标准分类" style="width:186px;">
            <Select v-model="normBaseQuery.standClass">
                <Option v-for="opt in options" :value="opt.statusNo" :key="opt.statusNo">{{opt.statusDesc}}</Option>
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
    mounted(){
         this.$set(this.normBaseQuery,'standClass',this.options[0]['statusNo']);
    },
    data(){
        return {
            normBaseQuery:{
                "standNo":"",
                "standName":"",
                "standClass":""
            }
        }
    },
    methods:{
        getParam(){
            return this.normBaseQuery
        },
        setParam(normBaseQuery){
           var newParam = {...this.normBaseQuery,...normBaseQuery};
           this.$set(this,'normBaseQuery',newParam); 
        }
    }
}
</script>
<style lang="less">
.queryParam{
    float:left;
}
.queryParam .ivu-form-item-content{
    width:186px;
}
</style>

