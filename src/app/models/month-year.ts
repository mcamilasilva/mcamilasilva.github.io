import { MonthEnum } from './enums/month.enum';

export class MonthYear {

    private _month: MonthEnum;
    private _year: number;

    constructor(month?: MonthEnum, year?: number)
    constructor(month: MonthEnum, year: number) {
        this._month = month;
        this._year = year;
    }

    get month(): MonthEnum {
        return this._month;
    }

    set month(month: MonthEnum) {
        this._month = month;
    }

    get year(): number {
        return this._year;
    }

    set year(year: number) {
        this._year = year;
    }

}
