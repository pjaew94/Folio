import { Dispatch, SetStateAction } from "react";
import { UseFormRegister } from "react-hook-form";

export interface INavigation {
  route: string;
  text: string;
}

export interface ICustomLink extends INavigation {
  index: number;
  toWork?: boolean;
}

interface IImageSet {
  disp: string,
  blur: string
}

export interface IProjectInfo {
  abbreviation: string;
  name: string[];
  subString: string;
  type: string;
  date: string;
  link: string;
  github: string;
  imgs: IImageSet[];
  summary: string[];
  history: string[];
  problem: string[];
  myRole: string[],
  impact: string[],
  technologies: { tech: string; desc: string }[];

  warning?: string;
  toWork?: boolean;
  setToWork?: Dispatch<SetStateAction<boolean>>
}


export interface IWorkTab {
  abbreviation: string;
  name: string[];
  type: string;
  date: string;
  toWork: boolean;
  setToWork: Dispatch<SetStateAction<boolean>>
}


export interface IAbout {
  text: string,
  section: "Education" | "Leadership" | "Ambitions" | "Programming" | null,
  imgsCrop: IImageSet,
  imgsReg: IImageSet,
  currFocus?: this['section'],
  setCurrFocus?: Dispatch<SetStateAction<this['section']>>
}

export interface IWorkExperience {
  startDate: string,
  endDate: string,
  jobTitle: string,
  jobDesc: string,
  company: string,
  companyLocation: string,
}

export interface IEducation {
  education: string,
  where: string,
  endDate: string
}

export interface IResumeTab {
  currFocus: 'Work' | 'Edu.' | 'Tech.' | null,
  setCurrFocus?: Dispatch<SetStateAction<this['currFocus']>>
  section: this['currFocus']
}

export interface IResumeSection {
  currFocus: IResumeTab['currFocus'],
  section: IResumeTab['section']
} 

export interface IContactForm {
  firstName: string,
  lastName: string,
  email: string,
  company: string,
  comments: string,
  phoneNumber?: string
  
}

export interface IFormField {
  field: "firstName" | "lastName" | "email" | "company" | "comments" | "phoneNumber" ,
  label: string,
  placeHolder: string,
  errors?: string,
  errorMsg?: string,
  register: UseFormRegister<IContactForm>
}

export interface IContact {
  setShowModal: Dispatch<SetStateAction<boolean>>
}