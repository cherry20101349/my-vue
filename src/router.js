import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Main from './components/main/main'
console.log(process.env.NODE_ENV)

export default new Router({
    mode: 'history',
    // base: '/mc_mobile',
    routes: [
        {
            path: '/', name: 'home', component: Main
        }
    ]
})