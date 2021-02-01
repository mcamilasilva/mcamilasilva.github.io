import { ActivityItem } from '../models/activity-item';
import { ActivityTypeEnum } from '../models/enums/activity-type.enum';
import { SystemLanguageEnum } from '../models/enums/system-language.enum';
import { WorkExperienceEnum } from '../models/enums/work-experience.enum';


const english = <{ [id: string]: ActivityItem[] }>{
    [WorkExperienceEnum.OPUS_SENIOR_TECH_LEAD]: [
        new ActivityItem(ActivityTypeEnum.CODING, "Evolution of a bank loan application into a white label plataform which allowed the client to offer the platform to key partners with minimal effort and profit from the loans provided by the partners"),
        new ActivityItem(ActivityTypeEnum.CODING, "Study and initiation of the use of AWS Batch for batch processing"),
        new ActivityItem(ActivityTypeEnum.SUPPORT, "Recording of a training on how the white label platform works, in both technical and user's experience levels, to facilitate the onboarding of new members to the team. Before that, a member of the team had to give the same training over and over again every time a new person would ome along")
    ],
    [WorkExperienceEnum.OPUS_INTERMEDIATE_DEVELOPER]: [
        new ActivityItem(ActivityTypeEnum.CODING, "Development of an Open API architecture and responsive web app that provide bank loans for individuals, which soon achieved the mark of R$1M in loans granted and allowed the client to close several loan dedicated branches reducing their expenses"),
        new ActivityItem(ActivityTypeEnum.CODING, "Remodelling of the database and API structure of the main Brazilian FoodTech company, creating a well-defined ETL process and increasing their code-efficiency by 10x"),
        new ActivityItem(ActivityTypeEnum.CODING, "Development of a platform that allows individuals and companies to join consortiums of real estate, vehicles and/or services")
    ],
    [WorkExperienceEnum.AUDAXWARE]: [
        new ActivityItem(ActivityTypeEnum.CODING, "Rewrite of the legacy system by using the technologies above mentioned and improvement of it after it was released, which not only improved the user experience, but also the code efficiency, allowing the onboarding of two new big companies to the software"),
        new ActivityItem(ActivityTypeEnum.DATABASE, "Data migration from PostgreSQL to SQL Server"),
        new ActivityItem(ActivityTypeEnum.CODING, "Support to the old system until the new one was ready to be released and the data migration was done"),
        new ActivityItem(ActivityTypeEnum.SUPPORT, "Support to clients on how to use the system"),
    ],
    [WorkExperienceEnum.OPUS_JR_SYSTEM_ANALYST]: [
        new ActivityItem(ActivityTypeEnum.CODING, "Development of an online learning responsive webapp for an English school"),
        new ActivityItem(ActivityTypeEnum.CODING, "Development of a repository containing front-end components to be used internally on new projects. The idea here was to have something like a internal bootstrap to optimize developers' time when initiating new projects")
    ]
};

const portuguese = <{ [id: string]: ActivityItem[] }>{
    [WorkExperienceEnum.OPUS_SENIOR_TECH_LEAD]: [
        new ActivityItem(ActivityTypeEnum.CODING, "Evolução de uma plataforma de empréstimo bancário para transformá-la em white label, permitindo que o nosso cliente possa oferecer a plataforma para parceiros chave com mínimo esforço e obter lucro a partir disso"),
        new ActivityItem(ActivityTypeEnum.CODING, "Estudo e implementação do uso do AWS Batch para processamentos em lote"),
        new ActivityItem(ActivityTypeEnum.SUPPORT, "Gravação de um treinamento sobre a plataforma white label, tanto em nível técnico quanto de experiência do usuário. Antes disso, membros do time precisavam dar esse mesmo treinamento toda vez que algum colaborador novo se juntava ao time")
    ],
    [WorkExperienceEnum.OPUS_INTERMEDIATE_DEVELOPER]: [
        new ActivityItem(ActivityTypeEnum.CODING, "Desenvolvimento de uma Open API e plataforma web responsiva que fornecem empréstimo bancários para indivíduos, a qual rapidamente atingiu a marca de R$1M em empréstimos e permitiu ao nosso cliente realizar o fechamento de diversas lojas físicas, diminuindo custos"),
        new ActivityItem(ActivityTypeEnum.CODING, "Remodelagem da base de dados e API da principal FoodTech brasileira, o que resultou na criação de um processo de ETL bem definido e aumento de performance da API na grandeza de 10x"),
        new ActivityItem(ActivityTypeEnum.CODING, "Desenvolvimento de uma plataforma web para consórcio de imóveis, automóveis e/ou serviços")
    ],
    [WorkExperienceEnum.AUDAXWARE]: [
        new ActivityItem(ActivityTypeEnum.CODING, "Reescrita do sistema legado usando as tecnologias acima mencionadas e evolução do sistema após finalizado. Essa mudança não somente melhorou a experiência do usuário mas também a eficiência do código, o que permitiu a aquisição de duas novas grandes empresas como clientes"),
        new ActivityItem(ActivityTypeEnum.DATABASE, "Migração dos dados de PostgreSQL para SQL Server"),
        new ActivityItem(ActivityTypeEnum.CODING, "Suporte ao sistema legado até que o novo estivesse pronto e a migração de dados realizada"),
        new ActivityItem(ActivityTypeEnum.SUPPORT, "Suporte aos clientes em como utilizar o novo sistema"),
    ],
    [WorkExperienceEnum.OPUS_JR_SYSTEM_ANALYST]: [
        new ActivityItem(ActivityTypeEnum.CODING, "Desenvolvimento de uma plataforma web responsiva de aprendizado online para uma escola de inglês"),
        new ActivityItem(ActivityTypeEnum.CODING, "Desenvolvimento de um repositório de componentes front-end a ser utilizado internamente em novos projetos. A ideia era ter uma espécie de bootstrap interna, com a identidade da empresa, para otimizar o tempo dos desenvolvedores quando iniciando novos projetos")
    ]
};

export const WorkExperienceActivitiesDictionary = <{ [id: string]: { [id: string]: ActivityItem[] } }>{
    [SystemLanguageEnum.EN_US]: english,
    [SystemLanguageEnum.PT_BR]: portuguese
};