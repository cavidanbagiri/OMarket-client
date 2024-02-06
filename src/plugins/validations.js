
import { defineRule, Form as VeeForm, Field as VeeField, ErrorMessage } from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';

const validation = {

  install(app, options){

    app.component('VeeForm', VeeForm);
    app.component('VeeField', VeeField);
    app.component('ErrorMessage', ErrorMessage)

    defineRule('required', required);
    defineRule('email', email);
    defineRule('min', min);



  }

}

export default validation;