import Vue from 'vue'
import App from './App.vue'
import PersonalComponents from '../dist/personal-component.common'

Vue.config.productionTip = false
Vue.use(PersonalComponents)
new Vue({
  render: h => h(App),
}).$mount('#app')
