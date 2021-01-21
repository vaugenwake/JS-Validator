export class Validator {

    data: Record<string,unknown> = {};
    parseRules: Record<string,unknown> = {};
    customMessages: Record<string,unknown> = {};

    /**
     * Set rules to be validated against
     * 
     * @param rules
     * @returns {Validator}
     */
    public setRules(rules:Record<string,unknown> = {}): Validator {

        this.parseRules = rules;

        return this;
    }

    /**
     * Set custom error messages
     * 
     * @param messages 
     * @returns {Validator}
     */
    public setMessages(messages:Record<string,unknown> = {}): Validator {
        this.customMessages = messages;

        return this;
    }

    public make(data:Record<string,unknown> = {}, rules: Record<string,unknown> = {}, messages: Record<string,unknown> = {}): Validator {

        this.data = data;
        this.parseRules = rules;
        this.customMessages = messages;

        return this;
    }
}