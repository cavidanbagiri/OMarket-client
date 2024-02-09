
import { defineRule, Form as VeeForm, Field as VeeField, ErrorMessage } from 'vee-validate';
import { required, email, min, alpha, numeric  } from '@vee-validate/rules';

const validation = {

  install(app, options){

    app.component('VeeForm', VeeForm);
    app.component('VeeField', VeeField);
    app.component('ErrorMessage', ErrorMessage)

    defineRule('required', required);
    defineRule('email', email);
    defineRule('min', min);
    //defineRule('alpha', alpha);
    //defineRule('numeric', numeric);

  }

}

export default validation;