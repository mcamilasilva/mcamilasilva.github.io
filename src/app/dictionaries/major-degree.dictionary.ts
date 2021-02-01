import { SystemLanguageEnum } from '../models/enums/system-language.enum';
import { MajorDegreeEnum } from '../models/enums/major-degree.enum';

const english = <{ [id: string]: string }> {
    [MajorDegreeEnum.MASTER]: `Master's Degree`,
    [MajorDegreeEnum.BACHELOR]: `Bachelor's Degree`,
    [MajorDegreeEnum.ACADEMIC_EXCHANGE]: `Academic Exchange`
};

const portuguese = <{ [id: string]: string }> {
    [MajorDegreeEnum.MASTER]: 'Mestrado Acadêmico',
    [MajorDegreeEnum.BACHELOR]: 'Bacharelado',
    [MajorDegreeEnum.ACADEMIC_EXCHANGE]: 'Intercâmbio Acadêmico'
};

export const MajorDegreeDictionary = <{ [id: string]: { [id: string]: string } }>{
    [SystemLanguageEnum.EN_US]: english,
    [SystemLanguageEnum.PT_BR]: portuguese
};

