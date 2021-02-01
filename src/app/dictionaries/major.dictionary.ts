import { SystemLanguageEnum } from '../models/enums/system-language.enum';
import { MajorEnum } from '../models/enums/major.enum';

const english = <{ [id: string]: string }> {
    [MajorEnum.BUSINESS_INTELLIGENCE]: 'Business Intelligence',
    [MajorEnum.COMPUTER_SCIENCE]: 'Computer Science'
};

const portuguese = <{ [id: string]: string }> {
    [MajorEnum.BUSINESS_INTELLIGENCE]: 'Business Intelligence',
    [MajorEnum.COMPUTER_SCIENCE]: 'Ciência da Computação'
};

export const MajorDictionary = <{ [id: string]: { [id: string]: string } }>{
    [SystemLanguageEnum.EN_US]: english,
    [SystemLanguageEnum.PT_BR]: portuguese
};

