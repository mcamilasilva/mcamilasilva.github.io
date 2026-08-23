import { CountryEnum } from '../models/enums/country.enum';
import { SystemLanguageEnum } from '../models/enums/system-language.enum';

const english = <{ [id: string]: string }> {
    [CountryEnum.BRAZIL]: 'Brazil',
    [CountryEnum.CANADA]: 'Canada'
};

const portuguese = <{ [id: string]: string }> {
    [CountryEnum.BRAZIL]: 'Brasil',
    [CountryEnum.CANADA]: 'Canadá'
};

export const CountryDictionary = <{ [id: string]: { [id: string]: string } }>{
    [SystemLanguageEnum.EN_US]: english,
    [SystemLanguageEnum.PT_BR]: portuguese
};
