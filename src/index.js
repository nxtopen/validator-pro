const fs = require('fs');
const path = require('path');

class ValidatorPro {
    constructor() {
        this.regexMap = {};
        this.loadRegexFromJson();
    }

    loadRegexFromJson() {
        const regexFolderPath = path.join(__dirname, 'regex');
        const regexFiles = fs.readdirSync(regexFolderPath);

        const mergedRegexMap = {};

        regexFiles.forEach((file) => {
            if (path.extname(file).toLowerCase() === '.json') {
                const filePath = path.join(regexFolderPath, file);
                const jsonData = fs.readFileSync(filePath, 'utf-8');
                const regexData = JSON.parse(jsonData);

                Object.assign(mergedRegexMap, regexData);
            }
        });

        this.regexMap = mergedRegexMap;
    }

    validate(type, inputString) {
        const regexPattern = this.regexMap[type];
        if (!regexPattern) {
            throw new Error(`Invalid type '${type}'. Available types: ${Object.keys(this.regexMap).join(', ')}.`);
        }

        const regex = new RegExp(regexPattern);
        return regex.test(inputString);
    }

    escape(type, inputString) {
        const regexPattern = this.regexMap[type];
        if (!regexPattern) {
            throw new Error(`Invalid type '${type}'. Available types: ${Object.keys(this.regexMap).join(', ')}.`);
        }

        const regex = new RegExp(`[^${regexPattern}]`, 'g');
        return inputString.replace(regex, '');
    }
}

module.exports = ValidatorPro;