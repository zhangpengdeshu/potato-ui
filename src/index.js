import Button from './packages/button'
import ButtonGroup from './packages/button-group';
import Row from './packages/row';
import Col from './packages/col';

const components = {
    PoButton: Button,
    PoButtonGroup: ButtonGroup,
    PoRow: Row,
    PoCol: Col,
}

const install = function (Vue, options = {}) {
    Object.keys(components).forEach(key => {
        Vue.component(key, components[key]);
    });
}

export default install;