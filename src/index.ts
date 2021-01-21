import { Validator } from "./Validator";

const validator = function(data = {}, rules = {}, messages = {}): Validator {
    return (new Validator).make(data, rules, messages);
}

export default validator;