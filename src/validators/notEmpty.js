import AbstractValidator from './abstractValidator.js';

export default class NotEmpty extends AbstractValidator {
    constructor() {
        super();
        this.deafaultMessage = 'cannot be empty.';
    }
    
    validate(value) {
        if (value == '' || value === undefined) {
            return this.getErrorMessage();
        }
        return '';
    }    
}

