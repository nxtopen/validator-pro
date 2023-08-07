const assert = require('chai').assert;
const ValidatorPro = require('../dist/validator-pro');

describe('ValidatorPro', function () {
    let validate;

    beforeEach(function () {
        validate = new ValidatorPro();
    });

    describe('validate()', function () {
        it('should validate a valid email address', function () {
            const inputString = 'info@example.com';
            const isValidEmail = validate.validate('email', inputString);

            assert.isTrue(isValidEmail);
        });

        it('should invalidate an invalid email address', function () {
            const inputString = 'invalid_email';
            const isValidEmail = validate.validate('email', inputString);

            assert.isFalse(isValidEmail);
        });

        it('should throw an error for an invalid type', function () {
            const inputString = 'any_value';
            const invalidType = 'INVALID_TYPE';

            const validationFunction = () => validate.validate(invalidType, inputString);

            assert.throw(validationFunction, `Invalid type '${invalidType}'. Available types: email`);
        });
    });

    describe('escape()', function () {
        it('should escape characters from the input string based on the provided type', function () {
            const inputString = 'Hello123World<div><p>This is some HTML content</p><!-- This is an HTML comment --></div>';
            const escapedString = validate.escape('HTML_COMMENT', inputString);

            assert.strictEqual(escapedString, 'Hello123World<div><p>This is some HTML content</p></div>');
        });
    });
});
