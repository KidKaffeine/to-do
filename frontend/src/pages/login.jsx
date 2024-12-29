import "../styles/pages.css";
import Label from "../components/Label/Label";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import { Form, redirect } from "react-router";

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

export const loginHandler = async ({ request }) => {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const response = await fetch("http://localhost:8000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    await response.json();

    if (!response.ok) {
      console.log(response.error);
      throw new Error("Couldn't login user.");
    }

    let user = await response.json()

    sessionStorage.getItem("User")

    if(!sessionStorage) {
      let userSession = JSON.stringify(user) 
      sessionStorage.setItem("User", userSession);
    }

    return redirect("/homepage");
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong, please try again.");
  }
};
