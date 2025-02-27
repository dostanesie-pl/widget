import { FormValues } from "@/features/8klasa/types/calculator";

import {
  degreeExemptMathAndPolishMapping,
  degreeExemptOtherSubjectMapping,
  degreePointsMap,
} from "@/features/8klasa/consts/mappings";

export const calculateResult = (values: FormValues): number => {
  let sum = 0;

  if (values.volunteer) sum = sum + 3;

  if (values.certificate.withHonors) sum = sum + 7;

  values.certificate.subjects.forEach((subject) => {
    if (subject.score) {
      sum = sum + degreePointsMap[parseInt(subject.score)];
    }
  });

  Object.values(values.exams).forEach((subject) => {
    if (!subject.exempt && subject.score) {
      sum = sum + parseInt(subject.score) * 0.35;
    } else if (subject.exempt && subject.degree) {
      sum = sum + degreeExemptMathAndPolishMapping[parseInt(subject.degree)];
    }
  });

  if (!values.examLanguage.exempt && values.examLanguage.score) {
    sum = sum + parseInt(values.examLanguage.score) * 0.3;
  } else if (values.examLanguage.exempt && values.examLanguage.degree) {
    sum =
      sum +
      degreeExemptOtherSubjectMapping[parseInt(values.examLanguage.degree)];
  }

  let contestsSum = 0;
  values.contests.forEach((contest) => {
    if (contest.selectedFieldIndex) {
      contestsSum =
        contestsSum +
        parseInt(contest.fields[contest.selectedFieldIndex].value);
    }
  });

  if (contestsSum > 18) {
    contestsSum = 18;
  }

  return sum + contestsSum;
};
