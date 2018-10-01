import Vue from 'vue'
import Button from './button'
import Input from './input'
Vue.component('g-button', Button)
Vue.component('g-input', Input)
new Vue({
    el: '#app',
    methods: {
        handlerChange (e) {
            console.log(e.target.value)
        }
    }  
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