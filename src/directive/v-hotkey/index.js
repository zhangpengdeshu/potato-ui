import { bindEvent, unbindEvent } from './main.js';
const buildDirective = (alias = {}) => {
  return {
    bind(el, binding) {
      bindEvent(el, binding);
    },
    componentUpdate(el, binding) {
      if(binding.value !== binding.oldValue) {
        unbindEvent(el)
        bindEvent(el, binding, alias)
      }
    },
    unbind: unbindEvent,
  }
}


const plugin = {
  install(Vue, alias = {}) {
    Vue.directive('hotkey', buildDirective(alias))
  },
  directive: buildDirective()
};

export default plugin;