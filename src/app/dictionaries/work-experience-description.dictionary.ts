import { SystemLanguageEnum } from '../models/enums/system-language.enum';
import { WorkExperienceEnum } from '../models/enums/work-experience.enum';


const portuguese = <{ [id: string]: string }>{
    [WorkExperienceEnum.UBER_SENIOR_SOFTWARE_ENGINEER]: `Uber é uma Big Tech com foco em mobilidade urbana, cujo os serviços incluem: 
        transporte privado, entrega de comida/pacotes, transporte de carga, entre outros. O time de "Session Management",  do qual eu faço parte, é responsável por 
        cuidar de toda a parte de autenticação dos usuários assim como gerenciamento de sessões. Como Engenheira Backend Sênior no time minhas principais contribuições até o momento foram:`,
    [WorkExperienceEnum.UBER_SOFTWARE_ENGINEER]: `Durante meu tempo como Engenheira Backend L4 na Uber, eu tive a oportunidade de trabalhar em diversos projetos e atividades, alguns dos quais listados abaixo:`,
    [WorkExperienceEnum.OPUS_SENIOR_TECH_LEAD]: `A OPUS Software é uma consultoria localizada em São Paulo - SP. Como Tech Lead e Desenvolvedor Sênior, minhas 
        responsabilidades consistiam principalmente do design de soluções, codificação, realização de code review and assistência aos meus colegas no intuito de 
        atingir as melhores soluções utilizando-se das melhores práticas. Alguma dos projetos que eu estive envolvida foram:`,
    [WorkExperienceEnum.OPUS_INTERMEDIATE_DEVELOPER]: `Devido ao fato de que a OPUS é uma empresa de consultoria, eu tive a oportunidade de trabalhar em diversos 
        projetos e com uma ampla variedade de tecnologias. Os principais projetos que eu trabalhei durante meu tempo como desenvolvedor pleno foram:`,
    [WorkExperienceEnum.AUDAXWARE]: `A Audaxware é uma startup localizada em Austin, Texas cujo produto é um sistema de planejamento de projeto. Em 2015, quando eu 
        fui contratada, eles possuíam um sistema legado que estava desenvolvido em ASP.Net com PostgreSQL e eles queriam construir um novo em C#, AngularJS e SQL 
        Server. Minhas principais contribuições foram:`,
    [WorkExperienceEnum.OPUS_JR_SYSTEM_ANALYST]: `Esse foi o meu primeiro trabalho relacionado à tecnologia. Eu havia estava terminado minha graduação e me foi 
        fornecido um excelente ambiente para aprender e crescer como profissional. Os principais projetos que eu participei durante esse tempo foram:`
};

const english = <{ [id: string]: string }>{
    [WorkExperienceEnum.UBER_SENIOR_SOFTWARE_ENGINEER]: `Uber is Big Tech focused on urban mobility and transportation, whose services include,
        but are not limited to: ride-sharing, food and package delivery, couriers and freight transportation. The "Session Management" team, from which I am a member,
        is responsible for taking care of all matters related to user's authentication and user's identity evaluation, as well as control of user's sessions. As a Senior Backend Engineer,
        my main contributions so far have been:`,
    [WorkExperienceEnum.UBER_SOFTWARE_ENGINEER]: `During my time as L4 Backend Engineer at Uber I had the opportunity of working in a variety of projects and activities, some of which included:`,
    [WorkExperienceEnum.OPUS_SENIOR_TECH_LEAD]: `OPUS Software is a software development consulting company based in São Paulo - Brazil. As Tech Lead and Senior 
        Developer, my responsibilities consisted mostly of designing solutions, coding, performing code review and assisting my colleagues in order to come out 
        with the best solutions and practices. Some of the projects I was involved are given as follows:`,
    [WorkExperienceEnum.OPUS_INTERMEDIATE_DEVELOPER]: `Due to the fact that OPUS Software is a consulting company, I had the opportunity of working in many different 
        projects and with a variety of technologies. As a Software Developer, the main projects I was involved to were:`,
    [WorkExperienceEnum.AUDAXWARE]: `Audaxware is a startup based in Austin - Texas whose product is a project planning system. Back in 2015 they had legacy system 
        which was developed using ASP.Net with a PostgreSQL database, and they wanted to change it to C#, AngularJS and SQL Server. My main contributions were:`,
    [WorkExperienceEnum.OPUS_JR_SYSTEM_ANALYST]: `This one was my first job related to technology. I was just finishing my Bachelor's Degree when I got there, and 
        it provided a great environment for me to learn and grow as professional. The main projects I was involved were:`
};

export const WorkExperienceDescriptionDictionary = <{ [id: string]: { [id: string]: string } }>{
    [SystemLanguageEnum.EN_US]: english,
    [SystemLanguageEnum.PT_BR]: portuguese
};