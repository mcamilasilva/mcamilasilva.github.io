import { SystemLanguage } from '../models/enums/system-language.enum';
import { School } from '../models/enums/school.enum';

const english = <{ [id: string]: string }> {
    [School.UFSCAR]: 'Federal University of São Carlos',
    [School.SAPIENZA]: 'Sapienza Univerity of Rome'
};

const portuguese = <{ [id: string]: string }> {
    [School.UFSCAR]: 'Universidade Federal de São Carlos',
    [School.SAPIENZA]: 'Università degli Studi di Roma "La Sapienza"'
};

export const SchoolDictionary = <{ [id: string]: { [id: string]: string } }>{
    [SystemLanguage.EN_US]: english,
    [SystemLanguage.PT_BR]: portuguese
};

