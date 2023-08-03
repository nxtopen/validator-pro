const fs = require('fs');

class ValidatorPro {
    constructor() {
        this.regexMap = {};
        this.loadRegexFromJson();
    }

    loadRegexFromJson() {
        const filePath = __dirname + '/regex.json';
        const jsonData = fs.readFileSync(filePath, 'utf-8');
        this.regexMap = JSON.parse(jsonData);
    }

    validate(type, inputString) {
        const regexPattern = this.regexMap[type];
        if (!regexPattern) {
            throw new Error(`Invalid type '${type}'.`);
        }

        const regex = new RegExp(regexPattern);
        return regex.test(inputString);
    }

    escape(type, inputString) {
        const regexPattern = this.regexMap[type];
        if (!regexPattern) {
            throw new Error(`Invalid type '${type}'.`);
        }

        const regex = new RegExp(`[^${regexPattern}]`, 'g');
        return inputString.replace(regex, '');
    }
}

module.exports = ValidatorPro;