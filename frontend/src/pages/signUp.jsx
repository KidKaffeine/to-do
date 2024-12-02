import "../styles/pages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link, Form, redirect } from "react-router";
import Label from "../components/Label/Label";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

export default function SignUp() {
  return (
    <>
      <h2 className="registerHeader">Register with us</h2>
      <Form
        method="post"
        className="registerForm"
        autoComplete="off"
      >
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
          type="email"
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

export const signUpUser = async ({ request }) => {
  try {
    const formData = await request.formData();
    const userData = Object.fromEntries(formData)

    const response = await fetch("http://localhost:8000/api/users/register", {
      method: "POST", 
      headers: {
        "Content-Type" : "application/json"
      }, 
      body: JSON.stringify(userData)
    })

    if(!response.ok) {
      console.log(response.status)
      redirect("/signUp")
    }
    
    const user = await response.json()
      console.log(user)

    return redirect("/login");
    
  } catch (error) {
      throw new Error ("Couldn't create user.")
  }
};
