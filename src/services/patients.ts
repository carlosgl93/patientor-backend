import patientsData from "../../data/patients";
import { Patient, PatientHiddenSsn } from "../types";

const getAll = (): Patient[] => {
  return patientsData;
};

const getAllPatientsHideSsn = (): PatientHiddenSsn[] => {
  return patientsData.map(({ dateOfBirth, gender, id, name, occupation }) => ({
    id,
    name,
    dateOfBirth,
    occupation,
    gender,
  }));
};

export default {
  getAll,
  getAllPatientsHideSsn,
};
