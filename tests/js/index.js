const ValidatorPro = require('validator-pro').default; // Use the ".default" property for default export

const validator = new ValidatorPro();

const isValidEmail = validator.validate('EMAIL', 'example@example.com');
console.log('Is the email valid?', isValidEmail);