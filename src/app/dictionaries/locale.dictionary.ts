import { SystemLanguage } from '../models/enums/system-language.enum';
import { Locale } from '../models/enums/locale.enum';

const english = <{ [id: string]: string }> {
    [Locale.SOROCABA]: 'Sorocaba, SP, Brazil',
    [Locale.ROME]: 'Rome, Italy'
};

const portuguese = <{ [id: string]: string }> {
    [Locale.SOROCABA]: 'Sorocaba, SP, Brasil',
    [Locale.ROME]: 'Roma, Itália'
};

export const LocaleDictionary = <{ [id: string]: { [id: string]: string } }>{
    [SystemLanguage.EN_US]: english,
    [SystemLanguage.PT_BR]: portuguese
};

