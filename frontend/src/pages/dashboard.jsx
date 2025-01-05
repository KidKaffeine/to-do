import "../styles/pages.css";
import { useState } from "react";
import DeleteTaskForm from "../components/Forms/DeleteTask/DeleteTaskForm";
import {
  useOutletContext,
  Form,
  useNavigation,
  useActionData,
} from "react-router";
import DotLoader from "react-spinners/DotLoader";


function Dashboard() {
  const tasks = useOutletContext();
  const [isEditing, setIsEditing] = useState(false);
  const data = useActionData();
  const navigation = useNavigation();
  const submitting = navigation.state === "submitting";
  const isLoading = navigation.state === "loading";

  let content;

  if (tasks && tasks.length > 0) {
    content = (
      <>
        <h2 className="listHeader"> To do</h2>
        <ul className="list">
          {tasks?.toReversed().map((task) => {
            return (
              <>
                {isEditing ? (
                  <li key={task._id}>
                    <p className="paragraph">New shit:</p>
                    <Form
                      method="put"
                      action={`/homepage/update/${task._id}`}
                      onSubmit={() => setIsEditing(false)}
                    >
                      <input type="text" name="updateTask" id="newTask" />
                      <button type="submit">Submit</button>
                      {data && data.error && <p>{data.error}</p>}
                    </Form>
                  </li>
                ) : (
                  <li key={task._id}>
                    <div className="listItemContainer">
                      <p className="paragraph">Shit:</p>
                      <p className="task">{task.task}</p>
                    </div>
                    <div className="listItemContainer">
                      <p className="paragraph">Added:</p>
                      <p className="date">
                        {task.createdAt.substring(0, 10)}
                      </p>
                      <DeleteTaskForm id={task._id} setIsEditing={setIsEditing} />
                    </div>
                  </li>
                )}
              </>
            );
          })}
        </ul>
      </>
    );
  }
  return (
    <>
      {isLoading || submitting ? (
        <DotLoader color={"black"} size={100} aria-label="Loading Spinner" />
      ) : (
        content
      )}
    </>
  );
}

export default Dashboard;
