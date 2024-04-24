<template>
    <div class="home">
        <h3>Object</h3>
    </div>
</template>
<script>    
export default {
        data() {
            return {
                 list:[
                    {number:1},
                    {number:2},
                    {number:3},
                    {number:4},
                    {number:5},
                    {number:6}
                 ]
            }
        },
        props: {
            msg: String
        },
        mounted() {
            const find=this.list.find(item=>item.number>3)
            console.log("find",find);//返回满足条件的第一个元素

            const filter=this.list.filter(item=>item.number>3)
            console.log("filter",filter);//返回满足条件的元素组成的新数组

            const map=this.list.map(item=>item.number*3)
            console.log("map",map);//返回满足条件的元素组成的新数组
        },
        methods: {
          
        }
    }
</script>
<style scoped></style>