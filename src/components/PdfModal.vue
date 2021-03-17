<!--
 * @Descripttion:pdf展示弹窗 
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-17 12:04:41
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-17 12:16:58
-->
<template>
    <div class="PdfModal">
        <Modal v-model="modalFlag" draggable scrollable title="文件展示" footer-hide :width="800" class="PdfMod">
            <pdf :src="url"></pdf>
        </Modal>
    </div>
</template>
<script>
import pdf from 'vue-pdf'
export default {
  name:"PdfModal",
  data(){
      return {
          "modalFlag":false,
          "url":""
      }
  },
  props:{
      
  },
  components:{
      "pdf":pdf
  },
  methods:{
      //先查询
      open(url){
        this.$set(this,'url',url);
        this.$nextTick(()=>{
            this.$set(this,"modalFlag",true);
        })
      },
      close(){
        this.$set(this,"modalFlag",false); 
      }
  }
}
</script>
<style lang="less">
.PdfMod .ivu-modal-body{
    height:500px;
    overflow-y:auto;
}
</style>
