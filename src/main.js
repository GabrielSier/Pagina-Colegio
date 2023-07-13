import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Axios.defaults.headers.common['KEY'] = 'ABCD1234'

createApp(App).use(store).use(router).mount('#app')
