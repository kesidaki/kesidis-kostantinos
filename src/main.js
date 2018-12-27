import '@fortawesome/fontawesome-free/css/all.css'
import './assets/scss/app.scss'

import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
