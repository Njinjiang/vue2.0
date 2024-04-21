<template>
    <div class="home">
        <h3>tree递归处理数据</h3>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

            <div v-for="(item,index) in ruleForm.data" :key="index">
                <el-form-item label="姓名" :prop="`data.${index}.name`" :rules="rules.name">
                    <el-input v-model="item.name"></el-input>
                </el-form-item>900009
                <el-form-item label="年龄" :prop="`data.${index}.age`" :rules="rules.age">
                    <el-input v-model="item.age"></el-input>
                </el-form-item>
            </div>
            

            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button type="primary" @click="clearForm">清除验证</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>

        </el-form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                ruleForm: {
                    name: '',
                    age: '',
                    data:[
                    {name:"牛锦江1",age:""},
                    {name:"",age:"18"},
                    {name:"牛锦江3",age:""},
                    {name:"牛锦江4",age:"29"},
                ]
                },
                rules: {
                    name: [
                        { required: true, message: '请输入姓名', trigger: 'change' },
                    ],
                    age: [
                        { required: true, message: '请输入年龄', trigger: 'change' },
                    ],
                },
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        console.log(this.ruleForm);
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            clearForm(){
                this.$refs.ruleForm.clearValidate();
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>
<style lang="scss" scoped>

  

</style>