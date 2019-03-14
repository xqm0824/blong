<template>
  <div class="personal">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :router="true">
      <el-menu-item index="1" :route="{name:'user'}">
        <i class="el-icon-menu"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="2" :route="{name:'article'}">
        <i class="el-icon-menu"></i>
        <span slot="title">文章管理</span>
      </el-menu-item>
      <el-menu-item index="3" :route="{name:'comment'}">
        <i class="el-icon-document"></i>
        <span slot="title">评论管理</span>
      </el-menu-item>
      <el-menu-item index="4" :route="{name:'userface'}">
        <i class="el-icon-setting"></i>
        <span slot="title">头像上传</span>
      </el-menu-item>
    </el-menu>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss">
  .personal {
    background-color: #fff;
    display: flex;
    .el-menu {
      width:200px;
    }
    .right {
      padding: 10px;
      flex: 1;
    }
  }
</style>