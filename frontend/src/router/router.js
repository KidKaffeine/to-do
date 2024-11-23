import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
import Layout from "../layout/mainLayout";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
       
    </Route>

))

//land on register - public
//if already regitered, link to login - public
//dashboard after login - private


export default router; 