<template>
  <el-dialog
  :visible.sync="dialogVisible" width="30%" center>
    <Login @closeModel="closeModel" :valueNum = "valueNum"></Login>
  </el-dialog>
</template>
<script >
import Login from "./login"
export default {
  data() {
    return {
      dialogVisible: false,
      valueNum: 0
    };
  },
  methods: {
    init(val) {
       this.dialogVisible = true;
       this.$nextTick(() => {
        this.valueNum = val;
       })
    },
    closeModel() {
      this.dialogVisible = false;
    }
  },
  components:{
    Login
  }
}
</script>
<style lang="scss" scoped>

</style>