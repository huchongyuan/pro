<!--
 * @Descripttion:侧边栏菜单组件 
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-11 17:51:29
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-13 10:37:07
-->
<template>
    <div class="leftMenu">
        <MenuItem v-for="(item,key) in MeunList" :key="key" :menus="item" />
    </div>
</template>
<script>
import MenuItem from './LeftMenuItem';
const MeunList=[
    {
        "title":"标准综合查询",
        "url":"/IntegratedQuery"
    },
    {
        "title":"标准专业查询",
        "children":[
            {
                "title":"标准基础信息",
                "url":"/NormBaseQuery"
            },
            {
                "title":"标准基础信息(高级查询)",
                "url":"/NormAdvancedQuery"
            },
            {
                "title":"标准内容",
                "url":"/NormInfoQuery"
            },
            {
                "title":"术语和定义",
                "url":"/TermAndDefinition"
            },
            {
                "title":"起草单位",
                "url":"/DraftingUnit"
            },
            {
                "title":"起草单位(高级查询)",
                "url":"/DraftingAdvancedUnit"
            },
            {
                "title":"起草人",
                "url":"/Rapporteur"
            },
            {
                "title":"起草人(高级查询)",
                "url":"/RapporteurAdvanced"
            },
            {
                "title":"规范性引用文件",
                "url":"/AuthorityFile"
            },
            {
                "title":"参考文献",
                "url":"/Bibliography"
            }
        ]
    },
    {
       "title":"标准数据统计",
       "children":[
           {
                "title":"标准数据统计",
                "url":"/NormDataStatistics"
            },
            {
                "title":"标准修订数据统计",
                "url":"/NormDataModifyStatistics"
            } 
       ] 
    }
];
export default {
  name:"LeftMenu",
  data(){
      return {
         MeunList 
      }
  },
  components:{
      "MenuItem":MenuItem
  } 
}
</script>
<style>
.leftMenu{
    padding-left:30px;
    height:calc(100% - 50px);
    background-color:#003366;
}   
</style>
