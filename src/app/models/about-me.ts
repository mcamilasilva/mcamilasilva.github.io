import { AboutMeDetailItem } from './about-me-detail-item';
import { LanguageLevel } from './language-level';

export class AboutMe {
   
    private _details: AboutMeDetailItem[];
    private _languages: LanguageLevel[];
    private _bioParagraphs: string[] | undefined;
    
    constructor(details?: AboutMeDetailItem[], languages?: LanguageLevel[], bioParagraphs?: string[], )
    constructor(details: AboutMeDetailItem[], languages: LanguageLevel[], bioParagraphs: string[]) {
        this._bioParagraphs = bioParagraphs;
        this._details = details;
        this._languages = languages;
    }

    get bioParagraphs(): string[] | undefined {
        return this._bioParagraphs;
    }

    set bioParagraphs(bioParagraphs: string[] | undefined) {
        this._bioParagraphs = bioParagraphs;
    }

    get details(): AboutMeDetailItem[] {
        return this._details;
    }

    set details(details: AboutMeDetailItem[]) {
        this._details = details;
    }

    get languages(): LanguageLevel[] {
        return this._languages;
    }

    set languages(languages: LanguageLevel[]) {
        this._languages = languages;
    }

}
