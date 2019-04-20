import Toast from './toast'
export default {
    install (Vue, options) {
        Vue.prototype.$toast = function (message) {
            // const div = document.createElement('div')
            // div.textContent = message
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor()
            toast.$mount()
            toast.$slots.default = [message]
            document.body.appendChild(toast.$el)

        }
    }
}