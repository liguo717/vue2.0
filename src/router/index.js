import Vue from 'vue'
import Router from 'vue-router'

import IndexPage from '../components/pages/index'
import Header from '../components/modules/header'
import Footer from '../components/modules/footer'

Vue.use(Router)

export default new Router({
    base: "",
    linkExactActiveClass: "active",
    routes: [{
            path: '/',
            name: 'index',
            components: {
                default: IndexPage,
                header: Header,
                footer: Footer
            }
        },
        {
            path: '*',
            name: 'index',
            components: {
                default: IndexPage,
                header: Header,
                footer: Footer
            }
        }
    ]
})