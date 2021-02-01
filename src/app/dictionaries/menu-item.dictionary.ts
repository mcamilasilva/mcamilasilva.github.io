import { SystemLanguageEnum } from '../models/enums/system-language.enum';
import { MenuItemEnum } from '../models/enums/menu-item.enum';

const english = <{ [id: string]: string }> {
    [MenuItemEnum.ABOUT_ME]: 'About me',
    [MenuItemEnum.CERTIFICATION]: 'Certifications',
    [MenuItemEnum.EDUCATION]: 'Education',
    [MenuItemEnum.SKILLS]: 'Skills',
    [MenuItemEnum.WORK_EXPERIENCE]: 'Experience'
};

const portuguese = <{ [id: string]: string }> {
    [MenuItemEnum.ABOUT_ME]: 'Sobre',
    [MenuItemEnum.CERTIFICATION]: 'Certificações',
    [MenuItemEnum.EDUCATION]: 'Formação',
    [MenuItemEnum.SKILLS]: 'Skills',
    [MenuItemEnum.WORK_EXPERIENCE]: 'Experiência'
};

export const MenuItemDictionary = <{ [id: string]: { [id: string]: string } }>{
    [SystemLanguageEnum.EN_US]: english,
    [SystemLanguageEnum.PT_BR]: portuguese
};

