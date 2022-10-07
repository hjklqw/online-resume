export interface ExperienceModel {
  title: string
  location: string
  dates: string
  points: string[]
}

export enum ExperienceInfoOrientation {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal',
}