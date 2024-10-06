import { createRouter, createWebHistory } from 'vue-router';
import SPLayout from '@/layouts/SinglePageLayout.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: SPLayout,
            children: [
                {
                    path: '',
                    name: 'Home',
                    component: () => import('@/views/HomePage.vue')
                },
            ],
        },
        {
            path: '/:catchAll(.*)',
            name: 'NotFound',
            component: () => import('@/views/NotFound.vue')
        },
    ],
    scrollBehavior(to) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        } else {
            return {
                top: 0,
                behavior: 'smooth',
            }
        }
    }
});

export default router;