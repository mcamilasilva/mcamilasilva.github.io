import { SystemLanguageEnum } from '../models/enums/system-language.enum';
import { SoftSkillEnum } from '../models/enums/soft-skill.enum';

const english = <{ [id: string]: string }> {
    [SoftSkillEnum.ADAPTABILITY]: 'Adaptability',
    [SoftSkillEnum.ATTENTION_TO_DETAIL]: 'Attention to Detail',
    [SoftSkillEnum.COLLABORATION]: 'Collaboration',
    [SoftSkillEnum.COMMITMENT]: 'Commitment',
    [SoftSkillEnum.COMMUNICATION]: 'Communication',
    [SoftSkillEnum.CRITICAL_THINKING]: 'Critical Thinking',
    [SoftSkillEnum.LEADERSHIP]: 'Leadership',
    [SoftSkillEnum.PROBLEM_SOLVING]: 'Problem Solving',
    [SoftSkillEnum.RESILIENCE]: 'Resilience',
    [SoftSkillEnum.SELF_LEARNING]: 'Self-learning',
    [SoftSkillEnum.TEAM_WORK]: 'Teamwork',
    [SoftSkillEnum.TIME_MANAGEMENT]: 'Time Management'
    
};

const portuguese = <{ [id: string]: string }> {
    [SoftSkillEnum.ADAPTABILITY]: 'Adaptabilidade',
    [SoftSkillEnum.ATTENTION_TO_DETAIL]: 'Atenção aos Detalhes',
    [SoftSkillEnum.COLLABORATION]: 'Colaboração',
    [SoftSkillEnum.COMMITMENT]: 'Comprometimento',
    [SoftSkillEnum.COMMUNICATION]: 'Comunicação',
    [SoftSkillEnum.CRITICAL_THINKING]: 'Pensamento Crítico',
    [SoftSkillEnum.LEADERSHIP]: 'Liderança',
    [SoftSkillEnum.PROBLEM_SOLVING]: 'Resolução de Problemas',
    [SoftSkillEnum.RESILIENCE]: 'Resiliência',
    [SoftSkillEnum.SELF_LEARNING]: 'Auto-aprendizagem',
    [SoftSkillEnum.TEAM_WORK]: 'Trabalho em equipe',
    [SoftSkillEnum.TIME_MANAGEMENT]: 'Gerenciamento de tempo'
};

export const SoftSkillsDictionary = <{ [id: string]: { [id: string]: string } }>{
    [SystemLanguageEnum.EN_US]: english,
    [SystemLanguageEnum.PT_BR]: portuguese
};

