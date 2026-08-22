import { CompanyEnum } from './enums/company.enum';
import { CountryEnum } from './enums/country.enum';
import { PositionEnum } from './enums/position.enum';
import { WorkExperienceTechnologyEnum } from './enums/work-experience-technology.enum';
import { WorkExperienceEnum } from './enums/work-experience.enum';
import { Period } from './period';

export class WorkExperience {

    private _identifier: WorkExperienceEnum;
    private _positions: PositionEnum[];
    private _company: CompanyEnum;
    private _country: CountryEnum;
    private _period: Period;
    private _technologies: WorkExperienceTechnologyEnum[];
    
    
    constructor(identifier?: WorkExperienceEnum, positions?: PositionEnum[], company?: CompanyEnum, country?: CountryEnum, period?: Period, technologies?: WorkExperienceTechnologyEnum[])
    constructor(identifier: WorkExperienceEnum, positions: PositionEnum[], company: CompanyEnum, country: CountryEnum, period: Period, technologies: WorkExperienceTechnologyEnum[]) {
        this._identifier = identifier;
        this._positions = positions;
        this._company = company;
        this._country = country;
        this._period = period;
        this._technologies = technologies;
    }

    get identifier(): WorkExperienceEnum {
        return this._identifier;
    }

    set identifier(identifier: WorkExperienceEnum) {
        this._identifier = identifier;
    }

    get positions(): PositionEnum[] {
        return this._positions;
    }

    set positions(positions: PositionEnum[]) {
        this._positions = positions;
    }

    get company(): CompanyEnum {
        return this._company;
    }

    set company(company: CompanyEnum) {
        this._company = company;
    }

    get country(): CountryEnum {
        return this._country;
    }

    set country(country: CountryEnum) {
        this._country = country;
    }

    get period(): Period {
        return this._period;
    }

    set period(period: Period) {
        this._period = period;
    }

    get technologies(): WorkExperienceTechnologyEnum[] {
       return this._technologies;
    }

    set technologies(technologies: WorkExperienceTechnologyEnum[]) {
        this._technologies = technologies;
    }
}
