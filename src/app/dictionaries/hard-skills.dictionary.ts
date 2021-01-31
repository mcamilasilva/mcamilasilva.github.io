import { SystemLanguageEnum } from '../models/enums/system-language.enum';
import { HardSkillEnum } from '../models/enums/hard-skill.enum';

const commons = <{ [id: string]: string }> {
    [HardSkillEnum.ANGULAR]: 'AngularJS / Angular 2+',
    [HardSkillEnum.AWS]: 'AWS',
    [HardSkillEnum.C_SHARP]: 'C#',
    [HardSkillEnum.DATA_WAREHOUSE]: 'Data Warehouse',
    [HardSkillEnum.DESIGN_PATTERNS]: 'Design Patterns',
    [HardSkillEnum.DDD]: 'DDD',
    [HardSkillEnum.ENTITY_FRAMEWORK]: 'Entity Framework',
    [HardSkillEnum.FRONT_TECHNOLOGIES]: 'HTML / CSS ',
    [HardSkillEnum.GIT]: 'Git',
    [HardSkillEnum.HIBERNATE]: 'Hibernate',
    [HardSkillEnum.JAVA]: 'Java',
    [HardSkillEnum.JAVASCRIPT_TYPESCRIPT]: 'Javascript / Typescript',
    [HardSkillEnum.JENKINS]: 'Jenkins',
    [HardSkillEnum.JIRA_CONFLUENCE]: 'Jira / Confluence',
    [HardSkillEnum.JSON]: 'JSON',
    [HardSkillEnum.JUNIT]: 'JUnit',
    [HardSkillEnum.KENDO_UI]: 'Kendo UI',
    [HardSkillEnum.MAVEN]: 'Maven',
    [HardSkillEnum.MONGO_DB]: 'MongoDB',
    [HardSkillEnum.MY_SQL]: 'My SQL',
    [HardSkillEnum.NEO4J]: 'Neo4j',
    [HardSkillEnum.OLAP]: 'OLAP',
    [HardSkillEnum.POSTGRESQL]: 'PostgreSQL',
    [HardSkillEnum.POSTMAN]: 'Postman',
    [HardSkillEnum.REST]: 'REST / RESTFul',
    [HardSkillEnum.SCRUM_KANBAN]: 'Scrum / Kanban',
    [HardSkillEnum.SOAPUI]: 'SoapUI',
    [HardSkillEnum.SPRING_BOOT]: 'Spring Boot',
    [HardSkillEnum.SQL_SERVER]: 'SQL Server',
    [HardSkillEnum.SWAGGER]: 'Swagger',
    [HardSkillEnum.TDD]: 'TDD',
    [HardSkillEnum.TFS]: 'TFS',
    [HardSkillEnum.XML]: 'XML',
    [HardSkillEnum.SONAR_QUBE]: 'SonarQube',
    [HardSkillEnum.CI_CD]: 'CI/CD'
}

const english = <{ [id: string]: string }> {
    [HardSkillEnum.API_DESIGN]: 'API Design',
    [HardSkillEnum.OOP]: 'OOP',
    [HardSkillEnum.PROGRAMMING_LOGIC]: 'Programming Logic',
};

const portuguese = <{ [id: string]: string }> {
    [HardSkillEnum.API_DESIGN]: 'Design de API',
    [HardSkillEnum.OOP]: 'POO',
    [HardSkillEnum.PROGRAMMING_LOGIC]: 'Lógica de Programação',
};

export const HardSkillsDictionary = <{ [id: string]: { [id: string]: string } }>{
    [SystemLanguageEnum.EN_US]: Object.assign({}, commons, english),
    [SystemLanguageEnum.PT_BR]: Object.assign({}, commons, portuguese),
};

