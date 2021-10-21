import { Dispatch, SetStateAction } from "react";

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