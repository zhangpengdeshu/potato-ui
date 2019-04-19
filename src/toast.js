import Vue from 'vue'
import Toast from './toast.vue'
const ToastConstructor = Vue.extend(Toast)

const removeDom = event => {
    event.target.parentNode.removeChild(event.target)
}

ToastConstructor.prototype.close = () => {
    this.visible = false;
    this.$el.addEventListener('transitionend', removeDom)
}
const Toast = (options = {}) => {
    const instance = new ToastConstructor().$mount(document.createElement('div'))
    let duration = options.duration || 2500
    instance.message = typeof options === 'string' ? options : options.message
    instance.position = options.position || 'middle'
    document.body.appendChild(instance.$el)
    instance.disabled = true;
    Vue.nextTick(() => {
        instance.timer = setTimeout(() => {
            instance.close()
        }, duration)
    })
    return instance
}

export default instance