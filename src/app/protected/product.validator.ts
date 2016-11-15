import { Observable } from "rxjs/Rx";
import { FormControl, FormGroup, Validators } from "@angular/forms";

export class ProductValidator {


    constructor() { }


    static validationMessages = {
        'product': {
            'required':      'Имя обязательно для заполнения',
            'minlength':     'Минимальная длина ',
            'maxlength':     'Максимальная длина не должна превышать 24',
            'forbiddenName': 'Someone named "Bob" cannot be a hero.',
            'pattern': 'patern validation',
            'invalid': 'bla bla',
            'userNotFound':'Такого юзера нет'
        },
        'domen': {
            'required': 'domen is Empty',
            'minlength':     'Минимальная длинна должна быть не менее 4 символов',
            'maxlength':     'Максимальная длина не должна превышать 24'

        }
    };
}