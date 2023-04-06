import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/styles.css'
import App from './App.vue'
import router from './router'
import piniaPersist from 'pinia-plugin-persist'

import './assets/main.css'

const app = createApp(App)

app.use(router)

const pinia = createPinia()
pinia.use(piniaPersist)

app.use(pinia)

app.mount('#app')
