<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
      <el-link type="primary"><router-link to="/tree">树状递归</router-link></el-link>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
      <el-link type="primary"><router-link to="/form">表单循环验证</router-link></el-link>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
      <el-link type="primary"><router-link to="/transfer">穿梭树</router-link></el-link>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
      <el-link type="primary"><router-link to="/tree">树状数据</router-link></el-link>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
      <el-link type="primary"><router-link to="/checkbox">复选框</router-link></el-link>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
      <el-link type="primary"><router-link to="/radio">单选框</router-link></el-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return{

      }
    },
    methods: {
     
    }
  }
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
    margin-bottom:20px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    text-align: center;
    color:#ccc;
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .grid-content{
    height:40px;
    line-height: 40px;
  }
</style>