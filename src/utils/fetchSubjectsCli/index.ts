import wretch from "wretch";
import QueryStringAddon from "wretch/addons/queryString";
import { IApiSubject, ISubject } from "@/utils/fetchSubjectsCli/types";
import { writeFileSync } from "fs";

const trimSubject = (subjects: IApiSubject[]): ISubject[] =>
  subjects.map(({ name, full_name }) => ({ name, full_name }));

const main = async () => {
  try {
    const data = await wretch("https://dostanesie.pl")
      .url("/api/core/subject/")
      .addon(QueryStringAddon)
      .query({ visible_osma_calc: true })
      .get()
      .json<IApiSubject[]>();

    const filePath = "src/assets/fetched/subjects.json";
    const trimmedData = trimSubject(data);
    writeFileSync(filePath, JSON.stringify(trimmedData), "utf-8");

    console.log("Subjects successfully saved to:", filePath);
  } catch (error) {
    console.error("Error fetching or saving subjects from dostanesie.pl:", error);
  }
};

main();
