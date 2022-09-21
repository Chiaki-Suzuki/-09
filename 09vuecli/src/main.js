import Vue from 'vue'
import App from './App.vue'
// vue-router
import router from './router'
// jQuery
import jQuery from 'jquery'
global.jquery = jQuery
global.$ = jQuery
window.$ = window.jQuery = require('jquery')
// jQueryプラグイン
import datepicker from 'date-picker/src/dp.js'
// ElementUI
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
import locale from 'element-ui/lib/locale/lang/ja'
import './plugins/element.js'
Vue.use(ElementUI, {locale});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
