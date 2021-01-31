import { Injectable } from '@angular/core';
import { AboutMe } from '../models/about-me';
import { AboutMeDetailItem } from '../models/about-me-detail-item';
import { Certification } from '../models/certification';
import { EducationAdditionalInfo } from '../models/education-additional-info';
import { EducationItem } from '../models/education-item';
import { AboutMeInfoEnum } from '../models/enums/about-me-info.enum';
import { CompanyEnum } from '../models/enums/company.enum';
import { HardSkillEnum } from '../models/enums/hard-skill.enum';
import { LanguageEnum } from '../models/enums/language.enum';
import { LocaleEnum } from '../models/enums/locale.enum';
import { MajorDegreeEnum } from '../models/enums/major-degree.enum';
import { MajorEnum } from '../models/enums/major.enum';
import { MonthEnum } from '../models/enums/month.enum';
import { PositionEnum } from '../models/enums/position.enum';
import { SchoolEnum } from '../models/enums/school.enum';
import { SkillLevelEnum } from '../models/enums/skill-level.enum';
import { SoftSkillEnum } from '../models/enums/soft-skill.enum';
import { ThesisInfoEnum } from '../models/enums/thesis-info.enum';
import { TitleEnum } from '../models/enums/title.enum';
import { TranslationTypeEnum } from '../models/enums/translation-type.enum';
import { WorkExperienceTechnologyEnum } from '../models/enums/work-experience-technology.enum';
import { WorkExperienceEnum } from '../models/enums/work-experience.enum';
import { ExternalLink } from '../models/external-link';
import { HardSkill } from '../models/hard-skill';
import { LanguageLevel } from '../models/language-level';
import { MonthYear } from '../models/month-year';
import { Period } from '../models/period';
import { Resume } from '../models/resume';
import { Skills } from '../models/skills';
import { WorkExperience } from '../models/work-experience';
import { SystemLanguageService } from './system-language.service';
import { TranslationService } from './translation.service';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(private translationService: TranslationService,
    private systemLanguageService: SystemLanguageService) { }

  public get(): Resume {
    return new Resume(this.aboutMe, this.workExperiences, this.education, this.certifications, this.skills);
  }

  private get aboutMe(): AboutMe {
    return new AboutMe(
      [
        new AboutMeDetailItem(TitleEnum.AGE, AboutMeInfoEnum.AGE),
        new AboutMeDetailItem(TitleEnum.EMAIL, AboutMeInfoEnum.EMAIL),
        new AboutMeDetailItem(TitleEnum.PHONE, AboutMeInfoEnum.PHONE),
        new AboutMeDetailItem(TitleEnum.LOCATION, AboutMeInfoEnum.LOCATION)
      ],
      [
        new LanguageLevel(LanguageEnum.ENGLISH, 90), new LanguageLevel(LanguageEnum.PORTUGUESE, 100),
        new LanguageLevel(LanguageEnum.ITALIAN, 60)
      ]
    );
  }

  private get workExperiences(): WorkExperience[] {
    return [
      (new WorkExperience(WorkExperienceEnum.OPUS_SENIOR_TECH_LEAD, [PositionEnum.SENIOR_SOFTWARE_DEVELOPER, PositionEnum.TECH_LEAD], CompanyEnum.OPUS,
        new Period(new MonthYear(MonthEnum.NOV, 2019)), [
        WorkExperienceTechnologyEnum.JAVA_11, WorkExperienceTechnologyEnum.SPRING_BOOT, WorkExperienceTechnologyEnum.ANGULAR_6, WorkExperienceTechnologyEnum.POSTGRESQL,
        WorkExperienceTechnologyEnum.AWS, WorkExperienceTechnologyEnum.GIT, WorkExperienceTechnologyEnum.JIRA, WorkExperienceTechnologyEnum.SCRUM,
        WorkExperienceTechnologyEnum.JENKINS, WorkExperienceTechnologyEnum.SONAR_QUBE
      ])),
      (new WorkExperience(WorkExperienceEnum.OPUS_INTERMEDIATE_DEVELOPER, [PositionEnum.INTERMEDIATE_SOFTWARE_DEVELOPER], CompanyEnum.OPUS,
        new Period(new MonthYear(MonthEnum.NOV, 2017), new MonthYear(MonthEnum.NOV, 2019)), [
        WorkExperienceTechnologyEnum.JAVA_8, WorkExperienceTechnologyEnum.SPRING_BOOT, WorkExperienceTechnologyEnum.ANGULAR_2, WorkExperienceTechnologyEnum.MY_SQL,
        WorkExperienceTechnologyEnum.AWS, WorkExperienceTechnologyEnum.GIT, WorkExperienceTechnologyEnum.JIRA, WorkExperienceTechnologyEnum.SCRUM,
        WorkExperienceTechnologyEnum.JENKINS, WorkExperienceTechnologyEnum.SONAR_QUBE
      ])),
      (new WorkExperience(WorkExperienceEnum.AUDAXWARE, [PositionEnum.WEB_DEVELOPER], CompanyEnum.AUDAXWARE,
        new Period(new MonthYear(MonthEnum.NOV, 2015), new MonthYear(MonthEnum.APR, 2020)), [
        WorkExperienceTechnologyEnum.C_SHARP, WorkExperienceTechnologyEnum.SQL_SERVER, WorkExperienceTechnologyEnum.ANGULAR_JS, WorkExperienceTechnologyEnum.KENDO_UI,
        WorkExperienceTechnologyEnum.MATERIAL, WorkExperienceTechnologyEnum.AZURE, WorkExperienceTechnologyEnum.WEB_JOB, WorkExperienceTechnologyEnum.TFS,
        WorkExperienceTechnologyEnum.KANBAN
      ])),
      (new WorkExperience(WorkExperienceEnum.OPUS_JR_SYSTEM_ANALYST, [PositionEnum.SYSTEM_ANALYST], CompanyEnum.OPUS,
        new Period(new MonthYear(MonthEnum.JAN, 2015), new MonthYear(MonthEnum.NOV, 2015)), [
        WorkExperienceTechnologyEnum.C_SHARP, WorkExperienceTechnologyEnum.SQL_SERVER, WorkExperienceTechnologyEnum.ANGULAR_JS,
        WorkExperienceTechnologyEnum.KNOCKOUT, WorkExperienceTechnologyEnum.BOOTSTRAP, WorkExperienceTechnologyEnum.SCRUM
      ])),
    ];
  }

  private get education(): EducationItem[] {
    return [
      new EducationItem(SchoolEnum.UFSCAR, MajorDegreeEnum.MASTER, [MajorEnum.COMPUTER_SCIENCE, MajorEnum.BUSINESS_INTELLIGENCE],
        new Period(new MonthYear(MonthEnum.AUG, 2015), new MonthYear(MonthEnum.AUG, 2017)), LocaleEnum.SOROCABA,
        new ExternalLink('https://repositorio.ufscar.br/handle/ufscar/9154', this.translationService.translate(this.systemLanguageService.language, TranslationTypeEnum.THESIS_INFO, ThesisInfoEnum.LINK_LABEL)),
        new EducationAdditionalInfo(
          this.translationService.translate(this.systemLanguageService.language, TranslationTypeEnum.THESIS_INFO, ThesisInfoEnum.TITLE_LABEL),
          this.translationService.translate(this.systemLanguageService.language, TranslationTypeEnum.THESIS_INFO, ThesisInfoEnum.THESIS_TITLE)
        )
      ),
      new EducationItem(SchoolEnum.UFSCAR, MajorDegreeEnum.BACHELOR, [MajorEnum.COMPUTER_SCIENCE],
        new Period(new MonthYear(MonthEnum.FEB, 2011), new MonthYear(MonthEnum.JUL, 2015)), LocaleEnum.SOROCABA),
      new EducationItem(SchoolEnum.SAPIENZA, MajorDegreeEnum.ACADEMIC_EXCHANGE, [MajorEnum.COMPUTER_SCIENCE],
        new Period(new MonthYear(MonthEnum.AUG, 2013), new MonthYear(MonthEnum.AUG, 2014)), LocaleEnum.ROME)
    ];
  }

  private get certifications(): Certification[] {
    return [
      new Certification('IELTS General Training Overall Band Scores 8', 'IELTS', new MonthYear(MonthEnum.MAR, 2020)),
      new Certification('MCSA: SQL 2016 Database Development', 'MCSA', new MonthYear(MonthEnum.OCT, 2018))
    ];
  }

  private get softSkills(): SoftSkillEnum[] {
    return [
      SoftSkillEnum.TEAM_WORK, SoftSkillEnum.COLLABORATION, SoftSkillEnum.COMMITMENT,
      SoftSkillEnum.CRITICAL_THINKING, SoftSkillEnum.SELF_LEARNING, SoftSkillEnum.ADAPTABILITY,
      SoftSkillEnum.COMMUNICATION, SoftSkillEnum.TIME_MANAGEMENT, SoftSkillEnum.RESILIENCE,
      SoftSkillEnum.PROBLEM_SOLVING, SoftSkillEnum.LEADERSHIP, SoftSkillEnum.ATTENTION_TO_DETAIL
    ];
  }

  private get hardSkills(): HardSkill[] {
    return [
      new HardSkill(HardSkillEnum.OOP, SkillLevelEnum.MAX),
      new HardSkill(HardSkillEnum.DATA_WAREHOUSE, SkillLevelEnum.THREE_AND_HALF),
      new HardSkill(HardSkillEnum.OLAP, SkillLevelEnum.THREE_AND_HALF),
      new HardSkill(HardSkillEnum.SQL_SERVER, SkillLevelEnum.FOUR),
      new HardSkill(HardSkillEnum.POSTGRESQL, SkillLevelEnum.FOUR_AND_HALF),
      new HardSkill(HardSkillEnum.MY_SQL, SkillLevelEnum.THREE_AND_HALF),
      new HardSkill(HardSkillEnum.MONGO_DB, SkillLevelEnum.FOUR),
      new HardSkill(HardSkillEnum.NEO4J, SkillLevelEnum.THREE),
      new HardSkill(HardSkillEnum.SCRUM_KANBAN, SkillLevelEnum.MAX),
      new HardSkill(HardSkillEnum.JIRA_CONFLUENCE, SkillLevelEnum.FOUR),
      new HardSkill(HardSkillEnum.DDD, SkillLevelEnum.THREE_AND_HALF),
      new HardSkill(HardSkillEnum.TDD, SkillLevelEnum.MAX),
      new HardSkill(HardSkillEnum.API_DESIGN, SkillLevelEnum.FOUR),
      new HardSkill(HardSkillEnum.DESIGN_PATTERNS, SkillLevelEnum.THREE_AND_HALF),
      new HardSkill(HardSkillEnum.SWAGGER, SkillLevelEnum.FOUR),
      new HardSkill(HardSkillEnum.POSTMAN, SkillLevelEnum.FOUR),
      new HardSkill(HardSkillEnum.SOAPUI, SkillLevelEnum.TWO_AND_HALF),
      new HardSkill(HardSkillEnum.JAVA, SkillLevelEnum.MAX),
      new HardSkill(HardSkillEnum.SPRING_BOOT, SkillLevelEnum.FOUR),
      new HardSkill(HardSkillEnum.HIBERNATE, SkillLevelEnum.THREE_AND_HALF),
      new HardSkill(HardSkillEnum.C_SHARP, SkillLevelEnum.FOUR),
      new HardSkill(HardSkillEnum.ENTITY_FRAMEWORK, SkillLevelEnum.FOUR),
      new HardSkill(HardSkillEnum.JUNIT, SkillLevelEnum.THREE),
      new HardSkill(HardSkillEnum.ANGULAR, SkillLevelEnum.FOUR),
      new HardSkill(HardSkillEnum.JAVASCRIPT_TYPESCRIPT, SkillLevelEnum.THREE_AND_HALF),
      new HardSkill(HardSkillEnum.KENDO_UI, SkillLevelEnum.THREE),
      new HardSkill(HardSkillEnum.JSON, SkillLevelEnum.MAX),
      new HardSkill(HardSkillEnum.XML, SkillLevelEnum.THREE),
      new HardSkill(HardSkillEnum.FRONT_TECHNOLOGIES, SkillLevelEnum.THREE),
      new HardSkill(HardSkillEnum.REST, SkillLevelEnum.FOUR_AND_HALF),
      new HardSkill(HardSkillEnum.GIT, SkillLevelEnum.FOUR),
      new HardSkill(HardSkillEnum.MAVEN, SkillLevelEnum.FOUR),
      new HardSkill(HardSkillEnum.JENKINS, SkillLevelEnum.THREE),
      new HardSkill(HardSkillEnum.SONAR_QUBE, SkillLevelEnum.FOUR_AND_HALF),
      new HardSkill(HardSkillEnum.AWS, SkillLevelEnum.THREE_AND_HALF),
      new HardSkill(HardSkillEnum.TFS, SkillLevelEnum.THREE)
    ];
  }

  private get skills(): Skills {
    return new Skills(this.hardSkills, this.softSkills);
  }
}
