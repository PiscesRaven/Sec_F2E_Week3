import Vue from 'vue';
// import './service/YtApi.js';
import App from './App.vue';
import './assets/scss/mixin.scss';
import './assets/scss/main.scss';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
