require('./bootstrap');
window.Vue = require('vue');

import router from './routes/routes'
import store from './vuex/store'

// GLOBAL COMPONENTS
Vue.component("test-component", require("./components/TestComponent.vue"));

const app = new Vue({
    router,
    store,
    el: '#app'
});
