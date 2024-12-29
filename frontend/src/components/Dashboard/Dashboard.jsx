import styles from "./dashboard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useLoaderData } from "react-router";

function Dashboard() {
  const userTasks = useLoaderData();
  console.log(userTasks);

  return (
    <>
      {userTasks.length > 0 ? (
        <>
          <h2> Your shit do to: </h2>
          <ul className={styles.list}>
            {userTasks.map((task) => {
              return (
                <li key={task._id}>
                  <p>{task.task}</p>
                  <div>
                    <small>{task.createdAt.substring(0, 10)}</small>
                    <FontAwesomeIcon
                      icon={faTrash}
                      className={styles.deleteIcon}
                    />
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      className={styles.editIcon}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <>
          <h2>No tasks yet</h2>
          <p>Add your first</p>
        </>
      )}
    </>
  );
}

export default Dashboard;

export async function tasksLoader() {
  let userSession = JSON.parse(sessionStorage.getItem("User"));
  let token = userSession.token;
  const response = await fetch("http://localhost:8000/api/tasks/getAll", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const tasks = await response.json();
  console.log(tasks);
  return tasks;
}
