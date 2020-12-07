export class MenuItem {

    private _name: string;
    private _target: string;

    constructor(name?: string, target?: string)
    constructor(name: string, target: string) {
        this._name = name;
        this._target = target;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get target(): string {
        return this._target;
    }

    set target(target: string) {
        this._target = target;
    }

}
