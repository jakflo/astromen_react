import Validators from './validators/validators.js';
import NotEmpty from './validators/notEmpty.js';
import IsPositiveInt from './validators/isPositiveInt.js';
import IsNotZero from './validators/isNotZero.js';
import CzDate from './validators/czDate.js';
import IsNumber from './validators/isNumber.js';
import MaxLen from './validators/maxLen.js';

export default class GetValidator {
        jmeno() {
            return new Validators().addValidator(new NotEmpty().setCustomMessage('Zadejte jméno.')).addValidator(new MaxLen(20));
        }
        prijmeni() {
            return new Validators().addValidator(new NotEmpty().setCustomMessage('Zadejte příjmení.')).addValidator(new MaxLen(20));
        }
        czDatum() {
            return new Validators().addValidator(new NotEmpty().setCustomMessage('Zadejte datum narození.')).addValidator(new CzDate());
        }
        skill() {
            return new Validators().addValidator(new NotEmpty().setCustomMessage('Zadejte dovednost.')).addValidator(new MaxLen(60));
        }
        
}


