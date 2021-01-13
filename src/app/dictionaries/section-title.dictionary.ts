import { SystemLanguage } from '../models/enums/system-language.enum';
import { SectionTitle } from '../models/enums/section-title.enum';

const english = <{ [id: string]: string }> {
    [SectionTitle.ABOUT_ME]: 'About me',
    [SectionTitle.AGE]: 'Age',
    [SectionTitle.CERTIFICATIONS]: 'Certifications',
    [SectionTitle.DETAILS]: 'Details',
    [SectionTitle.EDUCATION]: 'Education',
    [SectionTitle.EMAIL]: 'Email',
    [SectionTitle.LANGUAGES]: 'Languages',
    [SectionTitle.LOCATION]: 'Location',
    [SectionTitle.PHONE]: 'Phone',
    [SectionTitle.SKILLS]: 'My Skills',
    [SectionTitle.WORK_EXPERIENCE]: 'Work Experience'
};

const portuguese = <{ [id: string]: string }> {
    [SectionTitle.ABOUT_ME]: 'Sobre mim',
    [SectionTitle.AGE]: 'Idade',
    [SectionTitle.CERTIFICATIONS]: 'Certificações',
    [SectionTitle.DETAILS]: 'Detalhes',
    [SectionTitle.EDUCATION]: 'Formação',
    [SectionTitle.EMAIL]: 'Email',
    [SectionTitle.LANGUAGES]: 'Idiomas',
    [SectionTitle.LOCATION]: 'Localização',
    [SectionTitle.PHONE]: 'Telefone',
    [SectionTitle.SKILLS]: 'Skills',
    [SectionTitle.WORK_EXPERIENCE]: 'Experiência'
};

export const SectionTitleDictionary = <{ [id: string]: { [id: string]: string } }>{
    [SystemLanguage.EN_US]: english,
    [SystemLanguage.PT_BR]: portuguese
};

