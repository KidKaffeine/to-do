import { Outlet } from "react-router";
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import { useState, useEffect } from "react";

export default function Layout() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      let userSession = sessionStorage.getItem("User");
      let { token } = JSON.parse(userSession);

      if (!token) return;

      const response = await fetch("http://localhost:8000/api/users/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const user = await response.json();
      setUser(user);
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
