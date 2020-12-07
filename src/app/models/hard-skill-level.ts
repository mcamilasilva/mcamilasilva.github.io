export class HardSkillLevel {

    private _skill: string;
    private _level: number; // From 1 to 5

    constructor(skill?: string, level?: number)
    constructor(skill: string, level: number) {
        this._skill = skill;
        this._level = level;
    }

    get skill(): string {
        return this._skill;
    }

    set skill(skill: string) {
        this._skill = skill;
    }

    get level(): number {
        return this._level;
    }

    set level(level: number) {
        this._level = level;
    }

}
