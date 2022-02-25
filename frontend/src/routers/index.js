import { createRouter, createWebHistory } from "vue-router";
import Home from '@/components/views/Home.vue'
import PublicarVaga from '@/components/views/PublicarVaga.vue'


export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/Home',
            name: 'Home', 
            component: Home
        },
        { 
            path: '/Cadastro', 
            name: 'Cadastro', 
            component: PublicarVaga
        },
    ]
});
