<!--
 * @Descripttion:表格组件
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-13 17:30:44
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-13 20:34:52
-->
<template>
    <div>
        <Table border></Table>
        <div class="PageWrap">
            <Page 
                :total="40" 
                size="small" 
                show-elevator 
                show-sizer
                on-change="PageChange" 
                on-page-size-change="PageSizeChange" 
            /> 
        </div>
    </div>
</template>
<script>
export default {
    name:"QueryResult",
    data(){
        return {
           result:[]     
        }
    },
    props:{
        columns:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        query(){
            
        },
        // 翻页触发查询;
        PageChange(){},
        // 每页条数发生变化触发;
        PageSizeChange(){}

    }
}
</script>
<style lang="less">
.PageWrap{
    text-align:right;
    height:50px;
    line-height: 50px;
}
</style>
