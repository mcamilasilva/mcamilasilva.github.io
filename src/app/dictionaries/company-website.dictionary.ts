import { SystemLanguageEnum } from '../models/enums/system-language.enum';
import { CompanyEnum } from '../models/enums/company.enum';

const english = <{ [id: string]: string }> {
    [CompanyEnum.AUDAXWARE]: 'https://www.audaxware.com',
    [CompanyEnum.OPUS]: 'https://www.opus-software.com.br/en/better-for-enus',
    [CompanyEnum.UBER]: 'https://www.uber.com'
};

const portuguese = <{ [id: string]: string }> {
    [CompanyEnum.AUDAXWARE]: 'https://www.audaxware.com',
    [CompanyEnum.OPUS]: 'https://www.opus-software.com.br',
    [CompanyEnum.UBER]: 'https://www.uber.com/br/pt-br'
};

export const CompanyWebsiteDictionary = <{ [id: string]: { [id: string]: string } }>{
    [SystemLanguageEnum.EN_US]: english,
    [SystemLanguageEnum.PT_BR]: portuguese
};

