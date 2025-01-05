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

export default function Homepage() {
  const tasks = useLoaderData();
  const data = useActionData();
  const navigation = useNavigation();
  const submitting = navigation.state === "submitting";
  const isLoading = navigation.state === "loading";

  //check for user // navigate

  return (
    <>
      {isLoading || submitting ? (
        <DotLoader color={"black"} size={100} aria-label="Loading Spinner" />
      ) : tasks && tasks.length === 0 ? (
        <>
          <div className={"taskCard"}>
            <h2 className={"cardHeader"}>
              <em> You have nothing do...</em>
            </h2>
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
              {data && data.error && <p>{data.error}</p>}
              <Label
                htmlFor={"checkbox"}
                ariaLabel={"important task?"}
                className={"checkBoxLabel"}
                title={"Is this shit important?"}
              />
              <Input
                type={"checkbox"}
                name={"checkbox"}
                id={"checkbox"}
                className={"newTaskCheckbox"}
              />
            </Form>
          </div>
          <Outlet />
        </>
      ) : (
        <Outlet context={tasks} />
      )}
    </>
  );
}
