import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './interceptors/axios'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"   
import "./assets/styles.css"
import './index.css'


createApp(App).use(store).use(router).mount('#app')
