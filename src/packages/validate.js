export default function validate (data, rules) {
    let errors = {}
    rules.forEach(rule => {
        let value = data[rule.key]
        if (!value && value !== 0) {
            errors[rule.key] = {required: '必填'}
        }
    })
    return errors
}

const demoRule = {
    key: 'xxx',
    pattern: 'number',
    min: 6,
    max: 19,
    required: true
}