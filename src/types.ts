export type BasicsType = {
  name: string;
  label: string;
  image: string;
  email: string;
  url: string;
  summary: string;
  location: {
    address?: string;
    postalCode?: string;
    city: string;
    countryCode: string;
    region: string;
  };
  profiles: {
    network: string;
    username: string;
    url: string;
  }[];
};

export type ExperienceType = {
  name: string;
  position: string;
  url: string;
  startDate: string;
  summary: string;
  highlights: string[];
  endDate?: string;
};

export type SkillType = {
  name: string;
  level: string;
  keywords: string[];
};

export type EducationType = {
  institution: string;
  url: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  score: string;
  courses: string[];
};
