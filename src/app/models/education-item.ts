import { EducationAdditionalInfo } from './education-additional-info';
import { Locale } from './enums/locale.enum';
import { MajorDegree } from './enums/major-degree.enum';
import { Major } from './enums/major.enum';
import { School } from './enums/school.enum';
import { ExternalLink } from './external-link';
import { Period } from './period';

export class EducationItem {

    private _school: School;
    private _degree: MajorDegree;
    private _major: Major[];
    private _period: Period;
    private _locale: Locale;
    private _externalLink: ExternalLink;
    private _additionalInfo: EducationAdditionalInfo;

    constructor(school?: School, degree?: MajorDegree, major?: Major[], period?: Period, locale?: Locale, externalLink?: ExternalLink, additionalInfo?: EducationAdditionalInfo)
    constructor(school: School, degree: MajorDegree, major: Major[], period: Period, locale: Locale, externalLink: ExternalLink, additionalInfo: EducationAdditionalInfo) {
        this._school = school;
        this._degree = degree;
        this._major = major;
        this._period = period;
        this._locale = locale;
        this._externalLink = externalLink;
        this._additionalInfo = additionalInfo;
    }

    get school(): School {
        return this._school;
    }

    set school(school: School) {
        this._school = school;
    }

    get degree(): MajorDegree {
        return this._degree;
    }

    set degree(degree: MajorDegree) {
        this._degree = degree;
    }

    get major(): Major[] {
        return this._major;
    }

    set major(major: Major[]) {
        this._major = major;
    }

    get period(): Period {
        return this._period;
    }

    set period(period: Period) {
        this._period = period;
    }

    get locale(): Locale {
        return this._locale;
    }

    set locale(locale: Locale) {
        this._locale = locale;
    }

    get externalLink(): ExternalLink {
        return this._externalLink;
    }

    set externalLink(externalLink: ExternalLink) {
        this._externalLink = externalLink;
    }

    get additionalInfo(): EducationAdditionalInfo {
        return this._additionalInfo;
    }

    set additionalInfo(additionalInfo: EducationAdditionalInfo) {
        this._additionalInfo = additionalInfo;
    }

}
