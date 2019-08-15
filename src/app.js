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
import Toast from './install/toast.js'
import Tabs from './tabs'
import TabNav from './tab-nav'
import TabPane from './tab-pane'
import TabBar from './tab-bar'
import Popover from './popover'
import CountUp from './count-up'

Vue.component('g-button', Button)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-sider', Sider)
Vue.component('g-header', Header)
Vue.component('g-container', Container)
Vue.component('g-footer', Footer)
Vue.component('g-tabs', Tabs)
Vue.component('g-tab-nav', TabNav)
Vue.component('g-tab-pane', TabPane)
Vue.component('g-tab-bar', TabBar)
Vue.component('g-popover', Popover)
Vue.component('g-countup', CountUp)
Vue.$toast = Vue.prototype.$toast = Toast
Vue.use(Toast)
new Vue({
    el: '#app',
    data: {
        activeName: "first",
        countUpOpts: {
            useEasing: true,
            useGrouping: true,
            separator: ",",
            decimal: ".",
            prefix: "￥",
            suffix: "￥",
            duration: "3"
          }
    },
    methods: {
        handlerChange (e) {
            console.log(e.target.value)
        },
        handleClick () {
            this.$toast('Hello World')
        }
    } 
})