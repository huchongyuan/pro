<!--
 * @Descripttion:标准修订弹窗 
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-17 12:52:28
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-17 16:16:45
-->
<template>
    <div class="ModifyModal">
        <Modal v-model="modalFlag" draggable scrollable title="标准修订" footer-hide :width="800" class="modify">
            <Form :model="formItem" :label-width="100" ref="ModifyForm">
                <FormItem label="标准号" prop="standNo">
                    <Input v-model="formItem.standNo" readonly />
                </FormItem>
                <FormItem label="标准名称" prop="standName">
                    <Input v-model="formItem.standName" readonly/>
                </FormItem>
                <!--下拉框-->
                <FormItem label="修订内容" prop="otherInfo">
                    <Input v-model="formItem.otherInfo" readonly />
                </FormItem>
                <FormItem label="修订意见" prop="reviesCont">
                    <Input v-model="formItem.reviesCont" />
                </FormItem>
                <FormItem label="备注" prop="reviesDesc">
                    <Input v-model="formItem.reviesDesc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" />
                </FormItem>
                <FormItem label="提出人单位" prop="reviesCor">
                    <Input v-model="formItem.reviesCor" />
                </FormItem>
                <div style="height:60px">
                    <FormItem label="提出人姓名" prop="reviseUser" class="left">
                        <Input v-model="formItem.reviseUser" />
                    </FormItem>
                    <FormItem label="提出日期" prop="reviesTime" class="right">
                        <DatePicker type="datetime" format="yyyy-MM-dd HH:mm:ss" v-model="formItem.reviesTime" style="width: 200px"></DatePicker>
                    </FormItem>
                </div>
                <FormItem>
                    <Button type="primary" @click="save()">保存并关闭</Button>
                    <Button style="margin-left: 8px" @click="close()">取消</Button>
                </FormItem>
            </Form>
            <Table 
                border
                :columns="columns" 
                :data="records"
            ></Table>
        </Modal>
    </div>
</template>
<script>
import commonApi from '@/api/commonApi';
export default {
  name:"ModifyModal",
  data(){
      return {
            "modalFlag":false,
            formItem: {
                tableId:"",
                table:"",
                standNo:"",
                standName:"",
                otherInfo:"",
                reviesCont:"",
                reviesDesc:"",
                reviesCor:"",
                reviseUser:"",
                reviesTime:""
            },
            "columns":[
                {"title":"序号","key":"indexNo"},
                {"title":"修订意见","key":"reviesCont"},
                {"title":"备注","key":"reviesDesc"},
                {"title":"提出人单位名称","key":"reviesCor"},
                {"title":"提出人姓名","key":"reviseUser"},
                {"title":"提出日期","key":"reviesTime"}, 
                {"title":"操作",
                  "render":(h, params) => {
                    return h('div', [
                        h('a', {
                            on: {
                                click: () => {
                                    
                                }
                            }
                            }, '删除')
                        ]);
                     }
                }
            ],
            "records":[]
      }
  },
  props:{
      
  },
  methods:{
        //先查询
        open(param){
            let newFormItem = Object.assign(this.formItem,param);
            this.$set(this,"formItem",newFormItem);
            commonApi.queryModify({"tableId":param["tableId"]}).then((resp)=>{
                    if(resp && resp.code == "1000"){
                        let result = resp.body.records.map((item,index)=>{
                            item["indexNo"] = index+1;
                            return item;
                        });
                        this.$set(this,'records',result);
                    }
                    this.$set(this,"modalFlag",true); 
            });
        },
        close(){
            this.$refs['ModifyForm'].resetFields();
            this.$set(this,"modalFlag",false); 
        },
        // 保存;
        save(){
            let reviesTime = this.formItem.reviesTime?this.formatDateTime(this.formItem.reviesTime):"";
            commonApi.modifyAdd({...this.formItem,reviesTime}).then((resp)=>{
                if(resp && resp["code"] =="1000"){
                this.close(); 
                }
            }) 
        },
        addZero(num){
            return num < 10 ? '0' + num : num;
        },
        formatDateTime(date) {
            const time = new Date(Date.parse(date));
            time.setTime(time.setHours(time.getHours() + 8));
            const Y = time.getFullYear() + '-';
            const M = this.addZero(time.getMonth() + 1) + '-';
            const D = this.addZero(time.getDate()) + ' ';
            const h = this.addZero(time.getHours()) + ':';
            const m = this.addZero(time.getMinutes()) + ':';
            const s = this.addZero(time.getSeconds());
            return Y + M + D + h + m + s;
        }
  }
}
</script>
<style lang="less">
.modify .ivu-modal-body{
    height:500px;
    overflow-y:auto;
}
.modify .left{
    float:left;
    width:50%;
}
.modify .right{
    float:left;
    width:50%;
}
</style>
