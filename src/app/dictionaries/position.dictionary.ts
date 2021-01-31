import { PositionEnum } from '../models/enums/position.enum';
import { SystemLanguageEnum } from '../models/enums/system-language.enum';

const english = <{ [id: string]: string }> {
    [PositionEnum.TECH_LEAD]: 'Tech Lead',
    [PositionEnum.SENIOR_SOFTWARE_DEVELOPER]: 'Senior Software Developer',
    [PositionEnum.INTERMEDIATE_SOFTWARE_DEVELOPER]: 'Software Developer',
    [PositionEnum.WEB_DEVELOPER]: 'Web Developer',
    [PositionEnum.SYSTEM_ANALYST]: 'Jr. System Analyst'
};

const portuguese = <{ [id: string]: string }> {
    [PositionEnum.TECH_LEAD]: 'Líder Técnica',
    [PositionEnum.SENIOR_SOFTWARE_DEVELOPER]: 'Desenvolvedora de Software Sênior',
    [PositionEnum.INTERMEDIATE_SOFTWARE_DEVELOPER]: 'Desenvolvedora de Software Pleno',
    [PositionEnum.WEB_DEVELOPER]: 'Desenvolvedora Web',
    [PositionEnum.SYSTEM_ANALYST]: 'Analista de Sistemas Jr.'
};

export const PositionDictionary = <{ [id: string]: { [id: string]: string } }>{
    [SystemLanguageEnum.EN_US]: english,
    [SystemLanguageEnum.PT_BR]: portuguese
};

