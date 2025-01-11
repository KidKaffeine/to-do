import "../styles/pages.css";
import {
  Outlet,
  useLoaderData,
  Form,
  useActionData,
  useNavigation,
} from "react-router";
import Label from "../components/Label/Label";
import Input from "../components/Input/Input";
import DotLoader from "react-spinners/DotLoader";
import Navbar from "../components/Navbar/Navbar";
import Button from "../components/Button/Button";
import { useState } from "react";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Homepage() {
  const tasks = useLoaderData();
  const data = useActionData();
  const [isFavorite, setIsFavorite] = useState(false);
  const navigation = useNavigation();
  const submitting = navigation.state === "submitting";
  const isLoading = navigation.state === "loading";

  return (
    <>
      {isLoading || submitting ? (
        <DotLoader color={"black"} size={100} aria-label="Loading Spinner" />
      ) : tasks && tasks.length === 0 ? (
        <>
          <h2 className="header">Start now</h2>
          <div className={"taskCard"}>
            <h3 className={"cardHeader"}>
              <em> You have nothing do...</em>
            </h3>
            <Form
              method="post"
              className={"addTaskForm"}
              action="/homepage"
              autoComplete="off"
            >
              <Label
                htmlFor={"newTask"}
                ariaLabel={"newTask input"}
                className={"newTaskLabel"}
                title={"Shit do to:"}
              />
              <Input
                type={"text"}
                name={"newTask"}
                id={"newTask"}
                className={"newTaskInput"}
              />
              {data && data.error && (
                <p className="errorParagraph">{data.error}</p>
              )}
                <FontAwesomeIcon
                  icon={faCircleExclamation}
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={ isFavorite ? "important" : "notImportant"}
                />
    
              <Button type={"submit"} className={"formBtn"} title={"Submit"} 
              name={"favorite"} value={isFavorite}/>
            </Form>
          </div>
          <hr className="homepageRule" />
          <Navbar />
          <Outlet />
        </>
      ) : (
        <>
          <Outlet context={tasks} />
          <hr className="homepageRule" />
          <Navbar />
        </>
      )}
    </>
  );
}
