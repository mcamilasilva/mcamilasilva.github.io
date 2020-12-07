export class LanguageLevel {

    private _language: string;
    private _level: number;

    constructor(language?: string, level?: number)
    constructor(language: string, level: number) {
        this._language = language;
        this._level = level;
    }

    get language(): string {
        return this._language;
    }

    set language(language: string) {
        this._language = language;
    }

    get level(): number {
        return this._level;
    }

    set level(level: number) {
        this._level = level;
    }

}
