import AbstractValidator from './abstractValidator.js'; 

export default class MaxLen extends AbstractValidator {
    constructor(maxLength) {
        super();
        this.deafaultMessage = 'nesmí být delší než ' + maxLength + ' znaků.';
        this.maxLength = maxLength;
    }
    
    validate(value) {
        if (value.length > this.maxLength) {
            return this.getErrorMessage();
        }
        return '';
    }    
}
