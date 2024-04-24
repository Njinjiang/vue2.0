//引入vue
import Vue from 'vue';
//引入vue-router
import VueRouter from 'vue-router';
//第三方库需要use一下才能用
Vue.use(VueRouter)

//定义routes路由的集合，数组类型

//单个路由均为对象类型，path代表的是路径，component代表组件
const routes=[
    {
        path:'/',
        name:'home',
        component:()=>import('@/view/home.vue')
    },
    {
        path:'/tree',
        name:'tree',
        component:()=>import('@/view/component/tree.vue')
    },
    {
        path:'/form',
        name:'form',
        component:()=>import('@/view/component/form.vue')
    },
    {
        path:'/transfer',
        name:'transfer',
        component:()=>import('@/view/component/transfer.vue')
    },
    {
        path:'/checkbox',
        name:'checkbox',
        component:()=>import('@/view/component/checkbox.vue')
    },
    {
        path:'/radio',
        name:'radio',
        component:()=>import('@/view/component/radio.vue')
    },
    {
        path:'/array',
        name:'array',
        component:()=>import('@/view/func/array.vue')
    },
    {
        path:'/object',
        name:'object',
        component:()=>import('@/view/func/object.vue')
    },
]

//实例化VueRouter并将routes添加进去
const router=new VueRouter({
//ES6简写，等于routes：routes
    routes
});

//抛出这个这个实例对象方便外部读取以及访问
export default router
