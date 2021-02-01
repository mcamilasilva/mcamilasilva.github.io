import { SystemLanguageEnum } from '../models/enums/system-language.enum';
import { TitleEnum } from '../models/enums/title.enum';

const english = <{ [id: string]: string }> {
    [TitleEnum.ABOUT_ME]: 'About me',
    [TitleEnum.AGE]: 'Age',
    [TitleEnum.CERTIFICATIONS]: 'Certifications',
    [TitleEnum.DETAILS]: 'Details',
    [TitleEnum.EDUCATION]: 'Education',
    [TitleEnum.EMAIL]: 'Email',
    [TitleEnum.LANGUAGES]: 'Languages',
    [TitleEnum.LOCATION]: 'Location',
    [TitleEnum.PHONE]: 'Phone',
    [TitleEnum.SKILLS]: 'My Skills',
    [TitleEnum.WORK_EXPERIENCE]: 'Work Experience'
};

const portuguese = <{ [id: string]: string }> {
    [TitleEnum.ABOUT_ME]: 'Sobre mim',
    [TitleEnum.AGE]: 'Idade',
    [TitleEnum.CERTIFICATIONS]: 'Certificações',
    [TitleEnum.DETAILS]: 'Detalhes',
    [TitleEnum.EDUCATION]: 'Formação',
    [TitleEnum.EMAIL]: 'Email',
    [TitleEnum.LANGUAGES]: 'Idiomas',
    [TitleEnum.LOCATION]: 'Localização',
    [TitleEnum.PHONE]: 'Telefone',
    [TitleEnum.SKILLS]: 'Skills',
    [TitleEnum.WORK_EXPERIENCE]: 'Experiência'
};

export const TitleDictionary = <{ [id: string]: { [id: string]: string } }>{
    [SystemLanguageEnum.EN_US]: english,
    [SystemLanguageEnum.PT_BR]: portuguese
};

