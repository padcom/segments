import { createApp } from 'vue'

import 'segments/dist/style.css'
import segments from 'segments'

import App from './App.vue'

createApp(App)
  .use(segments)
  .mount('#app')
