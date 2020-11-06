import AbstractValidator from './abstractValidator.js';
import DateTools from '../utils/dateTools.js';

export default class CzDate extends AbstractValidator {
    constructor() {
        super();
        this.deafaultMessage = 'nemá platný formát.';
    }
    
    validate(value) {
        var dateTools = new DateTools();
        if (!dateTools.checkCzDate(value)) {
            return this.getErrorMessage();
        }
        return '';
    }
}

