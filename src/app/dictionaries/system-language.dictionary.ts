import { SystemLanguageEnum } from '../models/enums/system-language.enum';

const english = <{ [id: string]: string }> {
    [SystemLanguageEnum.EN_US]: 'English',
    [SystemLanguageEnum.PT_BR]: 'Portuguese'
};

const portuguese = <{ [id: string]: string }> {
    [SystemLanguageEnum.EN_US]: 'Inglês',
    [SystemLanguageEnum.PT_BR]: 'Português'
};

export const SystemLanguageDictionary = <{ [id: string]: { [id: string]: string } }>{
    [SystemLanguageEnum.EN_US]: english,
    [SystemLanguageEnum.PT_BR]: portuguese
};

