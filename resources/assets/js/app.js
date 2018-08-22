require('./bootstrap');
window.Vue = require('vue');

import router from './routes/routes'
import store from './vuex/store'

Vue.component("app-component", require("./components/AppComponent"))

const app = new Vue({
    router,
    store,
    el: '#app'
});
