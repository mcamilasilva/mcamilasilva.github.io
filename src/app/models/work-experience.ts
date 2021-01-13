import { ActivityItem } from './activity-item';
import { Period } from './period';

export class WorkExperience {

    readonly TECHNOLOGIES_THRESHOLD: number = 9;

    private _position: string;
    private _company: string;
    private _period: Period;
    private _description: string;
    private _activities: ActivityItem[];
    private _technologies: string[];
    
    
    constructor(position?: string, company?: string, period?: Period, description?: string, activities?: ActivityItem[], technologies?: string[])
    constructor(position: string, company: string, period: Period, description: string, activities: ActivityItem[], technologies: string[]) {
        this._position = position;
        this._company = company;
        this._period = period;
        this._description = description;
        this._activities = activities;
        this._technologies = technologies;
    }

    get position(): string {
        return this._position;
    }

    set position(position: string) {
        this._position = position;
    }

    get company(): string {
        return this._company;
    }

    set company(company: string) {
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
