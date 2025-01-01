import styles from "./addTaskForm.module.css"
import { Form } from "react-router";
import Input from "../../Input/Input";
import Label from "../../Label/Label";

function AddTaskForm() {
    return (  
        <>
          <div className={styles.taskCard}>
            <h2 className={styles.cardHeader}>
              <em> You have nothing do...</em>
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
        </>
    );
}

export default AddTaskForm;