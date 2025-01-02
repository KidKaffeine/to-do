import { Outlet, useLoaderData } from "react-router";
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";

export default function Layout() {
  const userTasks = useLoaderData();

  return (
    <>
      <Header />
      <Container className="mainContainer">
        <Outlet context={userTasks} />
      </Container>
      <hr className="rule"/>
    </>
  );
}
