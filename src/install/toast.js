import Vue from 'vue'
import toastComponent from '../toast.vue'
const ToastConstructor = Vue.extend(toastComponent)
let toastPool = []

const getAnInstance = () => {
    if (toastPool.length > 0) {
        let instance = toastPool[0]
        toastPool.splice(0,1)
        return instance
    }

    return new ToastConstructor({
        el: document.createElement('div')
    })
}

let returnAnInstance = instance => {
    if (instance) {
        toastPool.push(instance)
    }
}

const removeDom = event => {
    if (event.target.parentNode) {
        event.target.parentNode.removeChild(event.target)
    }
}

ToastConstructor.prototype.close = function () {
    this.visible = false;
    this.$el.addEventListener('transitioned', removeDom)
    this.closed = true;
    returnAnInstance(this)
}


let Toast = (options = {}) => {
    let duration = options.duration || 3000;
    let instance = getAnInstance();
    instance.closed = false;
    clearTimeout(instance.timer)
    instance.message = typeof options === 'string' ? options : options.message
    instance.position = options.position || 'middle'
    instance.className = options.className || ''
    instance.iconClass = options.iconClass || ''
    document.body.appendChild(instance.$el)
    Vue.nextTick(() => {
        instance.visible = true
        instance.$el.removeEventListener('transitioned', removeDom)
        duration && (instance.timer = setTimeout(() => {
            if (instance.closed) return
            instance.close() 
        }, duration))
    })
    return instance
}

export default Toast;