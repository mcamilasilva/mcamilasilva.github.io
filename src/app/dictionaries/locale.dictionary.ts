import { SystemLanguageEnum } from '../models/enums/system-language.enum';
import { LocaleEnum } from '../models/enums/locale.enum';

const english = <{ [id: string]: string }> {
    [LocaleEnum.SOROCABA]: 'Sorocaba, SP, Brazil',
    [LocaleEnum.ROME]: 'Rome, Italy'
};

const portuguese = <{ [id: string]: string }> {
    [LocaleEnum.SOROCABA]: 'Sorocaba, SP, Brasil',
    [LocaleEnum.ROME]: 'Roma, Itália'
};

export const LocaleDictionary = <{ [id: string]: { [id: string]: string } }>{
    [SystemLanguageEnum.EN_US]: english,
    [SystemLanguageEnum.PT_BR]: portuguese
};

