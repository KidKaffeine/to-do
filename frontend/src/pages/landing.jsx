import { Link } from "react-router";
import {
  faUserPlus,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Landing() {

  return (
    <>
      <h2 className="landingHeader">Welcome!</h2>
      <Link to="/signUp" className="landingSignUpLink">
        Sign up
        <FontAwesomeIcon icon={faUserPlus} />
      </Link>
      <Link to="/login" className="landingLoginLink">
        Login
        <FontAwesomeIcon icon={faArrowRightToBracket} />
      </Link>
      <hr className="landingRule" />
    </>
  );
}
