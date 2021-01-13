import { SystemLanguage } from '../models/enums/system-language.enum';
import { Language } from '../models/enums/language.enum';

const english = <{ [id: string]: string }> {
    [Language.PORTUGUESE]: 'Portuguese',
    [Language.ENGLISH]: 'English',
    [Language.ITALIAN]: 'Italian',
    [Language.SPANISH]: 'Spanish',
    [Language.FRENCH]: 'French'
};

const portuguese = <{ [id: string]: string }> {
    [Language.PORTUGUESE]: 'Português',
    [Language.ENGLISH]: 'Inglês',
    [Language.ITALIAN]: 'Italiano',
    [Language.SPANISH]: 'Espanhol',
    [Language.FRENCH]: 'Francês'
};

export const LanguageDictionary = <{ [id: string]: { [id: string]: string } }>{
    [SystemLanguage.EN_US]: english,
    [SystemLanguage.PT_BR]: portuguese
};

