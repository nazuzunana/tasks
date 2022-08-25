// import userEvent from "@testing-library/user-event";
import { User, userLocalStorageKey } from "../model/User";
import { useState, useEffect } from "react";

export const UserDiagnoses = () => {
  const [patient, setPatient] = useState<User>();

  useEffect(() => {
    const patientString = localStorage.getItem(userLocalStorageKey);
    setPatient(patientString ? JSON.parse(patientString) : undefined);
  }, []);

  /**
   * TODO
   *
   * 1. Define component's Props interface (see how it is done in src/AppWrapper.tsx)
   *    - Props will contain list of user's diagnoses
   * 2. Display list of user diagnoses (see Todo)
   */

  return patient ? (
    <div className="diagnose__list">
      <div className="box">
        <p className="box__title">Date of birth</p>
        <p className="box__info">
          <>{patient.dateOfBirth}</>
        </p>
      </div>
      <div className="box">
        <p className="box__title">Weight</p>
        <p className="box__info">{patient.weight} kg</p>
      </div>
      <div className="box">
        <p className="box__title">Height</p>
        <p className="box__info">{patient.height} cm</p>
      </div>
      <div className="box">
        <p className="box__title">Diagnoses</p>
        <div className="user__diagnoses">
          <p className="box__info">{patient.diagnoses[0]}</p>
          <p className="box__info">{patient.diagnoses[1]}</p>
        </div>
      </div>
    </div>
  ) : (
    <p className="patient__message">Patient not found.</p>
  );
};
