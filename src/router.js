import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Main from './components/main/main'

export default new Router({
    routes: [
        {
            path: '/', name: 'home', component: Main
        }
    ]
})