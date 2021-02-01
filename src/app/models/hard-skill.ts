import { HardSkillEnum } from "./enums/hard-skill.enum";
import { SkillLevelEnum } from "./enums/skill-level.enum";

export class HardSkill {

    private _skill: HardSkillEnum;
    private _level: SkillLevelEnum;

    constructor(skill?: HardSkillEnum, level?: SkillLevelEnum)
    constructor(skill: HardSkillEnum, level: SkillLevelEnum) {
        this._skill = skill;
        this._level = level;
    }

    get skill(): HardSkillEnum {
        return this._skill;
    }

    set skill(skill: HardSkillEnum) {
        this._skill = skill;
    }

    get level(): SkillLevelEnum {
        return this._level;
    }

    set level(level: SkillLevelEnum) {
        this._level = level;
    }

}
