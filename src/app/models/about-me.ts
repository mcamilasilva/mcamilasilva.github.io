import { DetailItem } from './detail-item';
import { LanguageLevel } from './language-level';

export class AboutMe {

    private _bioParagraphs: string[];
    private _details: DetailItem[];
    private _languages: LanguageLevel[];
    
    constructor(bioParagraphs?: string[], details?: DetailItem[], languages?: LanguageLevel[])
    constructor(bioParagraphs: string[], details: DetailItem[], languages: LanguageLevel[]) {
        this._bioParagraphs = bioParagraphs;
        this._details = details;
        this._languages = languages;
    }

    get bioParagraphs(): string[] {
        return this._bioParagraphs;
    }

    set bioParagraphs(bioParagraphs: string[]) {
        this._bioParagraphs = bioParagraphs;
    }

    get details(): DetailItem[] {
        return this._details;
    }

    set details(details: DetailItem[]) {
        this._details = details;
    }

    get languages(): LanguageLevel[] {
        return this._languages;
    }

    set languages(languages: LanguageLevel[]) {
        this._languages = languages;
    }

}
