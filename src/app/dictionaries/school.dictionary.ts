import { SystemLanguageEnum } from '../models/enums/system-language.enum';
import { SchoolEnum } from '../models/enums/school.enum';

const english = <{ [id: string]: string }> {
    [SchoolEnum.UFSCAR]: 'Federal University of São Carlos',
    [SchoolEnum.SAPIENZA]: 'Sapienza Univerity of Rome'
};

const portuguese = <{ [id: string]: string }> {
    [SchoolEnum.UFSCAR]: 'Universidade Federal de São Carlos',
    [SchoolEnum.SAPIENZA]: 'Università degli Studi di Roma "La Sapienza"'
};

export const SchoolDictionary = <{ [id: string]: { [id: string]: string } }>{
    [SystemLanguageEnum.EN_US]: english,
    [SystemLanguageEnum.PT_BR]: portuguese
};

