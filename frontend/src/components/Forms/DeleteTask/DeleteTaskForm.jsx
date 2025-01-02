import styles from "./deleteTaskForm.module.css";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "react-router";

function DeleteTaskForm({ id }) {
  return (
    <>
      <Form
        method="delete"
        action={`/homepage/delete/${id}`}
        className={styles.addTaskForm}
      >
        <button type="submit" className={styles.deleteBtn}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </Form>
    </>
  );
}

export default DeleteTaskForm;
