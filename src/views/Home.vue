<!--
 * @Descripttion:主页面
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-07 22:57:02
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-18 14:38:45
-->
<template>
    <div id="Home">
        <nav class="menuWrap">
          <div class="menuTitle">标准库数据查询系统</div>
          <LeftMenu />
        </nav>
        <main>
          <header>
            <div class="loginOut">退出</div>
          </header>
          <div class="containerWrap">
              <div class="container">
                <div class="tabsWrap"></div>
                <div class="view">
                  <keep-alive>
                   <router-view />
                  </keep-alive> 
                </div>
              </div>
          </div>
        </main>
    </div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import LoginRequest from '@/api/login';
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
    header{
      height:50px;
      background-color: rgba(0, 51, 102, 1);
      .loginOut{
        color:#fff;
        width:100px;
        height:50px;
        line-height:50px;
        float:right;
        cursor: pointer;
      }
    }
    .containerWrap{
      width:100%;
      height:calc(100% - 50px);
      overflow-y:auto;
      .container{
        padding:10px;
        .tabsWrap{
          height:50px;
        }
        .view{
          height:calc(100% - 50px);
        }
      }
    }
  }
}
</style>

