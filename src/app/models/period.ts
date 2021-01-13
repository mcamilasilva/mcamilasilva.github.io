import { MonthYear } from './month-year';

export class Period {

    private _start: MonthYear;
    private _end: MonthYear;

    constructor(start?: MonthYear, end?: MonthYear)
    constructor(start: MonthYear, end: MonthYear) {
        this._start = start;
        this._end = end;
    }

    get start(): MonthYear {
        return this._start;
    }

    set start(start: MonthYear) {
        this._start = start;
    }

    get end(): MonthYear {
        return this._end;
    }

    set end(end: MonthYear) {
        this._end = end;
    }

}
