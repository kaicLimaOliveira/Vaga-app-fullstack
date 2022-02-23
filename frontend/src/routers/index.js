import { createRouter, createWebHistory } from "vue-router";
import Home from '@/components/views/Home.vue'
import PublicarVaga from '@/components/views/PublicarVaga.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '', name: 'Home', component: Home},
        { path: '', name: 'Cadastro', component: PublicarVaga}
    ],
    strict: true
});

export default router;