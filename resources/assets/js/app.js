require('./bootstrap');
window.Vue = require('vue');

import router from './routes/routes'
import store from './vuex/store'

Vue.component("admin-component", require("./components/admin/AdminComponent"))

const app = new Vue({
    router,
    store,
    el: '#app'
});
