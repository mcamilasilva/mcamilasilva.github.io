import { EducationAdditionalInfo } from './education-additional-info';
import { LocaleEnum } from './enums/locale.enum';
import { MajorDegreeEnum } from './enums/major-degree.enum';
import { MajorEnum } from './enums/major.enum';
import { SchoolEnum } from './enums/school.enum';
import { ExternalLink } from './external-link';
import { Period } from './period';

export class EducationItem {

    private _school: SchoolEnum;
    private _degree: MajorDegreeEnum;
    private _major: MajorEnum[];
    private _period: Period;
    private _locale: LocaleEnum;
    private _externalLink: ExternalLink;
    private _additionalInfo: EducationAdditionalInfo;

    constructor(school?: SchoolEnum, degree?: MajorDegreeEnum, major?: MajorEnum[], period?: Period, locale?: LocaleEnum, externalLink?: ExternalLink, additionalInfo?: EducationAdditionalInfo)
    constructor(school: SchoolEnum, degree: MajorDegreeEnum, major: MajorEnum[], period: Period, locale: LocaleEnum, externalLink: ExternalLink, additionalInfo: EducationAdditionalInfo) {
        this._school = school;
        this._degree = degree;
        this._major = major;
        this._period = period;
        this._locale = locale;
        this._externalLink = externalLink;
        this._additionalInfo = additionalInfo;
    }

    get school(): SchoolEnum {
        return this._school;
    }

    set school(school: SchoolEnum) {
        this._school = school;
    }

    get degree(): MajorDegreeEnum {
        return this._degree;
    }

    set degree(degree: MajorDegreeEnum) {
        this._degree = degree;
    }

    get major(): MajorEnum[] {
        return this._major;
    }

    set major(major: MajorEnum[]) {
        this._major = major;
    }

    get period(): Period {
        return this._period;
    }

    set period(period: Period) {
        this._period = period;
    }

    get locale(): LocaleEnum {
        return this._locale;
    }

    set locale(locale: LocaleEnum) {
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
