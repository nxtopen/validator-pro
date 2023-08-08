# Validator PRO

Not just an another validator plugin, we've everything packed for you!

[Join <b>NxtOpen</b> On Discord](https://discord.gg/NHug3AMz4x)

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

## Options Available

 * [Common](https://github.com/nxtopen/validator-pro/blob/main/src/regex/common.json)
 * [HTML Tags](https://github.com/nxtopen/validator-pro/blob/main/src/regex/html.json)
 * [Numbers](https://github.com/nxtopen/validator-pro/blob/main/src/regex/numbers.json)
 * [Time](https://github.com/nxtopen/validator-pro/blob/main/src/regex/time.json)
 * [Misc](https://github.com/nxtopen/validator-pro/blob/main/src/regex/misc.json)

## Contribute More

Easily contribute to our collection, by Opening an issue with RegEx to be added or update with file or data froma forked repo with a PR.