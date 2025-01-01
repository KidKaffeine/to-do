import "../styles/pages.css";
import Label from "../components/Label/Label";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import { Form } from "react-router";

export default function Login() {
  return (
    <>
      <h2 className="loginHeader">Login</h2>
      <Form method="post" autoComplete="off" className="loginForm">
        <Label
          htmlFor={"email"}
          ariaLabel={"email"}
          title={"Email:"}
          className={"loginEmailLabel"}
        />
        <Input type={"email"} name={"email"} className={"loginEmailInput"} />
        <Label
          htmlFor={"password"}
          ariaLabel={"password"}
          title={"Password"}
          className={"loginPasswordLabel"}
        />
        <Input
          type={"password"}
          name={"password"}
          className={"loginPasswordInput"}
        />
        <Button title="Submit" type="submit" className="loginButton" />
      </Form>
      <hr className="loginRule" />
    </>
  );
}
