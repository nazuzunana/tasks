import { UserDiagnoses } from "../components/UserDiagnoses";
import "./Home.css";
import "../global.css";

export const Home = () => {
  /**
   * TODO
   *
   * 1. Load user from browser localStorage (use useEffect() hook)
   * 2. Set user to component state (use useState() hook)
   * 3. Display name of the user in <h1> tag (see Todo)
   * 4. Send user's diagnoses to UserDiagnoses component
   */
  return (
    <div className="container home-container">
      <p className="user__name">Todo: Display name of the user here</p>
      <UserDiagnoses />
    </div>
  );
};
