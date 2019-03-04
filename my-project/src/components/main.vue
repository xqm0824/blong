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
      <div class="reg-and-login" >
        <div class="user-info" v-if="hasLogin">
          <el-button type="text" >个人中心</el-button>
          <el-dropdown @command="logout">
            <span class="avatar-wrap">
              <img width="40" height="40" src="../assets/logo.png">
              <span>admin</span>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>退出用户</el-dropdown-item>
            </el-dropdown-menu>

          </el-dropdown>
        </div>
        <div v-else>
          <el-button type="text" @click="login">登录</el-button>
          <el-button type="text" @click="reg">注册</el-button>
        </div>
      </div>
    </div>
    <!-- 登录 and 注册 弹窗 -->
    <LoginAndReg ref="model"></LoginAndReg>
    <!-- home -->
    <router-view></router-view>
  </div>
</template>

<script>
  import LoginAndReg from "./login-and-reg.vue";
  import { mapState, mapMutations } from "vuex";
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    computed: {
      ...mapState({
        username: state => state.username,
        hasLogin: state => state.hasLogin
      })
    },
    methods: {
      ...mapMutations({
        setLogout: "setLogout"
      }),
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      login() {
        this.$refs.model.init(0);
      },
      reg(){
        this.$refs.model.init(1);
      },
      logout() {
        this.setLogout()
      }
    },
    components: {
      LoginAndReg
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
    .reg-and-login {
      .user-info {
        display: flex;
        .el-button {
          margin-right: 20px;
        }
        .avatar-wrap {
          display: flex;
          align-items: center;
          span {
            font-size: 14px;
            color: #606266;
          }
        }
      }
    }
  }
</style>
