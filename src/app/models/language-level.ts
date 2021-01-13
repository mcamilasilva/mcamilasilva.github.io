import { Language } from './enums/language.enum';

export class LanguageLevel {

    private _language: Language;
    private _level: number;

    constructor(language?: Language, level?: number)
    constructor(language: Language, level: number) {
        this._language = language;
        this._level = level;
    }

    get language(): Language {
        return this._language;
    }

    set language(language: Language) {
        this._language = language;
    }

    get level(): number {
        return this._level;
    }

    set level(level: number) {
        this._level = level;
    }

}
