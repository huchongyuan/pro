<!--
 * @Descripttion:表格组件
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-13 17:30:44
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-18 16:14:01
-->
<template>
    <div>
        <Table 
            border
            :columns="columns" 
            :data="records"
        ></Table>
        <div class="PageWrap">
            <Page 
                :total="total" 
                size="small" 
                show-elevator
                :current="current"
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
           records:[],
           queryParam:{} ,
           size:10,
           current:1,
           total:0,
           queryMethod:()=>{} 
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
        query(queryMethod,queryParam,pageChange){
           this.$set(this,'queryParam',queryParam);
           this.$set(this,'queryMethod',queryMethod);
           if(pageChange){
                this.$set(this,"current",1);
           }
           this.$nextTick(()=>{
               let current = this.current;
               let size = this.size;
               var contidition = {current,size,...this.queryParam};
               this.queryMethod(contidition).then((resp)=>{
                   if(resp && resp["code"] === "1000"){
                       let {total,current,size,records} = resp.body;
                       this.$nextTick(()=>{
                            this.$set(this,"total",total);
                            this.$set(this,"current",current);
                            this.$set(this,"size",size);
                            // 增加序号;
                            let newRocords = records && records.map((item,index)=>{
                                item["indexNo"]= index + 1;
                                return item;
                            })
                            this.$set(this,"records",newRocords);
                       });
                   } 
                })
           })
        },
        // 翻页触发查询;
        PageChange(pageNum){
            this.$set(this,'current',pageNum);
            this.query(this.queryMethod,this.queryParam);
        },
        // 每页条数发生变化触发;
        PageSizeChange(pageSize){
            this.$set(this,'size',pageSize);
            this.query(this.queryMethod,this.queryParam);
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
