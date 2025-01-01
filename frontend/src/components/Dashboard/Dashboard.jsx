import styles from "./dashboard.module.css";
import { Form } from "react-router";
import ListItem from "../ListItem/ListItem";
import Input from "../Input/Input";
import Label from "../Label/Label";

function Dashboard({ tasks }) {
  const userTasks = tasks.toReversed();

  return (
    <>
      {userTasks.length ? (
        <>
          <h2 className={styles.test}> This is what you have to do:</h2>
          <ul className={styles.list}>
            {userTasks.map((task) => {
              return <ListItem task={task} key={task._id} />;
            })}
          </ul>
        </>
      ) : (
        <>
          <div className={styles.taskCard}>
            <h2>
              <em> You have nothing do...</em>
              <hr/>
            </h2>
            <Form
              method="post"
              className={styles.addTaskForm}
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
                <Label
                  htmlFor={"checbox"}
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
        </>
      )}
    </>
  );
}

export default Dashboard;
