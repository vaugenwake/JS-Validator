import validator from '../../src/index';

describe('Validator Messages', () => {

    let validate = validator();

    beforeAll(() => {
        validate.setMessages({'name.required': 'Name is required', 'name.min': 'Name must be a minimum 2'});
    })

    test('rules should be 1', () => {
        let count = Object.keys(validate.customMessages).length;

        expect(count).toBe(2);
    });

})