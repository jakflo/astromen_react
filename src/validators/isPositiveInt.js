import AbstractValidator from './abstractValidator.js'; 

export default class IsPositiveInt extends AbstractValidator {
    constructor() {
        super();
        this.deafaultMessage = 'must be a positive integer.';
    }
    
    validate(value) {
        if (isNaN(value)) {
            return this.getErrorMessage();
        }
        else if (parseInt(value) != value || value < 0) {
            return this.getErrorMessage();            
        }
        return '';
    }
}


