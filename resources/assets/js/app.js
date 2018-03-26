require('./bootstrap');
window.Vue = require('vue');

import router from './routes/routes'

// GLOBAL COMPONENTS
Vue.component("test-component", require("./components/TestComponent.vue"));

const app = new Vue({
    router,
    el: '#app'
});
