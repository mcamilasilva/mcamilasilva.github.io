import { SystemLanguage } from '../models/enums/system-language.enum';
import { Major } from '../models/enums/major.enum';

const english = <{ [id: string]: string }> {
    [Major.BUSINESS_INTELLIGENCE]: 'Business Intelligence',
    [Major.COMPUTER_SCIENCE]: 'Computer Science'
};

const portuguese = <{ [id: string]: string }> {
    [Major.BUSINESS_INTELLIGENCE]: 'Business Intelligence',
    [Major.COMPUTER_SCIENCE]: 'Ciência da Computação'
};

export const MajorDictionary = <{ [id: string]: { [id: string]: string } }>{
    [SystemLanguage.EN_US]: english,
    [SystemLanguage.PT_BR]: portuguese
};

