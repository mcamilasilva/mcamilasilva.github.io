import { SystemLanguage } from '../models/enums/system-language.enum';
import { MajorDegree } from '../models/enums/major-degree.enum';

const english = <{ [id: string]: string }> {
    [MajorDegree.MASTER]: `Master's Degree`,
    [MajorDegree.BACHELOR]: `Bachelor's Degree`,
    [MajorDegree.ACADEMIC_EXCHANGE]: `Academic Exchange`
};

const portuguese = <{ [id: string]: string }> {
    [MajorDegree.MASTER]: 'Mestrado Acadêmico',
    [MajorDegree.BACHELOR]: 'Bacharelado',
    [MajorDegree.ACADEMIC_EXCHANGE]: 'Intercâmbio Acadêmico'
};

export const MajorDegreeDictionary = <{ [id: string]: { [id: string]: string } }>{
    [SystemLanguage.EN_US]: english,
    [SystemLanguage.PT_BR]: portuguese
};

