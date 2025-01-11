import TaskContent from "../components/TaskContent/TaskContent";
import { useOutletContext } from "react-router";

function Important() {
  const tasks = useOutletContext();
  const importantTasks = tasks.filter((task) => task.isFavorite === true);

  return (
    <>
    {!importantTasks.length && <h2>No important shit</h2>}
      <ul className="importantList">
        {importantTasks?.toReversed().map((task) => {
          return (
            <li>
              <TaskContent task={task} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Important;
