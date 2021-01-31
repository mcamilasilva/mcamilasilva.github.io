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
    [AboutMeInfoEnum.EMAIL]: 'manoelacamila.silva@gamil.com',
};

const english = <{ [id: string]: any }>{
    [AboutMeInfoEnum.PHONE]: '+55 11 94989-8386',
    [AboutMeInfoEnum.LOCATION]: LocaleDictionary[SystemLanguageEnum.EN_US][LocaleEnum.SAO_PAULO],
    [AboutMeInfoEnum.BIO]: [
        `I am a Senior Software Developer who is passionate about technology. Seeing an idea getting off the ground and becoming something that improves people's lives brings me real joy.`,
        `Although I have a proper knowledge of front-end techniques, my inclination is towards back-end. I am also really fond of good development techniques, such as clean code, design patterns, and so on, and I try to apply them as much as possible.`,
        `Additionally, I have a strong can-do, hands-on attitude, and I am a true believer of teamwork. I am from the opinion that "two heads are better than one" and knowledge can always be improved. I just love learning new things and acquiring new skills.`
    ]
};

const portuguese = <{ [id: string]: any }>{
    [AboutMeInfoEnum.PHONE]: '(11) 94989-8386',
    [AboutMeInfoEnum.LOCATION]: LocaleDictionary[SystemLanguageEnum.PT_BR][LocaleEnum.SAO_PAULO],
    [AboutMeInfoEnum.BIO]: [
        'Desenvolvedora de Software apaixonada por tecnologia. Ver uma ideia sair do papel e virar algo que melhora a vida das pessoas, direta ou indiretamente, me traz imensa satisfação.',
        'Embora eu possua um conhecimento apropriado de front-end, minha paixão encontra-se no back-end. Também sou adepta de técnicas de boas práticas de desenvolvimento, tais como código limpo, design patterns e similares, e me empenho em aplicá-las sempre que possível.',
        `Além disso, eu tenho uma atitude prática e positiva, além de ser uma verdadeira entusiasta de traballho em equipe. Eu sou da opnião de que "duas cabeças pensam melhor do que uma" e conhecimento pode sempre ser aprimorado. Basicamente, eu amo aprender assuntos novos e adquirir novas habilidades.`
    ]
};

export const AboutMeInfoDictionary = <{ [id: string]: { [id: string]: any } }>{
    [SystemLanguageEnum.EN_US]: Object.assign({}, commons, english),
    [SystemLanguageEnum.PT_BR]: Object.assign({}, commons, portuguese),
};

