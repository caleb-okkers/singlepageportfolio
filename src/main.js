import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/boostrap.min.css'
import bootstrap from

createApp(App).use(store).use(router).mount('#app')
