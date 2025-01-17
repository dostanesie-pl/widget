import { FormValues, LanguageCode } from "@/features/8klasa/types/calculator";

import { contestsValues } from "@/features/8klasa/consts/contestsValues";

export const defaultFormValues: FormValues = {
  exams: {
    pl: { score: null, exempt: false, degree: null },
    math: { score: null, exempt: false, degree: null },
  },
  examLanguage: {
    languageCode: LanguageCode.EN,
    score: null,
    exempt: false,
    degree: null,
  },
  certificate: {
    withHonors: false,
    subjects: [
      { name: "j. polski", score: null, editable: false },
      { name: "matematyka", score: null, editable: false },
      { name: "biologia", score: null, editable: true },
      { name: "geografia", score: null, editable: true },
    ],
  },
  volunteer: false,
  contests: contestsValues,
};
