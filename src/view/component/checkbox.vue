<template>
    <div class="home">
        <h3>Checkbox</h3>
        <div >
            <el-checkbox v-model="item.checked" :true-label="1" :false-label="0" v-for="item of list" @change="changeValue(item)">
                备选项
            </el-checkbox>
        </div>
        <el-button type="primary" plain @click="getData" >获取数据</el-button>
    </div>
</template>
<script>    
export default {
        data() {
            return {
                checked: "0",
                 flag: false, 
                 list: [],
            }
        },
        props: {
            msg: String
        },
        mounted() {
                
        },
        methods: {
            getData(){
                this.list = [{ bob: 0 }, { bob: 0 }, { bob: 0 }, { bob: 0 }, { bob: 0 }, { bob: 0 }, { bob: 0 }, { bob: 0 }, { bob: 0 }]
                this.list.forEach(item=>{
                    this.$set(item, 'checked', 1)
                })
                console.log("数据获取到了",this.list);
            },
            changeValue(item) {
                console.log(item.bob)
            },
        }
    }
</script>
<style scoped></style>