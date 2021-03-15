<!--
 * @Descripttion:表格组件
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-13 17:30:44
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-15 22:46:04
-->
<template>
    <div>
        <Table 
            border
        ></Table>
        <div class="PageWrap">
            <Page 
                :total="40" 
                size="small" 
                show-elevator
                show-total
                show-sizer
                @on-change="PageChange" 
                @on-page-size-change="PageSizeChange" 
            /> 
        </div>
    </div>
</template>
<script>
export default {
    name:"QueryResult",
    data(){
        return {
           result:[],
           queryParam:{} ,
           pageSize:0,
           pageNum:0   
        }
    },
    props:{
        columns:{
            type:Array,
            default(){
                return []
            }
        },
        queryFunc:{
            type:Function,
            default(){
                return ()=>{}
            }
        }
    },
    methods:{
        query(queryParam){
           this.$set(this,'queryParam',queryParam);

        },
        // 翻页触发查询;
        PageChange(pageNum){
            console.log(pageNum)
        },
        // 每页条数发生变化触发;
        PageSizeChange(pageSize){
            console.log(pageSize)
        }
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
