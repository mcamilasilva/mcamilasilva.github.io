export class Certification {

    private _name: string;
    private _provider: string;
    private _month: string;
    private _year: number;

    constructor(name?: string, provider?: string, month?: string, year?: number)
    constructor(name: string, provider: string, month: string, year: number) {
        this._name = name;
        this._provider = provider;
        this._month = month;
        this._year = year;
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

    get month(): string {
        return this._month;
    }

    set month(month: string) {
        this._month = month;
    }

    get year(): number {
        return this._year;
    }

    set year(year: number) {
        this._year = year;
    }

}
