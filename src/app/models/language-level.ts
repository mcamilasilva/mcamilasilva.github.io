import { LanguageEnum } from './enums/language.enum';

export class LanguageLevel {

    private _language: LanguageEnum;
    private _level: number;

    constructor(language?: LanguageEnum, level?: number)
    constructor(language: LanguageEnum, level: number) {
        this._language = language;
        this._level = level;
    }

    get language(): LanguageEnum {
        return this._language;
    }

    set language(language: LanguageEnum) {
        this._language = language;
    }

    get level(): number {
        return this._level;
    }

    set level(level: number) {
        this._level = level;
    }

}
