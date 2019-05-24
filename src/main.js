import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Bootstrap
require('bootstrap');

// Global jquery
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

// Nice select
require('@/assets/nice-select/jquery.nice-select.min.js');
require('@/assets/nice-select/nice-select.css')

// Hiweb base registration
import hiwebBase from 'hiweb-vue-base-storefront';

// Import theme options
import options from '../options.json';

Vue.config.productionTip = false

Vue.use(hiwebBase, {
  store: store,
  options: options
});

// Global components
import Breadcrumb from '@/components/Breadcrumb';
import Slide from '@/widgets/Slide';
import ProductBox from '@/components/ProductBox';
import Loader from '@/components/Loader';

Vue.component('breadcrumb', Breadcrumb);
Vue.component('loader', Loader);
Vue.component('slide', Slide);
Vue.component('product-box', ProductBox);

// Init vue app
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
