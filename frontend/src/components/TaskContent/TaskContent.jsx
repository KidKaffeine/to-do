import styles from "./taskContent.module.css";
import DeleteTaskForm from "../Forms/DeleteTask/DeleteTaskForm";
import { Form } from "react-router";
import { useState } from "react";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TaskContent({ task }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      {isEditing ? (
        <>
          <p className={styles.paragraph}>New shit:</p>
          <Form
            method="put"
            action={`/homepage/update/${task._id}`}
            onSubmit={() => setIsEditing(false)}
          >
            <input type="text" name="updateTask" id="newTask" />
            <button type="submit">Submit</button>
          </Form>
        </>
      ) : (
        <>
          <div className={styles.listItemContainer}>
            <p className={styles.paragraph}>Shit:</p>
            <p className={styles.task}>{task.task}</p>
          </div>
          <div className={styles.listItemContainer}>
            <p className={styles.paragraph}>Added:</p>
            <p className={styles.date}>{task.createdAt.substring(0, 10)}</p>
            <span className={styles.actionsContainer}>
              <DeleteTaskForm id={task._id} />
              <FontAwesomeIcon
                icon={faPenToSquare}
                className={styles.editBtn}
                onClick={() => setIsEditing(true)}
              />
            </span>
          </div>
        </>
      )}
    </>
  );
}

export default TaskContent;
