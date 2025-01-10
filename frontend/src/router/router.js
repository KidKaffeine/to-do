import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import Layout from "../layout/mainLayout";
import Login from "../pages/login";
import SignUp from "../pages/signUp";
import SignUpError from "../pages/signUpError";
import Homepage from "../pages/homepage";
import AddTask from "../pages/addTask";
import { signUpUserHandler, loginHandler } from "../utils/userActions";
import { tasksLoader } from "../utils/loaders";
import {
  addTaskHandler,
  deleteTaskHandler,
  updateTaskHandler,
} from "../utils/tasksActions";
import Dashboard from "../pages/dashboard";
import Important from "../pages/important";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Navigate replace to={"/signUp"} />} />
      <Route
        path="signUp"
        element={<SignUp />}
        action={signUpUserHandler}
        errorElement={<SignUpError />}
      />
      <Route path="login" element={<Login />} action={loginHandler} />
      <Route
        path="homepage"
        element={<Homepage />}
        action={addTaskHandler}
        loader={tasksLoader}
      >
        <Route index element={<Dashboard />} />
        <Route path="add" element={<AddTask />} />
        <Route path="important" element={<Important />} />
        <Route path="delete/:id" action={deleteTaskHandler} />
        <Route path="update/:id" action={updateTaskHandler} />
      </Route>
    </Route>
  )
);

export default router;
