import { createApp } from 'vue'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

require("@/assets/bulma.scss")
require('@/services/axios.js')

const app = createApp(App)

app.use(VueSweetalert2);

app.mount('#app');
