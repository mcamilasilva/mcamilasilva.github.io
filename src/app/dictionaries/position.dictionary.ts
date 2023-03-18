import { PositionEnum } from '../models/enums/position.enum';
import { SystemLanguageEnum } from '../models/enums/system-language.enum';

const english = <{ [id: string]: string }> {
    [PositionEnum.TECH_LEAD]: 'Tech Lead',
    [PositionEnum.SENIOR_SOFTWARE_DEVELOPER]: 'Senior Software Developer',
    [PositionEnum.INTERMEDIATE_SOFTWARE_DEVELOPER]: 'Software Developer',
    [PositionEnum.WEB_DEVELOPER]: 'Web Developer',
    [PositionEnum.SYSTEM_ANALYST]: 'Jr. System Analyst',
    [PositionEnum.SOFTWARE_ENGINEER]: "Software Engineer",
    [PositionEnum.SENIOR_SOFTWARE_ENGINEER]: "Senior Software Engineer"
};

const portuguese = <{ [id: string]: string }> {
    [PositionEnum.TECH_LEAD]: 'Tech Lead',
    [PositionEnum.SENIOR_SOFTWARE_DEVELOPER]: 'Desenvolvedora de Software Sênior',
    [PositionEnum.INTERMEDIATE_SOFTWARE_DEVELOPER]: 'Desenvolvedora de Software Pleno',
    [PositionEnum.WEB_DEVELOPER]: 'Desenvolvedora Web',
    [PositionEnum.SYSTEM_ANALYST]: 'Analista de Sistemas Jr.',
    [PositionEnum.SOFTWARE_ENGINEER]: "Engenheira de Software",
    [PositionEnum.SENIOR_SOFTWARE_ENGINEER]: "Engenheira de Software Sênior"
};

export const PositionDictionary = <{ [id: string]: { [id: string]: string } }>{
    [SystemLanguageEnum.EN_US]: english,
    [SystemLanguageEnum.PT_BR]: portuguese
};

