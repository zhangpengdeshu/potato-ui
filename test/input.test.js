const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在', () => {
        expect(Input).to.exist
    })
    beforeEach(() => {
        console.log('每个实例执行前都会调用')
    })
    afterEach(() => {
        console.log('每个实例执行后都会调用')
    })
    it('接收 value', () => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
            propsData: {
                value: '1234'
            }
        }).$mount()
        const inputElement = vm.$el.querySelector('input')
        expect(inputElement.value).to.equal('1234')
    })
    it('接受 disabled', () => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
            propsData: {
                disabled: true
            }
        }).$mount()
        const inputElement = vm.$el.querySelector('input')
        expect(inputElement.disabled).to.equal(true)
    })
})