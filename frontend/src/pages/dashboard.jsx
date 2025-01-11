import "../styles/pages.css";
import {
  useOutletContext,
  useNavigation
} from "react-router";
import DotLoader from "react-spinners/DotLoader";
import TaskContent from "../components/TaskContent/TaskContent";

function Dashboard() {
  const tasks = useOutletContext();
  const navigation = useNavigation();
  const submitting = navigation.state === "submitting";
  const isLoading = navigation.state === "loading";
  
  let content;

  if (tasks && tasks.length > 0) {
    content = (
      <>
        <h2 className="listHeader">To do</h2>
        <ul className="list">
          {tasks?.toReversed().map((task) => {
            return (
              <>
                <li key={task._id}>
                  <TaskContent task={task} />
                </li>
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
