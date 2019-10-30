import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import fb from 'firebase/app'
import VueRouter from 'vue-router'
import router from './routes';
import store from './store'
import firebaseConfig from '../firebase.config'



Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
  created() {
    fb.initializeApp(firebaseConfig);
  }
}).$mount('#app')
