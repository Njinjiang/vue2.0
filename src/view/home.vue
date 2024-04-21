<template>
  <div class="home">
    <el-link type="primary"><router-link to="/tree">树状数据</router-link></el-link>
    <el-transfer filterable :titles=titles :filter-method="filterMethod" filter-placeholder="请输入城市拼音" v-model="array"
      @change="getValue" :data="data">
    </el-transfer>
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
        data: generateData(),
        submitArray: [],
        array: [],
        titles: ['可选', '已选'],
        filterMethod(query, item) {
          return item.pinyin.indexOf(query) > -1;
        }
      }
    },
    props: {
      msg: String
    },
    methods: {
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