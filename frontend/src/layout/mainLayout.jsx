import { Outlet, redirect } from "react-router";
import { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";

export default function Layout() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      let userSession = JSON.parse(sessionStorage.getItem("User"));
      let token = userSession.token;

      if (!token) {
        return redirect("/");
      }

      const response = await fetch("http://localhost:8000/api/users/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const user = await response.json();

      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      setTimeout(() => {
        setUser([user]);
      }, 1000);
      
    };
    fetchUser();
  }, []);

  return (
    <>
      <Header />
      <Container className="mainContainer">
        <Outlet context={user} />
      </Container>
    </>
  );
}
