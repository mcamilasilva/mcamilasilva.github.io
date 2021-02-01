import { MenuItemEnum } from './enums/menu-item.enum';

export class MenuItem {

    private _name: MenuItemEnum;
    private _target: string;

    constructor(name?: MenuItemEnum, target?: string)
    constructor(name: MenuItemEnum, target: string) {
        this._name = name;
        this._target = target;
    }

    get name(): MenuItemEnum {
        return this._name;
    }

    set name(name: MenuItemEnum) {
        this._name = name;
    }

    get target(): string {
        return this._target;
    }

    set target(target: string) {
        this._target = target;
    }

}
