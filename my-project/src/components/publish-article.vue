<template>
  <div class="publish-article">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>文章编辑</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="title">
        <el-form 
        :inline="true" 
        :model="formInline" 
        class="demo-form-inline" 
        :rules="rules" 
        ref="formInline"
        >
          <el-form-item label="文章分类" prop="type">
            <el-select v-model="formInline.type" placeholder="文章分类">
              <el-option label="vue" value="vue"></el-option>
              <el-option label="react" value="react"></el-option>
              <el-option label="node" value="node"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="标题" prop="title">
            <el-input v-model="formInline.title" placeholder="请输入标题"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="tinymce">

      </div>
      <div class="btn-wrap">
          <el-button type="primary" @click="publish">立即发布</el-button>
      </div>
  </div>
</template>

<script>
  
  export default {
  data() {
    return {
      formInline: {
        type: "",
        title: ""
      },
      rules: {
        type: [{ required: true, message: "请选择文章分类", trigger: "blur" }],
        title: [{ required: true, message: "请输入文章标题", trigger: "blur" }]
      },
    }
   },
   methods:{
    publish(){
      this.$refs.formInline.validate((valid) => {
        if (valid) {
          alert('发布成功');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
   }
  }
</script>

<style lang="scss">
  .publish-article {
    background: #fff;
    padding: 20px;
    .title {
      margin-top: 20px;
    }
  }
</style>