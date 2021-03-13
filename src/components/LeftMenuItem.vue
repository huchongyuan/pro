<!--
 * @Descripttion:单个的菜单组
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-11 17:51:29
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-13 11:16:59
-->
<template>
    <div class="MenuItem" v-if="menus">
        <h2 class="menutil">
            <span v-if="!menus.url">{{menus.title}}</span>
            <router-link :to="menus.url" v-if="menus.url">{{menus.title}}</router-link>
        </h2>
        <ul class="menuList" v-if="menus.children">
            <li class="menuChild" v-for="(child,index) in menus.children" :key="index">
                <router-link :to="child.url">{{child.title}}</router-link>
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
  }
   
}
</script>
<style lang="less">
.MenuItem{
    h2{
        height:50px;
        line-height:50px;
        font-size:18px;
        font-weight:bolder;
        color:#fff;
        cursor:pointer;
    }
    li{
        height:30px;
        line-height:30px;
        font-size:14px;
        font-weight:bolder;
        color:#fff;
        cursor:pointer;
    }
    .active{
        color:chartreuse;
    }
}  
</style>