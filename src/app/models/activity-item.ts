import { ActivityTypeEnum } from './enums/activity-type.enum';

export class ActivityItem {

    private _type: ActivityTypeEnum;
    private _description: string;

    constructor(type?: ActivityTypeEnum, description?: string)
    constructor(type: ActivityTypeEnum, description: string) {
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
            case ActivityTypeEnum.CODING:
                return 'fa-code';
            case ActivityTypeEnum.DATABASE:
                return 'fa-database';
            case ActivityTypeEnum.SUPPORT:
                return 'fa-info-circle';
            case ActivityTypeEnum.ARCHITECTURE:
                return 'fa-duotone fa-sitemap';
            default:
                return 'fa-code'
        }
    }
}
