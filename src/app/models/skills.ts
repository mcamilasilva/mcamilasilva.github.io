import { SoftSkillEnum } from './enums/soft-skill.enum';
import { HardSkill } from './hard-skill';

export class Skills {

    private _hardSkills: HardSkill[];
    private _softSkills: SoftSkillEnum[];

    constructor(hardSkills?: HardSkill[], softSkills?: SoftSkillEnum[])
    constructor(hardSkills: HardSkill[], softSkills: SoftSkillEnum[]) {
        this._hardSkills = hardSkills;
        this._softSkills = softSkills;
    }

    get hardSkills(): HardSkill[] {
        return this._hardSkills;
    }

    set hardSkills(hardSkills: HardSkill[]) {
        this._hardSkills = hardSkills;
    }

    get softSkills(): SoftSkillEnum[] {
        return this._softSkills;
    }

    set softSkills(softSkills: SoftSkillEnum[]) {
        this._softSkills = softSkills;
    }
}
