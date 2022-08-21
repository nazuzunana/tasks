import userEvent from "@testing-library/user-event";
import { User, userLocalStorageKey } from "../model/User";

export const UserDiagnoses = () => {
  const patientString: string | null = localStorage.getItem(userLocalStorageKey);
  const patient1: User = JSON.parse(String(patientString));

  /**
   * TODO
   *
   * 1. Define component's Props interface (see how it is done in src/AppWrapper.tsx)
   *    - Props will contain list of user's diagnoses
   * 2. Display list of user diagnoses (see Todo)
   */
  return (
    <div className="diagnose__list">
      <div className="user__name">
        <p>
          {patient1.firstName} {patient1.lastName}
        </p>
      </div>
      <div className="user__info">
        <p>
          <>Date of birth: {patient1.dateOfBirth}</>
        </p>
        <p>Weight: {patient1.weight} kg</p>
        <p>Height: {patient1.height} cm</p>
      </div>
      <div className="user__diagnoses">
        <p>Diagnoses: {patient1.diagnoses}</p>
      </div>
    </div>
  );
};
