import { ResumeInfoEnum } from "../models/enums/resume-info.enum";
import { SystemLanguageEnum } from "../models/enums/system-language.enum";

const english = <{ [id: string]: string }> {
    [ResumeInfoEnum.FILE_NAME_SUFFIX]: 'Resume',
    [ResumeInfoEnum.URI]: 'https://drive.google.com/uc?export=download&id=15Jvl7DESK0ieoPxH-vCqz-NcAHK-eU9J'
};

const portuguese = <{ [id: string]: string }> {
    [ResumeInfoEnum.FILE_NAME_SUFFIX]: 'Curriculo',
    [ResumeInfoEnum.URI]: 'https://drive.google.com/uc?export=download&id=1seTtbjV6C10fe9duf4ll8eoRe42ij0yT'
};

export const ResumeInfoDictionary = <{ [id: string]: { [id: string]: string } }>{
    [SystemLanguageEnum.EN_US]: english,
    [SystemLanguageEnum.PT_BR]: portuguese
};