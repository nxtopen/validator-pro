import ValidatorPro from 'validator-pro';

const validator = new ValidatorPro();

const isValidEmail: boolean = validator.validate('EMAIL', 'example@example.com');
console.log('Is the email valid?', isValidEmail);