import { createApp } from 'vue'

import 'vue-segments/dist/style.css'
import segments from 'vue-segments'

import App from './App.vue'

createApp(App)
  .use(segments)
  .mount('#app')
