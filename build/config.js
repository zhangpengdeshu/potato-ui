const path = require('path');
const fs = require('fs');

const modules = {}
const cPath = path.join(__dirname, '../src/packages')
const files = fs.readdirSync(cPath)
if(files) {
    files.forEach(name => {
        const p = path.join(cPath, name)
        if(fs.statSync(p).isDirectory()) {
            console.log('==>p', p);
            console.log('==>name', name);
            moudles[p] = name
        }
    })
}