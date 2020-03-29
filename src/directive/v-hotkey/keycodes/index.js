import codes from './codes';

const noop = () => {};

const getKeyMap = (keymap, alias) => Object.keys(keymap).map(input => {
  const result = {};
  const { keyup, keydown } = keymap[input];
  input.replace('numpad +', 'numpad add').split("+").forEach(keyName => {
    switch(keyName.toLocaleLowerCase()){
      case 'ctrl':
      case 'alt':
      case 'meta':
        result[keyName] = true
        break
      default:
        result.keyCode = searchKeyCode(keyName) || alias[keyName] 
    }
  })
  result.callback = {
    keydown: keydown || (keyup ? noop : keymap[input]),
    keyup: keyup || noop
  }
  return result;
})


const searchKeyCode = key => {
  if (!key) return
  // Keyboard Events
  key = hasKeyCode(key) || String(key)
  return codes[key.toLowerCase()] ||
    aliases[key.toLowerCase()] ||
    returnCharCode(key)
}

const returnCharCode = key => key.length === 1 ? key.charCodeAt(0) : undefined
const isPlainObject = obj => Object.prototype.toString.call(obj) === '[object Object]'
const hasKeyCode = key => !isPlainObject(key)
  ? key
  : key.which || key.keyCode || key.charCode || false


export {
  codes,
  getKeyMap
}