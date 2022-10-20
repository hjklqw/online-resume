export interface ExperienceModel {
  title: string
  location: string
  dates: string
  points: string[]
}

export interface JobModel {
  title: string
  company: {
    name: string
    industry: string
    size: string
    location: string
  }
  stack: string
  teamSize: string
  methodology: string
  dates: string
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
