import { ActivityItem } from './activity-item';
import { CompanyEnum } from './enums/company.enum';
import { PositionEnum } from './enums/position.enum';
import { Period } from './period';

export class WorkExperience {

    readonly TECHNOLOGIES_THRESHOLD: number = 9;

    private _positions: PositionEnum[];
    private _company: CompanyEnum;
    private _period: Period;
    private _description: string;
    private _activities: ActivityItem[];
    private _technologies: string[];
    
    
    constructor(positions?: PositionEnum[], company?: CompanyEnum, period?: Period, description?: string, activities?: ActivityItem[], technologies?: string[])
    constructor(positions: PositionEnum[], company: CompanyEnum, period: Period, description: string, activities: ActivityItem[], technologies: string[]) {
        this._positions = positions;
        this._company = company;
        this._period = period;
        this._description = description;
        this._activities = activities;
        this._technologies = technologies;
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

    get description(): string {
        return this._description;
    }

    set description(description: string) {
        this._description = description;
    }

    get activities(): ActivityItem[] {
        return this._activities;
    }

    set activities(activities: ActivityItem[]) {
        this._activities = activities;
    }

    get period(): Period {
        return this._period;
    }

    set period(period: Period) {
        this._period = period;
    }

    get technologies(): string {
        if (this._technologies) {
            if (this._technologies.length > this.TECHNOLOGIES_THRESHOLD) {
                return this._technologies.slice(0, this.TECHNOLOGIES_THRESHOLD).join(', ');
            }
            return this._technologies.join(', ');
        }
        return '';
    }

    get showMoreTechnologiesIcon(): boolean {
        return this._technologies && this._technologies.length > this.TECHNOLOGIES_THRESHOLD;
    }
}
