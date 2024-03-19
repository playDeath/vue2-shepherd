import Vue from 'vue'
import App from './App.vue'
import "shepherd.js/dist/css/shepherd.css"
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
