export const on = (function () {
    if (document.addEventListener) {
        return function (element, event, handler) {
            element.addEventListener(event, handler, false)
        }
    }else {
        return function (element, event, handler) {
            element.attachEvent('on' + event, handler)
        }
    }
})();

export const off = (function () {
    if (document.removeEventListener) {
        return function (element, event, handler) {
            element.removeEventListener(event, handler, false)
        }
    } else {
        return function (element, event, handler) {
            element.detachEvent('on' + event, handler)
        }
    }
})();


// Find components upward
function findComponentUpward (context, componentName, componentNames) {
    if (typeof componentName === 'string') {
        componentNames = [componentName];
    } else {
        componentNames = componentName;
    }

    let parent = context.$parent;
    let name = parent.$options.name;
    while (parent && (!name || componentNames.indexOf(name) < 0)) {
        parent = parent.$parent;
        if (parent) name = parent.$options.name;
    }
    return parent;
}
export {findComponentUpward};

// Find component downward
export function findComponentDownward (context, componentName) {
    const childrens = context.$children;
    let children = null;

    if (childrens.length) {
        for (const child of childrens) {
            const name = child.$options.name;
            if (name === componentName) {
                children = child;
                break;
            } else {
                children = findComponentDownward(child, componentName);
                if (children) break;
            }
        }
    }
    return children;
}