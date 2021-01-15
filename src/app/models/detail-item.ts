import { TitleEnum } from "./enums/title.enum";

export class DetailItem {

    private _title: TitleEnum;
    private _info: string;

    constructor(title?: TitleEnum, info?: string)
    constructor(title: TitleEnum, info: string) {
        this._title = title;
        this._info = info;
    }

    get title(): TitleEnum {
        return this._title;
    }

    set title(title: TitleEnum) {
        this._title = title;
    }

    get info(): string {
        return this._info;
    }

    set info(info: string) {
        this._info = info;
    }

}
