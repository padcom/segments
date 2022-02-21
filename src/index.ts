// Library entry point
import { App } from 'vue'

import { default as Column } from './components/Column.vue'
import { default as Panel } from './components/Panel.vue'

import './main.scss'

export default {
  install(Vue: App<Element>) {
    Vue.component('Column', Column)
    Vue.component('Panel', Panel)
  }
}
