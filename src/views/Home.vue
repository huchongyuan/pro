<!--
 * @Descripttion:主页面
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-07 22:57:02
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-12 11:07:38
-->
<template>
    <div id="Home">
        <nav class="menuWrap">
          <div class="menuTitle">标准库数据查询系统</div>
          <LeftMenu />
        </nav>
        <main>
          <header>右侧头部</header>
          <div>
              <router-view />
          </div>
          <footer>右侧底部</footer>
        </main>
    </div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
export default {
  name: 'Home',
  components:{
    "LeftMenu":LeftMenu
  }
};
</script>
<style lang="less">
#Home{
  width:100%;
  height:100%;
  background-color: #fff;
  nav{
    width:200px;
    float:left;
    height:100%;
    .menuTitle{
      height:50px;
      font-size: 16px;
      font-weight: bolder;
      line-height: 50px;
      text-align: center;
      color:#fff;
      background-color: rgba(0, 51, 102, 1);
    }
  }
  main{
    width:calc(100% - 200px);
    float:left;
    height:100%;
  }
}
</style>

