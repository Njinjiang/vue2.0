<template>
    <div class="home">
        <div>
            <el-tree :data="data" show-checkbox node-key="label"  default-expand-all	 
                :props="defaultProps" ref="tree">
            </el-tree>
            <button @click="getInfo">获取数据</button>

            <el-tree :data="data1" show-checkbox node-key="label"  default-expand-all	 
                :props="defaultProps" ref="tree1">
            </el-tree>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: [
                    {
                        value: "1",
                        label: "测试组",
                        type: "group",
                        children: [
                            {
                                value: "2",
                                children: [
                                    {
                                        value: "3",
                                        label: "赵六",
                                        type: "manger"
                                    }
                                ],
                                label: "百度",
                                type: "custom"
                            },
                            {
                                value: "4",
                                label: "华为",
                                type: "custom",
                                children: [{
                                    value: "5",
                                    label: "张三",
                                    type: "manger"
                                }]
                            },
                            {
                                value: "6",
                                label: "阿里",
                                type: "custom",
                            },
                        ]
                    },
                ],
                defaultProps:{
                    label:"label",
                    value:"value"
                },
                data1:[],
            }
        },
        props: {
            msg: String
        },
        mounted() { },
        methods: {
            getInfo() {
                const _self = this
                const getC = this.$refs.tree.getCheckedNodes()
                const getChecked = this.$refs.tree.getCheckedNodes(true)
                console.log(getChecked)
                // 获取选中的值 回显
                this.arrItemName = []
                getChecked.forEach(itemlistcode => {
                    this.arrItemName.push(itemlistcode.label)
                })
                const getHC = this.$refs.tree.getHalfCheckedNodes()
                const selectedNodes = getHC.concat(getC)
                const selectedIds = new Set() // 记录选中的节点tree_id
                const usedIds = new Set() // 记录已经查询过的节点
                // 遍历初始化selectedIds
                for (const node of selectedNodes) {
                    selectedIds.add(node.$treeNodeId)
                }
                // 最终的结果数据用一个根节点存储, 为了对齐递归的数据结构
                const rootNode = {
                    treeNodeId: -1,
                    children: []
                }
                // 添加给parentNode节点一个新节点 node
                // 注意:node 的类型是原始的 tree 节点
                // 而parentNode 的类型是真正的结果节点
                function AddNode(node, parentNode) {
                    if (
                        !selectedIds.has(node.$treeNodeId) ||
                        usedIds.has(node.$treeNodeId)
                    ) {
                        return
                    }
                    usedIds.add(node.$treeNodeId) // 加过的要存入 usedIds 做标记
                    const realNode = {
                        children: [],
                        value: node.value,
                        label: node.label,
                        type: node.type
                        // 存储一下节点的数据
                    }
                    // // 添加子节点
                    if (node.children) {
                        for (const childNode of node.children) {
                            AddNode(childNode, realNode)
                        }
                    }
                    if (realNode.children.length === 0) {
                        delete realNode.children
                    }
                    if (!realNode.grade) {
                        delete realNode.grade
                    }
                    if (!realNode.desc) {
                        delete realNode.desc
                    }
                    parentNode.children.push(realNode)
                }
                for (const node of selectedNodes) {
                    AddNode(node, rootNode)
                }
                const result = rootNode.children
                console.log("最终数据",result)
                this.data1 = result
            }

        }
    }
</script>

<style lang="scss" scoped>
    // 变量名：属性值
    $font1: 20px;

    // 样式混入
    @mixin box-style {
        color: aquamarine
    }

    .op {
        font-size: $font1;

        span {
            color: red;

            &:hover {
                @include box-style;
            }
        }
    }

    // 继承样式
    .od {
        @extend .op;
    }

    @for $i from 6 through 16 {
        .fontSize#{$i} {
            font-size: 2px * $i;
        }
    }

</style>