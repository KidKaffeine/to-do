import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../layout/mainLayout";
import Login, { loginHandler } from "../pages/login";
import Landing from "../pages/landing";
import SignUp, { signUpUserHandler } from "../pages/signUp";
import SignUpError from "../pages/signUpError";
import Dashboard from "../pages/dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Landing />} />
      <Route
        path="/signUp"
        element={<SignUp />}
        action={signUpUserHandler}
        errorElement={<SignUpError />}
      />
      <Route path="/login" element={<Login />} action={loginHandler}/>
      <Route path="/dashboard" element={<Dashboard />} />
    </Route>
  )
);

export default router;
