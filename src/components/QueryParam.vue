<!--
 * @Descripttion:表单查询组件 
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-13 18:00:34
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-13 20:25:07
-->
<template>
    <div class="QueryParam">
        <el-form :inline="true" :model="normBaseQuery" class="demo-form-inline">
            <el-form-item label="标准号">
                <el-input v-model="normBaseQuery.code" placeholder="标准号"></el-input>
            </el-form-item>
            <el-form-item label="标准名称">
                <el-input v-model="normBaseQuery.name" placeholder="标准名称"></el-input>
            </el-form-item>
            <el-form-item label="标准名称">
                <el-input v-model="normBaseQuery.name" placeholder="标准名称"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    name:"QueryParam",
    data(){
        return {
            normBaseQuery:{
                "code":"",
                "name":"",
                "category":""
            }
        }
    },
    methods:{
        
    }
}
</script>
