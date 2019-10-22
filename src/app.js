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
import Tabs from './tabs'
import TabNav from './tab-nav'
import TabPane from './tab-pane'
import TabBar from './tab-bar'
import Popover from './popover'
import CountUp from './count-up'
import { Collapse, CollapseItem } from './collapse'

import Toast from './plugins/toast'

Vue.component('g-button', Button);
Vue.component('g-input', Input);
Vue.component('g-row', Row);
Vue.component('g-col', Col);
Vue.component('g-layout', Layout);
Vue.component('g-sider', Sider);
Vue.component('g-header', Header);
Vue.component('g-container', Container);
Vue.component('g-footer', Footer);
Vue.component('g-tabs', Tabs);
Vue.component('g-tab-nav', TabNav);
Vue.component('g-tab-pane', TabPane);
Vue.component('g-tab-bar', TabBar);
Vue.component('g-popover', Popover);
Vue.component('g-countup', CountUp);
Vue.component('g-collapse', Collapse);
Vue.component('g-collapse-item', CollapseItem);
Vue.use(Toast)
new Vue({
    el: '#app',
    data: {
        activeName: "first"
    },
    created () {
      this.$toast('hello world', {
          closeButton: {
              text: '我知道了',
              callback () {
                  console.log('用户说他知道了')
              }
          }
      })
    },
    methods: {
        handlerChange (e) {
            console.log(e.target.value)
        }
    }
})
