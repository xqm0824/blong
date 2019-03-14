<template>
    <div class="userface">
      <el-upload
        class="upload-demo"
        action="http://116.62.147.91:3000/upload"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList2"
        list-type="picture"
        :on-success = "onSuccess"
       
        >
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </div>
  </template>
  
<script>
 import { mapState } from "vuex";
 import { changeImg } from "@/libs/tool";
  export default {
    data() {
      return {
        fileList2: [{
          name: '默认.jpeg', 
          url: changeImg(this.info)
        }]
      };
    },
    computed: {
      ...mapState({
        info: state => state.info
      })
    },
    mounted(){
      this.initAvatar()
    },
    methods: {
      initAvatar(){
        this.fileList2[0].url = changeImg(this.info)
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      onSuccess() {
        console.log(file);
      }
    }
  }
</script>
  
<style lang="scss">
  .main {
    padding: 0px;
  }
</style>