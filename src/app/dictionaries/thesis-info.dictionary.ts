import { SystemLanguageEnum } from '../models/enums/system-language.enum';
import { SchoolEnum } from '../models/enums/school.enum';
import { ThesisInfoEnum } from '../models/enums/thesis-info.enum';

const english = <{ [id: string]: string }> {
    [ThesisInfoEnum.LINK_LABEL]: 'Thesis (pt-br)',
    [ThesisInfoEnum.TITLE_LABEL]: 'Thesis title',
    [ThesisInfoEnum.THESIS_TITLE]: 'Take your time but do not wait too long: Decision-making by user demand using web data'
};

const portuguese = <{ [id: string]: string }> {
    [ThesisInfoEnum.LINK_LABEL]: 'Dissertação',
    [ThesisInfoEnum.TITLE_LABEL]: 'Título da dissertação',
    [ThesisInfoEnum.THESIS_TITLE]: 'Faça no seu ritmo mas não perca a hora: tomada de decisão sob demandado usuário utilizando dados da Web'
};

export const ThesisInfoDictionary = <{ [id: string]: { [id: string]: string } }>{
    [SystemLanguageEnum.EN_US]: english,
    [SystemLanguageEnum.PT_BR]: portuguese
};

