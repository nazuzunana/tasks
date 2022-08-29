import { UserDiagnoses } from "../components/UserDiagnoses";
import { User, userLocalStorageKey } from "../model/User";
import "./Home.css";
import "../global.css";
import { useState, useEffect } from "react";

export const Home = () => {
  const [patient, setPatient] = useState<User>();

  useEffect(() => {
    const patientString = localStorage.getItem(userLocalStorageKey);
    setPatient(patientString ? JSON.parse(patientString) : undefined);
  }, []);
  /**
   * TODO
   *
   * 1. Load user from browser localStorage (use useEffect() hook)
   * 2. Set user to component state (use useState() hook)
   * 3. Display name of the user in <h1> tag (see Todo)
   * 4. Send user's diagnoses to UserDiagnoses component
   */

  return patient ? (
    <div className="container home-container">
      <p className="user__name">
        {patient.firstName} {patient.lastName}
      </p>
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
          <UserDiagnoses diagnoses={patient.diagnoses} />
        </div>
      </div>
    </div>
  ) : (
    <p className="patient__message">Patient not found.</p>
  );
};
