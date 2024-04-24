<template>
    <div class="home">
        <h3>checkbox</h3>
        <div v-for="item of list"><el-checkbox v-model="item.bob" :true-label="1" :false-label="0"
                @change="changeValue(item)">备选项</el-checkbox></div>
    </div>
</template>
<script>    export default {
        data() {
            return {
                checked: "0", flag: false, list: [],
            }
        }
        ,
        props: {
            msg: String
        }
        ,
        mounted() {
            let _this = this;
            setTimeout(function () {
                _this.list = [{ bob: 0 }, { bob: 0 }, { bob: 0 }, { bob: 0 }, { bob: 0 }, { bob: 0 }, { bob: 0 }, { bob: 0 }, { bob: 0 }]
            }, 3000)
        }
        ,
        methods: {
            changeValue(item) {
                console.log(item.bob)
            }
            ,
        }
    }

</script>
<style scoped></style>