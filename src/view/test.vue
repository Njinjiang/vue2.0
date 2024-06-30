<template>
  <div class="testBox">
    <div class="testLeft">
      <el-input
        placeholder="输入关键字进行过滤"
        size="mini"
        v-model="filterText"
      ></el-input>
      <el-tree
        class="filter-tree"
        :data="data"
        size="mini"
        node-key="id"
        :default-expanded-keys="[1]"
        :highlight-current="true"
        :props="defaultProps"
        :filter-node-method="filterNode"
        ref="tree"
      >
      </el-tree>
    </div>
    <div class="testRight">
      <div class="testRightTitle">
        <p>标准数据集</p>
      </div>
      <div class="testContent">
        <div class="testContentTable">
          <el-form
            :inline="true"
            :model="formInline"
            class="demo-form-inline"
            size="mini"
          >
            <div>
              <el-form-item label="审批人">
                <el-input
                  clearable
                  v-model="formInline.user"
                  placeholder="审批人"
                ></el-input>
              </el-form-item>
              <el-form-item label="活动区域">
                <el-select v-model="formInline.region" clearable placeholder="活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </div>
            <el-form-item style="margin-right: 0">
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-form>
          <el-table :data="tableData" border stripe style="width: 100%" :loading="loading">
            <el-table-column fixed prop="date" label="日期"> </el-table-column>
            <el-table-column prop="name" label="姓名"> </el-table-column>
            <el-table-column prop="province" label="省份"> </el-table-column>
            <el-table-column prop="city" label="市区"> </el-table-column>
            <el-table-column prop="address" show-overflow-tooltip label="地址">
            </el-table-column>
            <el-table-column prop="zip" label="邮编"> </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button
                  @click="handleClick(scope.row)"
                  type="text"
                  size="small"
                  >查看</el-button
                >
                <el-button type="text" size="small">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>

          <el-pagination 
           background 
           class="pageBox"
           layout="prev, pager, next" 
           :total="1000">
          </el-pagination>

        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      loading:false,
      filterText: "",
      data: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1",
                },
                {
                  id: 10,
                  label: "三级 1-1-2",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1",
            },
            {
              id: 6,
              label: "二级 2-2",
            },
          ],
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1",
            },
            {
              id: 8,
              label: "二级 3-2",
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
      formInline: {
        user: "",
        region: "",
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
      ],
    };
  },
  watch: {
    filterText(val) {
      this.$refs.tree2.filter(val);
    },
  },
  mounted() {
    this.$refs.tree.setCurrentKey(1);
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      let _this=this;
      this.loading=true;
      setTimeout(function(){
        _this.loading=false;
      },1000)
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
  },
};
</script>
  
<style lang="scss" scoped>
.testBox {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  .testLeft {
    width: 200px;
    height: 100%;
    padding: 60px 10px;
    box-sizing: border-box;
    border-right: 1px solid #ebeef5;
  }
  .testRight {
    flex: 1;
    display: flex;
    flex-direction: column;
    .testRightTitle {
      width: 100%;
      height: 50px;
      box-sizing: border-box;
      line-height: 50px;
      padding: 0 10px;
      font-size: 16px;
      color: #fff;
      background: #409eff;
      font-weight: bold;
      border-bottom: 1px solid #ebeef5;
    }
    .testContent {
      background: #fafafa;
      flex: 1;
      box-sizing: border-box;
      overflow: hidden;
      padding: 8px;
      .testContentTable {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        background: #fff;
        padding: 8px;
        position:relative;
      }
    }
  }
}
::v-deep .el-table .el-table__cell {
  padding: 0;
  height: 33px;
  box-sizing: border-box;
}
::v-deep .el-table__header .el-table__cell {
  background: #e6f3ff;
}
::v-deep
  .el-tree--highlight-current
  .el-tree-node.is-current
  > .el-tree-node__content {
  background: #e6f3ff;
}
.el-form-item--mini.el-form-item,
.el-form-item--small.el-form-item {
  margin-bottom: 10px;
}
.el-form {
  display: flex;
  justify-content: space-between;
}
.filter-tree {
  margin-top: 20px;
}
.pageBox{
  position:absolute;
  right:10px;
  bottom:10px;
}
</style>