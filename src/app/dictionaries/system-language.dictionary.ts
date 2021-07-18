import { SystemLanguageEnum } from '../models/enums/system-language.enum';

const languages = <{ [id: string]: string }> {
    [SystemLanguageEnum.EN_US]: 'English',
    [SystemLanguageEnum.PT_BR]: 'Português'
};

export const SystemLanguageDictionary = <{ [id: string]: { [id: string]: string } }>{
    [SystemLanguageEnum.EN_US]: languages,
    [SystemLanguageEnum.PT_BR]: languages
};

