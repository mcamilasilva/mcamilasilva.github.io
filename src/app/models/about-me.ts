import { LanguageLevel } from './language-level';

export class AboutMe {

    private _bioParagraphs: string[];
    private _age: number;
    private _email: string;
    private _phone: string;
    private _location: string;
    private _languages: LanguageLevel[];

    constructor(bioParagraphs?: string[], age?: number, email?: string, phone?: string, location?: string, languages?: LanguageLevel[])
    constructor(bioParagraphs: string[], age: number, email: string, phone: string, location: string, languages: LanguageLevel[]) {
        this._bioParagraphs = bioParagraphs;
        this._age = age;
        this._email = email;
        this._phone = phone;
        this._location = location;
        this._languages = languages;
    }

    get bioParagraphs(): string[] {
        return this._bioParagraphs;
    }

    set bioParagraphs(bioParagraphs: string[]) {
        this._bioParagraphs = bioParagraphs;
    }

    get age(): number {
        return this._age;
    }

    set age(age: number) {
        this._age = age;
    }

    get email(): string {
        return this._email;
    }

    set email(email: string) {
        this._email = email;
    }

    get phone(): string {
        return this._phone;
    }

    set phone(phone: string) {
        this._phone = phone;
    }

    get location(): string {
        return this._location;
    }

    set location(location: string) {
        this._location = location;
    }

    get languages(): LanguageLevel[] {
        return this._languages;
    }

    set languages(languages: LanguageLevel[]) {
        this._languages = languages;
    }

}
