import { Month } from './enums/month.enum';

export class MonthYear {

    private _month: Month;
    private _year: number;

    constructor(month?: Month, year?: number)
    constructor(month: Month, year: number) {
        this._month = month;
        this._year = year;
    }

    get month(): Month {
        return this._month;
    }

    set month(month: Month) {
        this._month = month;
    }

    get year(): number {
        return this._year;
    }

    set year(year: number) {
        this._year = year;
    }

}
