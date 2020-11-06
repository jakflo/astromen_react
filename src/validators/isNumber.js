import AbstractValidator from './abstractValidator.js'; 

export default class IsNumber extends AbstractValidator {
    constructor() {
        super();
        this.deafaultMessage = 'must be a number.';
    }
    
    validate(value) {
        if (isNaN(value)) {
            return this.getErrorMessage();
        }
        return '';
    }
}

