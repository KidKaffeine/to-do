import styles from "./deleteTaskForm.module.css"
import { Form } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function DeleteTaskForm({ id }) {
  return (
    <>
      <Form method="delete" action={`delete/${id}`}>
        <button type="submit" className={styles.deleteBtn}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </Form>
    </>
  );
}

export default DeleteTaskForm;
