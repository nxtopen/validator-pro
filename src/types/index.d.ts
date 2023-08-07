declare class ValidatorPro {
    constructor();

    public validate(type: string, inputString: string): boolean;

    public escape(type: string, inputString: string): string;
}

export = ValidatorPro;