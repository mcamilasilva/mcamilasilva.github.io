export class EducationAdditionalInfo {

    private _title: string;
    private _info: string;

    constructor(title?: string, info?: string)
    constructor(title: string, info: string) {
        this._title = title;
        this._info = info;
    }

    get title(): string {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }

    get info(): string {
        return this._info;
    }

    set info(info: string) {
        this._info = info;
    }

}
