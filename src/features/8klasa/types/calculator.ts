export interface ContestField {
  name: string;
  value: string;
}

export interface Contest {
  name: string;
  fields: ContestField[];
  selectedFieldIndex: number;
}

type Exam = {
  score: string | null;
  exempt: boolean;
  degree: string | null;
};

export enum LanguageCode {
  EN = "j. angielski",
  DE = "j. niemiecki",
  FR = "j. francuski",
  RU = "j. rosyjski",
  ES = "j. hiszpański",
}

type LanguageExam = {
  languageCode: LanguageCode;
  score: number | null;
  exempt: boolean;
  degree: number | null;
};

export interface CertificateSubject {
  editable: boolean;
  name: string | null;
  score: string | null;
}

export interface FormValues {
  exams: {
    pl: Exam;
    math: Exam;
  };
  examLanguage: LanguageExam;
  certificate: {
    withHonors: boolean;
    subjects: CertificateSubject[];
  };
  volunteer: boolean;
  contests: Contest[];
}
