import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const history = createWebHistory()

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('../views/cloud/home/index.vue'),
    },
    {
        path: '/tools',
        component: () => import('../views/cloud/tools/index.vue'),
    },
    {
        path: '/pipelines',
        component: () => import('../views/cloud/pipelines/index.vue'),
    },
    {
        path: '/account',
        component: () => import('../views/cloud/account/index.vue'),
    },
    {
        path: '/system',
        redirect: '/system/dashbord',
        children: [
            {
                path: '/system/dashbord',
                component: () => import('../views/system/dashbord/index.vue')
            },
            {
                path: '/system/users',
                component: () => import('../views/system/users/index.vue')
            },
            {
                path: '/system/roles',
                component: () => import('../views/system/roles/index.vue')
            },
            {
                path: '/system/tools',
                component: () => import('../views/system/tools/index.vue')
            },
            {
                path: '/system/permissions',
                component: () => import('../views/system/permissions/index.vue')
            },
            {
                path: '/system/dicts',
                component: () => import('../views/system/dicts/index.vue')
            },
            {
                path: '/system/files',
                component: () => import('../views/system/files/index.vue')
            },
            {
                path: '/system/genomes',
                component: () => import('../views/system/genomes/index.vue')
            },
        ]
    },
    {
        path: '/analysis',
        redirect: '/analysis/task',
        children: [
            {
                path: '/analysis/task',
                component: () => import('../views/analysis/task/index.vue')
            },
            {
                path: '/analysis/mydata',
                component: () => import('../views/analysis/mydata/index.vue')
            },

        ]
    }
]

const router = createRouter({
    routes,
    history,
})


export default router