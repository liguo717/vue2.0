// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from '../../router/index'

Vue.config.productionTip = false
require("!style-loader!css-loader!less-loader!../../assets/css/layout.less")
    /* eslint-disable no-new */
new Vue({
    el: '#wrapper',
    router,
    data: {

    }
})