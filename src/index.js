import Button from './packages/button'
import ButtonGroup from './packages/button-group';

const components = {
    PoButton: Button,
    PoButtonGroup: ButtonGroup,
}

const install = function (Vue, options = {}) {
    Object.keys(components).forEach(key => {
        Vue.component(key, components[key]);
    });
}

export default install;