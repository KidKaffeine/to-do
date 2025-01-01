import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../layout/mainLayout";
import Login from "../pages/login";
import Landing from "../pages/landing";
import SignUp from "../pages/signUp";
import SignUpError from "../pages/signUpError";
import Homepage from "../pages/homepage";
import { signUpUserHandler, loginHandler } from "../utils/userActions";
import { tasksLoader } from "../utils/loaders";
import { addTaskHandler, deleteTaskHandler } from "../utils/tasksActions";


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
      <Route path="/login" element={<Login />} action={loginHandler} />
      <Route
        path="/homepage/"
        element={<Homepage />}
        loader={tasksLoader}
        action={addTaskHandler}
      >
        <Route 
        path="delete/:id"
        action={deleteTaskHandler}
        />
      </Route>
    </Route>
  )
);

export default router;
