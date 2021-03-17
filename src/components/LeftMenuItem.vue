<!--
 * @Descripttion:单个的菜单组
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-11 17:51:29
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-17 14:00:59
-->
<template>
    <div class="MenuItem" v-if="menus">
        <h2 class="menutil">
            <span v-if="!menus.url">{{menus.title}}</span>
            <router-link :to="menus.url" v-if="menus.url" :class="[menus.url==currentUrl?'active':'']">{{menus.title}}</router-link>
        </h2>
        <ul class="menuList" v-if="menus.children">
            <li class="menuChild" v-for="(child,index) in menus.children" :key="index">
                <router-link :to="child.url" :class="[child.url==currentUrl?'active':'']">{{child.title}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name:"MenuItem",
  props:{
      menus:{
          type:Object,
          default(){
              return null;
          }
      }
  },
  data(){
      return {
        currentUrl:"",  
      }
  },
  watch:{
    '$route.path':function(newVal,oldVal){
        if(newVal !=oldVal ){
             this.$set(this,"currentUrl",newVal)
        }
    }
  }
}
</script>
<style lang="less">
.MenuItem{
    h2{
        height:45px;
        line-height:45px;
        font-size:16px;
        font-weight:bolder;
        color:#fff;
        text-indent: 20px;
        cursor:pointer;
        a{
            color:#fff;
        }
    }
    li{
        height:30px;
        line-height:30px;
        font-size:14px;
        font-weight:bolder;
        color:#fff;
        text-indent: 20px;
        cursor:pointer;
        a{
            color:#fff;
        }
    }
    .active{
        color:#2d8cf0;
    }
}  
</style>