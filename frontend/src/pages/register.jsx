import "../styles/pages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Form, Link } from "react-router";
import Label from "../components/Label/Label";
import Input from "../components/Input/Input";

export default function RegisterForm() {
  return (
    <>
      <h2 className="registerHeader">Register with us</h2>
      <Form type="post" action="/register" className="registerForm">
        <Label
          htmlFor="username"
          aria-label="username"
          title="Username:"
          className="usernameRegisterLabel"
        />
        <Input
          type="text"
          name="username"
          id="username"
          className="usernameRegisterInput"
        />
        <Label
          htmlFor="email"
          aria-label="email"
          title="Email:"
          className="emailRegisterLabel"
        />
        <Input
          type="text"
          name="email"
          id="email"
          className="emailRegisterInput"
        />
        <Label
          htmlFor="password"
          aria-label="password"
          title="Password:"
          className="passwordRegisterLabel"
        />
        <Input
          type="password"
          name="password"
          id="password"
          className="passwordRegisterInput"
        />
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
