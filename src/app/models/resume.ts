import { AboutMe } from "./about-me";
import { Certification } from "./certification";
import { EducationItem } from "./education-item";
import { Skills } from "./skills";
import { WorkExperience } from "./work-experience";

export class Resume {


    private _aboutMe: AboutMe;
    private _workExperiences: WorkExperience[];
    private _education: EducationItem[];
    private _certifications: Certification[];
    private _skills: Skills;

    constructor(aboutMe?: AboutMe, workExperiences?: WorkExperience[], education?: EducationItem[], certifications?: Certification[], skills?: Skills)
    constructor(aboutMe: AboutMe, workExperiences: WorkExperience[], education: EducationItem[], certifications: Certification[], skills: Skills)
    {
        this._aboutMe = aboutMe;
        this._workExperiences = workExperiences;
        this._education = education;
        this._certifications = certifications;
        this._skills = skills;
    }

    get aboutMe(): AboutMe {
        return this._aboutMe;
    }

    set aboutMe(aboutMe: AboutMe) {
        this._aboutMe = aboutMe;
    }

    get workExperiences(): WorkExperience[] {
        return this._workExperiences;
    }

    set workExperiences(workExperiences: WorkExperience[]) {
        this._workExperiences = workExperiences;
    }

    get education(): EducationItem[] {
        return this._education;
    }

    set education(education: EducationItem[]) {
        this._education = education;
    }

    get certifications(): Certification[] {
        return this._certifications;
    }

    set certifications(certifications: Certification[]) {
        this._certifications = certifications;
    }

    get skills(): Skills {
        return this._skills;
    }

    set skills(skills: Skills) {
        this._skills = skills;
    }

}
