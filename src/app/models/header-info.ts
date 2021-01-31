import { PositionEnum } from "./enums/position.enum";

export class HeaderInfo {

    private _name: string;
    private _positions: PositionEnum[];
    private _photoUrl: string;

    constructor(name?: string, positions?: PositionEnum[], photoUrl?: string)
    constructor(name: string, positions: PositionEnum[], photoUrl: string) {
        this._name = name;
        this._positions = positions;
        this._photoUrl = photoUrl;

    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get positions(): PositionEnum[] {
        return this._positions;
    }

    set positions(positions: PositionEnum[]) {
        this._positions = positions;
    }

    get photoUrl(): string {
        return this._photoUrl;
    }
}
