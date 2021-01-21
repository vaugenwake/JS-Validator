import { format } from "path";
import {Validator} from './Validator';

export class Factory {

    constructor(data:Record<string,unknown>, rules: Record<string,unknown>, messages: Record<string,unknown>) {
        return (new Validator()).make(data, rules, messages);
    }

}