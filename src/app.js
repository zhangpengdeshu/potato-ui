import Vue from 'vue'
import Button from './button'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Container from './container'
import Footer from './footer'
Vue.component('g-button', Button)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-sider', Sider)
Vue.component('g-header', Header)
Vue.component('g-container', Container)
Vue.component('g-footer', Footer)
new Vue({
    el: '#app',
    data: {
        disabled: true,
        message: ''
    },
    methods: {
        handlerChange (e) {
            console.log(e.target.value)
        }
    }  
})