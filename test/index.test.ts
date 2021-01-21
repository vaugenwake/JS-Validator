import validator from '../src/index';
import { Validator } from '../src/Validator';

test('it can create new validator instance', () => {
    const validate = validator()
    expect(validate).toBeInstanceOf(Validator);
});