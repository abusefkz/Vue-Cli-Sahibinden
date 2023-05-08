import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/HOME/homePage.vue"
import newPage from "@/NEWPAGE/newPage.vue"

const routes = [
    {
        name: 'homePage',
        path: '/',
        component: Home
    },
    {
        name: 'newPage',
        path: '/new',
        component: newPage
    }
];

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router;