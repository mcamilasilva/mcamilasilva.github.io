import { SystemLanguageEnum } from '../models/enums/system-language.enum';
import { LinkedinInfoEnum } from '../models/enums/linkedin-info.enum';

const english = <{ [id: string]: string }> {
    [LinkedinInfoEnum.LINK]: 'https://www.linkedin.com/in/mcbsilva/?locale=en_US',
    [LinkedinInfoEnum.TOOLTIP]: 'Profile on LinkedIn'
};

const portuguese = <{ [id: string]: string }> {
    [LinkedinInfoEnum.LINK]: 'https://www.linkedin.com/in/mcbsilva',
    [LinkedinInfoEnum.TOOLTIP]: 'Página do LinkedIn'
};

export const LinkedinInfoDictionary = <{ [id: string]: { [id: string]: string } }>{
    [SystemLanguageEnum.EN_US]: english,
    [SystemLanguageEnum.PT_BR]: portuguese
};

