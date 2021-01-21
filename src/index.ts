import {Factory} from './Factory';

const validator = function(data = {}, rules = {}, messages = {}): Factory {
    return new Factory(data, rules, messages)
}

export default validator;