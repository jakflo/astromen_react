import AbstractValidator from './abstractValidator.js'; 

export default class IsNotZero extends AbstractValidator {
    constructor() {
        super();
        this.deafaultMessage = 'cannot be zero.';
    }
    
    validate(value) {
        if (value == 0) {
            return this.getErrorMessage();
        }        
        return '';
    }
}


