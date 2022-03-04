import { createApp } from 'vue'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { router } from '@/routers/routes'
import mitt from 'mitt'

require('@/assets/bulma.scss')

const app = createApp(App)
const emitter = mitt()

app.config.globalProperties.emitter = emitter
app.use(VueSweetalert2);
app.use(router)
app.mount('#app');

