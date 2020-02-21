const expect = chai.expect;
import validate from '../src/validate.js'

describe("validate", () => {
    it('存在', () => {
        expect(validate).to.exist
    })
    it('case 1', () => {
        let data = {
            email: ''
        }

        let rules = [
            {key: 'email', require: true}
        ]

        let errors = validate(data, rules)
        expect(errors.email.required).to.eq('必填')
    })
})