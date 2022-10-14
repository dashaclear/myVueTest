import VueRouter from 'vue-router'
import Blue from "../pages/Blue.vue"
import Red from "../pages/Red.vue"
import LiBai from '../pages/LiBai.vue'
import WangBo from '../pages/WangBo.vue'
export default new VueRouter({
    routes: [
        {
            path: '/Red',
            component: Red
        },
        {
            path: '/Blue',
            component: Blue,
            children:[//一级路由的子路由的path不用再写、
                {
                    path:'LiBai',
                    component:LiBai
                },
                {
                    path:'WangBo',
                    component:WangBo
                }
            ]
        },
    ],
})