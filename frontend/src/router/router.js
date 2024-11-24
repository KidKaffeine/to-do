import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../layout/mainLayout";
import RegisterForm from "../pages/register";
import Login from "../pages/login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index path="register" element={<RegisterForm />} />
      <Route path="login" element={<Login/>} />
    </Route>
  )
);

//land on register - public
//if already regitered, link to login - public
//dashboard after login - private //no user token redirect to register/login

export default router;
