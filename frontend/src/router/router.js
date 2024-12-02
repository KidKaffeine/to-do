import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../layout/mainLayout";
import Login from "../pages/login";
import Landing from "../pages/landing";
import SignUp, { signUpUser } from "../pages/signUp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Landing />}/>
        <Route path="/signUp" element={<SignUp />} action={signUpUser}/>
        <Route path="/login" element={<Login />} />
    </Route>
  )
);

export default router;
