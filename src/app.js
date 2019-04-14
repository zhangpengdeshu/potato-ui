import Vue from 'vue'
import Button from './button'
import Input from './input'
import Row from './row'
import Col from './col'
Vue.component('g-button', Button)
Vue.component('g-input', Input)
Vue.component('g-row', Row),
Vue.component('g-col', Col)
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