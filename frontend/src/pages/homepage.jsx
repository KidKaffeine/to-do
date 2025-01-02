import "../styles/pages.css";
import { Outlet, useOutletContext } from "react-router";
import AddTaskForm from "../components/Forms/AddTask/AddTaskForm";
import ListItem from "../components/ListItem/ListItem"

export default function Homepage() {
  const userTasks = useOutletContext();

  return (
    <>
      {userTasks.length > 0 ? (
        <>
          <h2 className="listHeader"> To do</h2>
          <ul className="list">
            {userTasks.toReversed().map((task) => {
              return <ListItem task={task} key={task._id} />;
            })}
          </ul>
        </>
      ) : (
        <AddTaskForm />
      )}
      <Outlet />
    </>
  );
}
