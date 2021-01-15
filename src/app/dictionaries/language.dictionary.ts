import { SystemLanguageEnum } from '../models/enums/system-language.enum';
import { LanguageEnum } from '../models/enums/language.enum';

const english = <{ [id: string]: string }> {
    [LanguageEnum.PORTUGUESE]: 'Portuguese',
    [LanguageEnum.ENGLISH]: 'English',
    [LanguageEnum.ITALIAN]: 'Italian',
    [LanguageEnum.SPANISH]: 'Spanish',
    [LanguageEnum.FRENCH]: 'French'
};

const portuguese = <{ [id: string]: string }> {
    [LanguageEnum.PORTUGUESE]: 'Português',
    [LanguageEnum.ENGLISH]: 'Inglês',
    [LanguageEnum.ITALIAN]: 'Italiano',
    [LanguageEnum.SPANISH]: 'Espanhol',
    [LanguageEnum.FRENCH]: 'Francês'
};

export const LanguageDictionary = <{ [id: string]: { [id: string]: string } }>{
    [SystemLanguageEnum.EN_US]: english,
    [SystemLanguageEnum.PT_BR]: portuguese
};

