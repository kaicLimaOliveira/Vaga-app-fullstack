import { createRouter, createWebHistory } from "vue-router";
import Home from '@/components/views/Home.vue'
import PublicarVaga from '@/components/views/PublicarVaga.vue'

const routes = [
    { 
        path: '/',
        name: 'Home', 
        component: Home
    },
    { 
        path: '/cadastro', 
        name: 'Cadastro', 
        component: PublicarVaga
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
