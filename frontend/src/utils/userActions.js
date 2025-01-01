import { redirect } from "react-router";

export const signUpUserHandler = async ({ request }) => {
    try {
      const formData = await request.formData();
      const userData = Object.fromEntries(formData);
  
      const response = await fetch("http://localhost:8000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        console.log(response.error);
        throw new Error("Couldn't complete sign up.");
      }
  
      let user = await response.json()
      let userSession = JSON.stringify(user)
    
      sessionStorage.setItem("User", [userSession]);
  
      return redirect("/login");
    } catch (error) {
      console.log(error);
      throw new Error("Email already in use, please log in.");
    }
  };

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
  
      if (!response.ok) {
        console.log(response.status);
        throw new Error("Couldn't login user.");
      }
  
      let user = await response.json()
  
      let userSession = JSON.stringify(user) 
      sessionStorage.setItem("User", userSession);
  
  
      return redirect("/homepage");
    } catch (error) {
      console.log(error);
      throw new Error("Something went wrong, please try again.");
    }
  };

