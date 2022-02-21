// Test application main entry point

import { createApp } from 'vue'
import plugin from './index'

import './main.scss'
import App from './App.vue'

const app = createApp(App)
app.use(plugin)
app.mount('#app')
