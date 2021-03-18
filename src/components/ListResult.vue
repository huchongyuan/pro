<!--
 * @Descripttion:List展示组件 
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-18 10:11:35
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-18 14:36:11
-->
<template>
    <div class="ListResult" v-if="record">
       <List :header="record.name?record.name:''" border>
            <ListItem v-for="(item,index) in record.standardDatabases" :key="index">
                <div class="ListItemLeft">{{item.name | nameFilter}}</div>
                <div class="ListItemRight">{{item.count}}</div>
            </ListItem>
        </List>
    </div>
</template>
<script>
export default {
  name:"ListResult",
  props:{
      record:{
          type:Object,
          default(){
              return null;
          }
      }
  },
  filters:{
      nameFilter(value){
          let nameMap={
              "标准基础信息":"标准基础信息(个)",
              "标准明细内容":"标准明细内容(条)",
              "术语与定义":"术语与定义(条)",
              "起草单位":"起草单位(个)",
              "起草人":"起草人(个)",
              "规范性引用文件":"规范性引用文件(项)",
              "参考文献":"参考文献(个)"
          }
          return nameMap[value]?nameMap[value]:value;
      }
  },
  data(){
      return {
         
      }
  }
}
</script>
<style>
.ListResult{
    margin-bottom:10px;
}
.ListResult .ivu-list-item{
    padding:0px;
}
.ListItemLeft{
    width:50%;
    height:46px;
    line-height:46px;
    float:left;
    text-align:left;
    border-right:1px solid #e8eaec;
    box-sizing: border-box;
    text-indent: 20px;
}
.ListItemRight{
    width:50%;
    float:left;
     height:46px;
    line-height:46px;
    text-align:left; 
    text-indent: 20px;
}
</style>
