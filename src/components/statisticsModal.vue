<!--
 * @Descripttion:统计数据弹窗
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-17 10:28:31
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-17 12:02:22
-->
<template>
    <div class="statisticsModal">
        <Modal v-model="modalFlag" draggable scrollable title="统计数据" footer-hide :width="800">
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
  name:"statisticsModal",
  data(){
      return {
          "modalFlag":false,
          "columns":[
              {"title":"研学旅行服务规范","key":"name"},
              {"title":"数量",
                "render":(h, params) => {
                  var dataKey = params['row']['dataKey'];
                  var val = this.dataSource[dataKey];
                  return h('div', [h('span', {}, val)]);
                }
              },
              {"title":"操作",
                "render":(h, params) => {
                  let {url} = params['row'];
                  let standNo = this.standNo;
                  return h('div', [
                     h('a', {
                           on: {
                              click: () => {
                                 this.$router.push({
                                    "name":url,
                                    "params":{
                                       standNo
                                    }
                                 })
                              }
                           }
                        }, "查看详情")
                     ]);
                }
              }
          ],
        "records":[
            {"name":"标准内容(条)","dataKey":"standardContent","url":"NormBaseQuery"},
            {"name":"术语与定义(条)","dataKey":"standardTerm","url":"TermAndDefinition"},
            {"name":"起草单位(个)","dataKey":"draftUnit","url":"DraftingUnit"},
            {"name":"起草人(个)","dataKey":"drafter","url":"Rapporteur"},
            {"name":"规范性引用文件(项)","dataKey":"normativeFile","url":"AuthorityFile"},
            {"name":"参考文献(个)","dataKey":"references","url":"Bibliography"}
        ],
        dataSource:{},
        standNo:""
      }
  },
  props:{
      
  },
  methods:{
      //先查询
      open(params){
        let {standNo} = params;
        this.$set(this,"standNo",standNo);
        commonApi.queryStatic(params).then((resp)=>{
            if(resp && resp.code == "1000"){
                var result = resp["body"];
                this.$set(this,"dataSource",result)
            }
            this.$set(this,"modalFlag",true);
        });
      },
      close(){
        this.$set(this,"modalFlag",false); 
      }
  }
}
</script>
<style lang="less">

</style>
