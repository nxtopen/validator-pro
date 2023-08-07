import * as fs from 'fs';
import * as path from 'path';

interface RegexMap {
  [key: string]: string;
}

class ValidatorPro {
  private regexMap: RegexMap;

  constructor() {
    this.regexMap = {};
    this.loadRegexFromJson();
  }

  private loadRegexFromJson() {
    const regexFolderPath = path.join(__dirname, 'regex');
    const regexFiles = fs.readdirSync(regexFolderPath);

    const mergedRegexMap: RegexMap = {};

    regexFiles.forEach((file) => {
      if (path.extname(file).toLowerCase() === '.json') {
        const filePath = path.join(regexFolderPath, file);
        const jsonData = fs.readFileSync(filePath, 'utf-8');
        const regexData: RegexMap = JSON.parse(jsonData);

        Object.assign(mergedRegexMap, regexData);
      }
    });

    this.regexMap = mergedRegexMap;
  }

  validate(type: string, inputString: string): boolean {
    const regexPattern = this.regexMap[type];
    if (!regexPattern) {
      throw new Error(`Invalid type '${type}'. Available types: ${Object.keys(this.regexMap).join(', ')}.`);
    }

    const regex = new RegExp(regexPattern);
    return regex.test(inputString);
  }

  escape(type: string, inputString: string): string {
    const regexPattern = this.regexMap[type];
    if (!regexPattern) {
      throw new Error(`Invalid type '${type}'. Available types: ${Object.keys(this.regexMap).join(', ')}.`);
    }

    const regex = new RegExp(`${regexPattern}`, 'g');
    return inputString.replace(regex, '');
  }
}

export default ValidatorPro;