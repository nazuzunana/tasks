// import userEvent from "@testing-library/user-event";
import { User } from "../model/User";

interface Props {
  diagnoses?: User;
}

export const UserDiagnoses = ({ diagnoses }: Props) => {
  /**
   * TODO
   *
   * 1. Define component's Props interface (see how it is done in src/AppWrapper.tsx)
   *    - Props will contain list of user's diagnoses
   * 2. Display list of user diagnoses (see Todo)
   */

  return (
    <div className="user__diagnoses">
      <ul>
        <li className="box__info">{diagnoses}</li>
      </ul>
    </div>
  );
};
