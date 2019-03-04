<template>
  <div class="login">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="登陆" name="login">
        <el-form
          :model="ruleForm1"
          status-icon
          :rules="rules1"
          ref="ruleForm1"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm1.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm1.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm1')">提交</el-button>
            <el-button @click="resetForm('ruleForm1')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="注册" name="reg">
        <el-form
          :model="ruleForm2"
          status-icon
          :rules="rules2"
          ref="ruleForm2"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="username">
            <el-input v-model.number="ruleForm2.username"></el-input>
          </el-form-item>
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
    </el-tabs>
  </div>
</template>

<script>
import axios from "axios";
import { login,reg } from "@/api/user.js";
import { mapState, mapMutations } from "vuex";
export default {
  name: 'login',
  props: ["valueNum"],
  data() {
    var checkUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm1: {
        pass: "",
        username: ""
      },
      ruleForm2: {
        pass: "",
        checkPass: "",
        username: ""
      },
      rules1: {
        pass: [{ validator: validatePass, trigger: "blur" }]
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        username: [{ required: true, trigger: "blur" }]
      },
      activeName: "login"
    };
  },
  methods: {
    ...mapMutations({
      setUsername: "setUsername",
      setLogin: "setLogin"
    }),
    handleClick(tab, event) {

    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if( formName === "ruleForm1"){
            login({
              username: this.ruleForm1.username,
              password: this.ruleForm1.pass
            })
            .then(res => {
              if(res.data.status === "success"){
                  this.setUsername(this.ruleForm1.username);
                  this.setLogin(true);
                this.$message({
                  message: res.data.data,
                  type: "success"
                });
                this.$router.push({name: 'main'})
                this.$emit("closeModel")
              }else {
                this.$message({
                  message: res.data.data,
                  type: "error"
                });
              }
            })
            .catch(err => {
              console.log(err)
              this.$message({
                message: "服务器错误",
                type: "error"
              });
            })
          }else {
            reg({
              username: this.ruleForm2.username,
              password: this.ruleForm2.pass
            })
            .then(res => {
              this.$message({
                  message: res.data.data,
                  type: "success"
              });
              this.activeName = "login"
            })
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  watch: {
    valueNum(Nval,Oval) {
      if (Nval === 0) {
        this.activeName = "login";
      } else {
        this.activeName = "reg";
      }
    }
  }
}
</script>


<style scoped lang="scss">
  .login {
    margin: 0 auto;
    .el-tabs {

      margin: 0 auto;
      .el-input {

      }
    }
  }
</style>
