<template>
    <div class="home">
        <h3>Transfer</h3>
      <el-transfer filterable :titles=titles :filter-method="filterMethod" filter-placeholder="请输入城市拼音" v-model="array"
        @change="getValue" :data="data">
      </el-transfer>
      <div v-for="item of list">
        <el-checkbox v-model="item.bob" :true-label="1" :false-label="0"  @change="changeValue(item)">备选项</el-checkbox>
      </div>
    </div>
  </template>
  
  <script>
    export default {
      data() {
        const generateData = _ => {
          const data = [];
          const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
          const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
          cities.forEach((city, index) => {
            data.push({
              label: city,
              key: index,
              pinyin: pinyin[index]
            });
          });
          console.log(data);
          return data;
        };
        return {
          checked:"0",
          data: generateData(),
          submitArray: [],
          array: [],
          flag:false,
          titles: ['可选', '已选'],
          list:[],
          filterMethod(query, item) {
            return item.pinyin.indexOf(query) > -1;
          }
        }
      },
      props: {
        msg: String
      },
      mounted(){
        let _this=this;
        setTimeout(function(){
          _this.list=[
          {bob:0},
          {bob:0},
          {bob:0},
          {bob:0},
          {bob:0},
          {bob:0},
          {bob:0},
          {bob:0},
          {bob:0}
        ]
        },3000)
      },
      methods: {
        changeValue(item){
          console.log(item.bob)
        },
        getValue(value) {
          this.submitArray = [];
          this.data.forEach((item, index) => {
            if (this.data[value[index]])
              this.submitArray.push(this.data[value[index]])
          })
          console.log(this.submitArray);
        },
        getValues() {
            let _this=this;
            _this.data.forEach(el => {
                el.label=el.custom;
                el.children = _this.editData(el.children)
             });
             _this.data=JSON.parse(JSON.stringify(_this.data));
             console.log(_this.data);
             _this.$forceUpdate()
          },
          editData(children){
             children.forEach(el => {
                el.label=el.custom;
             });
             children=JSON.parse(JSON.stringify(children));
             return children
          },
      }
    }
  </script>
  
  <style scoped></style>