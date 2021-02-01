import { AboutMeInfoEnum } from "./enums/about-me-info.enum";
import { TitleEnum } from "./enums/title.enum";

export class AboutMeDetailItem {

    private _title: TitleEnum;
    private _info: AboutMeInfoEnum;

    constructor(title?: TitleEnum, info?: AboutMeInfoEnum)
    constructor(title: TitleEnum, info: AboutMeInfoEnum) {
        this._title = title;
        this._info = info;
    }

    get title(): TitleEnum {
        return this._title;
    }

    set title(title: TitleEnum) {
        this._title = title;
    }

    get info(): AboutMeInfoEnum {
        return this._info;
    }

    set info(info: AboutMeInfoEnum) {
        this._info = info;
    }

}
