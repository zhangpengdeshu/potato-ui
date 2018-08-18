import Vue from 'vue'
import Button from './button'
Vue.component('g-button', Button)
new Vue({
    el: '#app'
})

// // 单元测试
// import chai from 'chai'
// const expect = chai.expect
//
// {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Button)
//     const button = new Constructor({
//         propsData: {
//             icon: 'setting'
//         }
//     })
//     button.$mount(div)
//     let useElement = button.$el.querySelector('use')
//     console.log(useElement)
//     expect(useElement.getAttribute('xlink:href')).to.eq('#icon-setting')
//     button.$el.remove()
//     button.$destroy()
// }
//
// {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Button)
//     const button = new Constructor({
//         propsData: {
//             icon: 'loading'
//         }
//     })
//     button.$mount(div)
//     let useElement = button.$el.querySelector('use')
//     console.log(useElement)
//     expect(useElement.getAttribute('xlink:href')).to.eq('#icon-loading')
//     button.$el.remove()
//     button.$destroy()
// }