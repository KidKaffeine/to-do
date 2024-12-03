import "../styles/pages.css"
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router"

function SignUpError() {
  return (
    <>
      <h2 className="signUpErrorHeader">Email already in use, please log in.</h2>
      <Link to="/login" className="landingLoginLink">
        Login
        <FontAwesomeIcon icon={faArrowRightToBracket} />
      </Link>
      <hr className="landingRule" />
    </>
  );
}

export default SignUpError;
