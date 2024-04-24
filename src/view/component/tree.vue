<template>
    <div class="home">
      <h3>Tree</h3>
      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    </div>
  </template>
  
  <script>
    export default {
      data() {
         return{
          data:[
          {
          custom: '一级 1',
          children: [{
            custom: '二级 1-1',
            children: [{
              custom: '三级 1-1-1'
            }]
          }]
        }, {
          custom: '一级 2',
          children: [{
            custom: '二级 2-1',
            children: [{
              custom: '三级 2-1-1'
            }]
          }, {
            custom: '二级 2-2',
            children: [{
              custom: '三级 2-2-1'
            }]
          }]
        }, {
          custom: '一级 3',
          children: [{
            custom: '二级 3-1',
            children: [{
              custom: '三级 3-1-1'
            }]
          }, {
            custom: '二级 3-2',
            children: [{
              custom: '三级 3-2-1'
            }]
          }]
        }
          ],
          defaultProps: {
          children: 'children',
          label: 'label'
        }
         }
      },
      props: {
        msg: String
      },
      mounted(){
           this.getValue(this.data);
      },
      methods: {
        getValue(data) {
          let _this=this;
          data.forEach(el => {
              el.label=el.custom;
              // 此处可以递归处理每一层数据
              if(el.children && el.children.length>0){
                this.getValue(el.children)
              }
           });
           _this.data=JSON.parse(JSON.stringify(data));
           _this.$forceUpdate()
        },
        handleNodeClick(data) {
          //获取当前点击的树节点
           console.log(data);
        }
      }
    }
  </script>
  
  <style lang="scss"  scoped>
      // 变量名：属性值
      $font1:20px;
      // 样式混入
      @mixin box-style {
	     color:aquamarine
      }
      .op{ 
        font-size:$font1;
        span{ 
          color:red;
          &:hover{
            @include box-style;
          }
        }
      }
      // 继承样式
      .od{
        @extend .op;
      }

      @for $i from 6 through 16 {
	       .fontSize#{$i} {
		      font-size: 2px * $i;
     	  }
      }

  </style>