import "../styles/pages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link, Form } from "react-router";
import Label from "../components/Label/Label";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

export default function SignUp() {
  return (
    <>
      <h2 className="registerHeader">Register with us</h2>
      <Form method="post" className="registerForm" autoComplete="off">
        <Label
          htmlFor="username"
          aria-label="username"
          title="Username:"
          className="usernameRegisterLabel"
        />
        <Input type="text" name="username" className="usernameRegisterInput" />
        <Label
          htmlFor="email"
          aria-label="email"
          title="Email:"
          className="emailRegisterLabel"
        />
        <Input type="email" name="email" className="emailRegisterInput" />
        <Label
          htmlFor="password"
          aria-label="password"
          title="Password:"
          className="passwordRegisterLabel"
        />
        <Input
          type="password"
          name="password"
          className="passwordRegisterInput"
        />
        <Button title="Submit" type="submit" className="registerButton" />
      </Form>
      <hr className="registerLine" />
      <h4 className="registerSubHeader"> Already a user? </h4>
      <Link to="/login" className="registerLink">
        Take me to login
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
      </Link>
    </>
  );
}
