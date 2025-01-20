import wretch from "wretch";
import QueryStringAddon from "wretch/addons/queryString";
import { IApiSubject, ISubject } from "@/utils/fetchSubjectsCli/types";
import { writeFileSync } from "fs";

const trimSubject = (subject: IApiSubject): ISubject =>
  ({
    name:subject.name,
    full_name: subject.full_name,
    is_foreign: subject.name.includes("language_") && subject.name !== "language_pl_advanced",
  })

const main = async () => {
  try {
    const data = await wretch("https://dostanesie.pl")
      .url("/api/core/subject/")
      .addon(QueryStringAddon)
      .query({ visible_osma_calc: true })
      .get()
      .json<IApiSubject[]>();

    const filePath = "src/assets/fetched/subjects.json";
    const trimmedData = data.map(trimSubject);
    writeFileSync(filePath, JSON.stringify(trimmedData), "utf-8");

    console.log("Subjects successfully saved to:", filePath);
  } catch (error) {
    console.error("Error fetching or saving subjects from dostanesie.pl:", error);
  }
};

main();
