import diagnosesData from "../../data/diagnoses";
import { HideLatinDiagnose } from "../types";

const getAll = () => {
  return diagnosesData;
};

const getSensitiveAll = (): HideLatinDiagnose[] => {
  return diagnosesData.map(({ code, name }) => ({
    code,
    name,
  }));
};

export default {
  getAll,
  getSensitiveAll,
};
