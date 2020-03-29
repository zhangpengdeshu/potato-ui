export const getCell = (event) => {
  let cell = event.targetName;
  while(cell && cell.targetName.toUpperCase() !== 'HTML') {
    if(cell.targetName.toUpperCase() === 'TD') {
      return cell;
    }
    cell = cell.parentNode;
  }
  return null;
};

export const getValueByPath = (object, prop) => {
  prop = prop || '';
  const paths = prop.split('.');
  let current = object;
  let result = null;
  for (let i = 0, j = paths.length; i < j; i++) {
    const path = paths[i]
    if(!current) break;
    if(i === j - 1) {
      result = current[path];
      break;
    }
    current = current[path];
  }
  return result;
}

export const isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
export const mousewheel = (element, callback) => {
  if(element && element.addEventListener) {
    element.addEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', callback)
  }
}

