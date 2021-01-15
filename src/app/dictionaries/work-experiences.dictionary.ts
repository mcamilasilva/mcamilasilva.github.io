import { ActivityItem } from '../models/activity-item';
import { ActivityTypeEnum } from '../models/enums/activity-type.enum';
import { MonthEnum } from '../models/enums/month.enum';
import { SystemLanguageEnum } from '../models/enums/system-language.enum';
import { MonthYear } from '../models/month-year';
import { Period } from '../models/period';
import { WorkExperience } from '../models/work-experience';


const english = [
    new WorkExperience('Senior Software Developer / Tech Lead', 'OPUS Software Ltda.', new Period(new MonthYear(MonthEnum.NOV, 2019)),
        'OPUS Software is a software development consulting company based in São Paulo - Brazil. As Tech Lead and Senior Developer, my responsabilities consist mostly of designing solutions, coding, performing code review and assisting my colleagues in order to come out with the best solutions and practices. Currently, I am part of a team that develops and mantains a white label platform that provides bank loans for individuals. Some of the activities I have been involved are given as follows:',
        [
            new ActivityItem(ActivityTypeEnum.CODING, "Evolution of a bank loan application into a white label plataform which allowed the client to offer the platform to key partners with minimal effort and profit from the loans provided by the partners"),
            new ActivityItem(ActivityTypeEnum.CODING, "Study and initiation of the use of AWS Batch for batch processing"),
            new ActivityItem(ActivityTypeEnum.SUPPORT, "Recording of a training on how the white label platform works, in both technical and user's experience levels, to facilitate the onboarding of new members to the team. Before that, a member of the team had to give the same training over and over again every time a new person would ome along")
        ],
        ["Java11", "Spring Boot", "Angular 6", "PostgreSQL", "AWS", "Git", "Jira", "Scrum", "Jenkins"]),
    new WorkExperience('Software Developer', 'OPUS Software Ltda.', new Period(new MonthYear(MonthEnum.NOV, 2017), new MonthYear(MonthEnum.NOV, 2019)),
        'Due to the fact that OPUS Sotware is a consulting company, I have the opportunity of working in many different projects and with a variety of technologies. As a Software Developer, the main projects I was involved to were:',
        [
            new ActivityItem(ActivityTypeEnum.CODING, "Development of an Open API architecture and responsive web app that provide bank loans for individuals, which soon achieved the mark of R$1M in loans granted and allowed the client to close several loan dedicated branches reducing their expenses"),
            new ActivityItem(ActivityTypeEnum.CODING, "Remodelling of the database and API structure of a big brazilian FoodTech, creating a well-defined ETL process and increasing their code-efficiency by 10x"),
            new ActivityItem(ActivityTypeEnum.CODING, "Development of an platform that allows individuals and companies to join consortiums of real estate, vehicles and/or services")
        ],
        ["Java8, Spring Boot, Angular 2, My SQL, AWS, Git, Jira, Scrum, Jenkins"]),
    new WorkExperience('Web Developer', 'Audaxware LLC', new Period(new MonthYear(MonthEnum.NOV, 2015), new MonthYear(MonthEnum.NOV, 2017)),
        'Audaxware is a startup based in Austin - Texas whose product is a project planning system. Back in 2015 they had legacy system which was developed using ASP.Net with a PostgreSQL database, and they wanted to change it to C#, AngularJS and SQL Server. My main activities were:',
        [
            new ActivityItem(ActivityTypeEnum.CODING, "Rewrite of the old system using the technologies above mentioned and evolution of the system, which not only improved the user experience, but also the code efficiency, allowing the onboarding of two new big companies to the software"),
            new ActivityItem(ActivityTypeEnum.DATABASE, "Data migration from PostgreSQL to SQL Server"),
            new ActivityItem(ActivityTypeEnum.CODING, "Support to the old system until the new one was ready to be released and the data migration was done"),
            new ActivityItem(ActivityTypeEnum.SUPPORT, "Support to the clients on how to use the system"),
        ],
        ["C#, SQL Server, AngularJS, Kendo UI, Material, Azure, Web Job, TFS, Kanban"]),
    new WorkExperience('System Analyst', 'OPUS Software Ltda.', new Period(new MonthYear(MonthEnum.JAN, 2015), new MonthYear(MonthEnum.NOV, 2015)),
        `This was my first job related to technology. I was just finishing my Bachelor's Degree when I got there, and it provided a great environment for me to learn and grow as professional. The main projects I was involved were:`,
        [
            new ActivityItem(ActivityTypeEnum.CODING, "Development of an online learning responsive webapp for an English school"),
            new ActivityItem(ActivityTypeEnum.CODING, "Development of a repository containing front-end components to be used internally on new projects. The idea here was to have something like a internal bootstrap to optimize developers' time when initiating new projects")
        ],
        ["C#, SQL Server, AngularJS, Knockout, Bootstrap, Scrum"])
];

const portuguese = [
    new WorkExperience('Desenvolvedora Sênior / Tech Lead', 'OPUS Software Ltda.', new Period(new MonthYear(MonthEnum.NOV, 2019)),
        'A OPUS Software é uma consultoria localizada em São Paulo - SP. Como Tech Lead e Desenvolvedor Sênior, minhas responsabilidades consistem principalmente do design de soluções, codificação, realização de code review and assistência aos meus colegas no intuito de atingir as melhores soluções utilizando-se das melhores práticas. Atualmente, eu sou parte de um time que desenvolve uma plataforma white label que fornece empréstimos bancários para indivíduos. Alguma das atividades que eu tenho estado envolvida são:',
        [
            new ActivityItem(ActivityTypeEnum.CODING, "Evolução de uma plataforma de empréstimo bancário para transformá-la em white label, permitindo que o nosso cliente possa oferecer a plataforma para parceiros chave com mínimo esforço e obter lucro a partir disso"),
            new ActivityItem(ActivityTypeEnum.CODING, "Estudo e implementação do uso do AWS Batch para processamentos em lote"),
            new ActivityItem(ActivityTypeEnum.SUPPORT, "Gravação de um treinamento sobre a plataforma white label, tanto em nível técnico quanto de experiência do usuário. Antes disso, membros do time precisavam dar esse mesmo treinamento toda vez que algum colaborador novo se juntava ao time")
        ],
        ["Java11", "Spring Boot", "Angular 6", "PostgreSQL", "AWS", "Git", "Jira", "Scrum", "Jenkins"]),
    new WorkExperience('Desenvolvedora Pleno', 'OPUS Software Ltda.', new Period(new MonthYear(MonthEnum.NOV, 2017), new MonthYear(MonthEnum.NOV, 2019)),
        'Devido ao fato de que a OPUS é uma empresa de consultoria, eu tenho a oportunidade de trabalhar em diversos projetos e com uma ampla variedade de tecnologias. Os principais projetos que eu trabalhei durante meu tempo como desenvolvedor pleno foram:',
        [
            new ActivityItem(ActivityTypeEnum.CODING, "Desenvolvimento de uma Open API e plataforma web responsiva que fornecem empréstimo bancários para indivíduos, a qual rapidamente atingiu a marca de R$1M em empréstimos e permitiu ao nosso cliente realizar o fechamento de diversas lojas físicas, diminuindo custos"),
            new ActivityItem(ActivityTypeEnum.CODING, "Remodelagem da base de dados e API de uma grande FoodTech brasileira, o que resultou na criação de um processo de ETL bem definido e aumento de performance da API na grandeza de 10x"),
            new ActivityItem(ActivityTypeEnum.CODING, "Desenvolvimento de uma plataforma web para consórcio de imóveis, automóveis e/ou serviços")
        ],
        ["Java8, Spring Boot, Angular 2, My SQL, AWS, Git, Jira, Scrum, Jenkins"]),
    new WorkExperience('Desenvolvedora Web', 'Audaxware LLC', new Period(new MonthYear(MonthEnum.NOV, 2015), new MonthYear(MonthEnum.NOV, 2017)),
        'A Audaxware é uma startup localizada em Austin, Texas cujo produto é um sistema de planejamento de projeto. Em 2015, quando eu fui contratada, eles possuíam um sistema legado que estava desenvolvido em ASP.Net com PostgreSQL e eles queriam construir um novo em C#, AngularJS e SQL Server. Minhas principais atividades foram:',
        [
            new ActivityItem(ActivityTypeEnum.CODING, "Reescrita do sistema legado usando as tecnologias acima mencionadas e evolução do sistema após finalizado. Essa mudança não somente melhorou a experiência do usuário mas também a eficiência do código, o que permitiu a aquisição de duas novas grandes empresas como clientes"),
            new ActivityItem(ActivityTypeEnum.DATABASE, "Migração dos dados de PostgreSQL para SQL Server"),
            new ActivityItem(ActivityTypeEnum.CODING, "Suporte ao sistema legado até que o novo estivesse pronto e a migração de dados realizada"),
            new ActivityItem(ActivityTypeEnum.SUPPORT, "Suporte aos clientes em como utilizar o novo sistema"),
        ],
        ["C#, SQL Server, AngularJS, Kendo UI, Material, Azure, Web Job, TFS, Kanban"]),
    new WorkExperience('Analista de Sistemas', 'OPUS Software Ltda.', new Period(new MonthYear(MonthEnum.JAN, 2015), new MonthYear(MonthEnum.NOV, 2015)),
        'Esse foi o meu primeiro trabalho relacionado à tecnologia. Eu havia estava terminado minha graduação e me foi fornecido um excelente ambiente para aprender e crescer como profissional. Os principais projetos que eu participei durante esse tempo foram:',
        [
            new ActivityItem(ActivityTypeEnum.CODING, "Desenvolvimento de uma plataforma web responsiva de aprendizado online para uma escola de inglês"),
            new ActivityItem(ActivityTypeEnum.CODING, "Desenvolvimento de um repositório de componentes front-end a ser utilizado internamente em novos projetos. A ideia era ter uma espécie de bootstrap interna, com a identidade da empresa, para otimizar o tempo dos desenvolvedores quando iniciando novos projetos")
        ],
        ["C#, SQL Server, AngularJS, Knockout, Bootstrap, Scrum"])
];

export const WorkExperiencesDictionary = <{ [id: string]: WorkExperience[] }>{
    [SystemLanguageEnum.EN_US]: english,
    [SystemLanguageEnum.PT_BR]: portuguese
};