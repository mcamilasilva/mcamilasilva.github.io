import { ActivityType } from './enums/activity-type.enum';

export class ActivityItem {

    private _type: ActivityType;
    private _description: string;

    constructor(type?: ActivityType, description?: string)
    constructor(type: ActivityType, description: string) {
        this._type = type;
        this._description = description;
    }

    get description(): string {
        return this._description;
    }

    set description(description: string) {
        this._description = description;
    }

    get iconClass(): string {
        switch (this._type) {
            case ActivityType.CODING:
                return 'fa-code';
            case ActivityType.DATABASE:
                return 'fa-database';
            case ActivityType.SUPPORT:
                return 'fa-info-circle';
        }
    }
}
