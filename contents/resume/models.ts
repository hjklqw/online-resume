export interface BaseExperienceModel {
  title: string
  company: {
    name: string
    location: string
  }
  dates: string
}

export interface ExperienceModel extends BaseExperienceModel {
  points: string[]
}

export interface JobModel extends BaseExperienceModel {
  company: {
    name: string
    industry: string
    size: string
    location: string
  }
  stack: string
  teamSize: string
  methodology: string
  description: { [task: string]: string[] }
}

export enum ExperienceInfoOrientation {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal',
}

export enum ContactInfoType {
  LINK,
  EMAIL,
  NONE,
}

export enum DataSection {
  OVERVIEW = 'overview',
  CONTACT = 'contact',
  EDUCATION = 'education',
  SKILLS = 'skills',
  EXPERIENCE = 'experience',
  MISC_EXPERIENCE = 'misc-experience',
  AWARDS = 'awards',
  LANGUAGES = 'languages',
}
