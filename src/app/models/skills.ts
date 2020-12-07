import { HardSkillLevel } from './hard-skill-level';

export class Skills {

    private _hardSkills: HardSkillLevel[];
    private _softSkills: string[];

    constructor(hardSkills?: HardSkillLevel[], softSkills?: string[])
    constructor(hardSkills: HardSkillLevel[], softSkills: string[]) {
        this._hardSkills = hardSkills;
        this._softSkills = softSkills;
    }

    get hardSkills(): HardSkillLevel[] {
        return this._hardSkills;
    }

    set hardSkills(hardSkills: HardSkillLevel[]) {
        this._hardSkills = hardSkills;
    }

    get softSkills(): string[] {
        return this._softSkills;
    }

    set softSkills(softSkills: string[]) {
        this._softSkills = softSkills;
    }
}
