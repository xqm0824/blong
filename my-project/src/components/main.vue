<template>
  <div>
    <div class="header-wrap">
      <!-- 头部导航 -->
      <div class="nav">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">Web</el-menu-item>
          <el-menu-item index="3">大数据</el-menu-item>
          <el-menu-item index="4">Java</el-menu-item>
          <el-menu-item index="5">Python</el-menu-item>
          <el-menu-item index="6">关于博主</el-menu-item>
        </el-menu>
      </div>
      <!-- 登录注册 -->
      <div class="reg-and-login">
        <el-button type="text">登录</el-button>
        <el-button type="text">注册</el-button>
      </div>
    </div>

    <!-- 主体 -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 200px;
    background-color: #fff;
  }
</style>
