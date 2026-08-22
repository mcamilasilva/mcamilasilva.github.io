import { SystemLanguageEnum } from '../models/enums/system-language.enum';
import { LinkedinInfoEnum } from '../models/enums/linkedin-info.enum';
import { AboutMeInfoEnum } from '../models/enums/about-me-info.enum';
import { LocaleDictionary } from './locale.dictionary';
import { LocaleEnum } from '../models/enums/locale.enum';

/**
 * Calculates the age based on the birthdate and the current date
 * 
 */
function calculateAge() {
    let birthdate: Date = new Date();
    birthdate.setDate(7);
    birthdate.setMonth(8); //September
    birthdate.setFullYear(1992);
    let timeDiff = Math.abs(Date.now() - birthdate.getTime());
    return Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
}

const commons = <{ [id: string]: string }>{
    [AboutMeInfoEnum.AGE]: String(calculateAge()),
    [AboutMeInfoEnum.EMAIL]: 'manoelacamila.silva@gmail.com',
};

const english = <{ [id: string]: any }>{
    [AboutMeInfoEnum.PHONE]: '+1 (647) 450-4209',
    [AboutMeInfoEnum.LOCATION]: LocaleDictionary[SystemLanguageEnum.EN_US][LocaleEnum.TORONTO],
    [AboutMeInfoEnum.BIO]: [
        `I am a Senior Backend Engineer with 10+ years of experience building and operating large-scale systems, including Ads and authentication platforms at Uber. I enjoy turning product ideas into reliable software that people actually use.`,
        `I work primarily on the backend (Java, Go, C#, APIs, and distributed systems) and I am comfortable across the stack when the work requires it. I care about clean design, maintainable code, and practices that keep systems healthy as they grow.`,
        `I am hands-on, collaborative, and curious. I work best in teams where people challenge each other, share knowledge, and keep raising the bar.`
    ]
};

const portuguese = <{ [id: string]: any }>{
    [AboutMeInfoEnum.PHONE]: '+1 (647) 450-4209',
    [AboutMeInfoEnum.LOCATION]: LocaleDictionary[SystemLanguageEnum.PT_BR][LocaleEnum.TORONTO],
    [AboutMeInfoEnum.BIO]: [
        'Sou Engenheira de Software Sênior, com foco em backend e experiência em sistemas de larga escala, incluindo autenticação e gerenciamento de sessões na Uber. Gosto de transformar ideias em software confiável, que de fato melhora o dia a dia das pessoas.',
        'Atuo principalmente no backend (Java, Go, C#, APIs e sistemas distribuídos) e tenho fluência em front-end quando o projeto exige. Valorizo código limpo, bom design e práticas que sustentam o crescimento do sistema.',
        'Tenho perfil prático, colaborativo e curioso. Acredito que times fortes aprendem juntos e que o conhecimento sempre pode ser aprimorado.'
    ]
};

export const AboutMeInfoDictionary = <{ [id: string]: { [id: string]: any } }>{
    [SystemLanguageEnum.EN_US]: Object.assign({}, commons, english),
    [SystemLanguageEnum.PT_BR]: Object.assign({}, commons, portuguese),
};

