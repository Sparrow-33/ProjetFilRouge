import { createApp } from 'vue'
import router from '../router'
import Toaster from '@meforma/vue-toaster';

import App from './App.vue'
import './assets/tailwind.css'

createApp(App).use(router).use(Toaster).mount('#app')
