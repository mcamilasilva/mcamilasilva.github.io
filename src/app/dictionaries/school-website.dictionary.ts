import { SchoolEnum } from '../models/enums/school.enum';
import { SystemLanguageEnum } from '../models/enums/system-language.enum';

const websites = <{ [id: string]: string }> {
    [SchoolEnum.SAPIENZA]: 'https://www.uniroma1.it/it/pagina-strutturale/home',
    [SchoolEnum.UFSCAR]: 'https://www.sorocaba.ufscar.br'
};

export const SchoolWebsiteDictionary = <{ [id: string]: { [id: string]: string } }>{
    [SystemLanguageEnum.EN_US]: websites,
    [SystemLanguageEnum.PT_BR]: websites
};