<!--
 * @Descripttion:标准修订弹窗 
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-17 12:52:28
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-17 13:27:38
-->
<template>
    <div class="ModifyModal">
        <Modal v-model="modalFlag" draggable scrollable title="标准修订" footer-hide :width="800" class="modify">
            <Form :model="formItem" :label-width="100">
                <FormItem label="标准号" prop="standNo">
                    <Input v-model="formItem.standNo" readonly />
                </FormItem>
                <FormItem label="标准名称" prop="standName">
                    <Input v-model="formItem.standName" readonly/>
                </FormItem>
                <!--下拉框-->
                <FormItem label="修订内容" prop="standRevies">
                    <Input v-model="formItem.standRevies" readonly />
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
                <FormItem label="提出人姓名" prop="reviseUser">
                    <Input v-model="formItem.reviesCor" />
                </FormItem>
                <FormItem label="提出日期" prop="reviesTime">
                    <Input v-model="formItem.reviesCor" />
                </FormItem>
                <FormItem>
                    <Button type="primary">保存并关闭</Button>
                    <Button style="margin-left: 8px">取消</Button>
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
                standRevies:"",
                reviesCont:"",
                reviesDesc:"",
                reviesCor:"",
                reviseUser:"",
                reviesTime:""
            },
            "columns":[],
            "records":[]
      }
  },
  props:{
      
  },
  methods:{
      //先查询
      open(){
       this.$set(this,"modalFlag",true); 
      },
      close(){
        this.$set(this,"modalFlag",false); 
      }
  }
}
</script>
<style lang="less">
.modify .ivu-modal-body{
    height:500px;
    overflow-y:auto;
}
</style>
