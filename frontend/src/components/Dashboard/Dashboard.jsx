import styles from "./dashboard.module.css";
import ListItem from "../ListItem/ListItem";
import AddTaskForm from "../Forms/AddTaskForm/AddTaskForm";

function Dashboard({ tasks }) {
  const userTasks = tasks.toReversed();

  return (
    <>
      {userTasks.length ? (
        <>
          <h2 className={styles.listHeader}> To do</h2>
          <ul className={styles.list}>
            {userTasks.map((task) => {
              return <ListItem task={task} key={task._id} />;
            })}
          </ul>
        </>
      ) : (
        <AddTaskForm />
      )}
    </>
  );
}

export default Dashboard;
