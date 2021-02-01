import { MonthYear } from "./month-year";

export class Certification {

    private _name: string;
    private _provider: string;
    private _date: MonthYear;

    constructor(name?: string, provider?: string, date?: MonthYear)
    constructor(name: string, provider: string, date: MonthYear) {
        this._name = name;
        this._provider = provider;
        this._date = date;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get provider(): string {
        return this._provider;
    }

    set provider(provider: string) {
        this._provider = provider;
    }

    get date(): MonthYear {
        return this._date;
    }

    set date(date: MonthYear) {
        this._date = date;
    }
}
