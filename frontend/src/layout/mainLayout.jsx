import { Outlet } from "react-router";
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
