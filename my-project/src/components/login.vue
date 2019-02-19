<template>
  <div class="login">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="登录" name="login">
        
        <el-form 
          :model="ruleForm2"  
          status-icon :rules="rules2" 
          ref="ruleForm2" label-width="100px" 
          class="demo-ruleForm"
        >
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
          </el-form-item>
        </el-form>
       
      </el-tab-pane>
      <el-tab-pane label="注册" name="reg">
        
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      ruleForm1: {
        pass: " ",
        username: ""
      },
      ruleForm2: {
        pass: "",
        checkPass: "",
        username: ""
      },
      activeName: 'login'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
