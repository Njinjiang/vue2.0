<template>
    <div class="home">
        <h3>checkbox</h3>

        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>

        <br>

        <el-radio-group v-model="radioGroup">
                <el-radio :label="3">备选项</el-radio>
                <el-radio :label="6">备选项</el-radio>
                <el-radio :label="9">备选项</el-radio>
        </el-radio-group>
    </div>
</template>
<script>    
export default {
        data() {
            return {
                 radio: "1",
                 radioGroup:3
            }
        },
        props: {
            msg: String
        },
        mounted() {
            
        },
        methods: {
          
        }
    }
</script>
<style scoped></style>