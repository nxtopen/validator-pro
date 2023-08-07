# Validator PRO

Not just an another validator plugin, we've everything packed for you!

## Features

✅ Wide-range of Regular Expressions <br>
✅ Validate & Escape options <br>

## Usage

### Typescript

```
import ValidatorPro from 'validator-pro';

const validator = new ValidatorPro();

const isValidEmail: boolean = validator.validate('EMAIL', 'example@example.com');
console.log('Is the email valid?', isValidEmail);

// Output : Is the email valid? true
```

### Javascript

```
const ValidatorPro = require('validator-pro').default; // Use the ".default" property for default export

const validator = new ValidatorPro();

const isValidEmail = validator.validate('EMAIL', 'example@example.com');
console.log('Is the email valid?', isValidEmail);

// Output : Is the email valid? true
```

## APIs

### Validate

Validate with a predefined option and get `true` or `false`

.validate(OPTION,INPUT)

### Escape

Escape the specified option matched, from input

.escape(OPTION,INPUT)


[See All Options](https://github.com/nxtopen/validator-pro/blob/main/docs/OPTIONS.MD)