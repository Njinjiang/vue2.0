<template>
  <div class="home">
    <h3>组件</h3>
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

    <el-divider></el-divider>

    <h3>函数</h3>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-link type="primary"><router-link to="/array">数组</router-link></el-link>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-link type="primary"><router-link to="/object">对象</router-link></el-link>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
    color: #fff;
    :hover{
      text-decoration: none;
    }
  }
  .router-link-active {
    text-decoration: none;
  }
  .el-row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    border-radius: 4px;
    margin-bottom: 20px;
  }

  .bg-purple-dark {
    background: #0f1318;
  }

  .bg-purple {
    background: #0f1318;
  }

  .bg-purple-light {
    background: #0f1318;
  }

  .grid-content {
    text-align: center;
    color: #ccc;
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .grid-content {
    height: 40px;
    line-height: 40px;
  }
</style>