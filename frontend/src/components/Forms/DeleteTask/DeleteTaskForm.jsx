import styles from "./deleteTaskForm.module.css";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "react-router";

function DeleteTaskForm({ id, setIsEditing }) {
  return (
    <>
      <span className={styles.actionsFormContainer}> 
        <Form
          method="delete"
          action={`/homepage/delete/${id}`}
          className="test"
        >
          <button type="submit" className={styles.deleteBtn}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </Form>
        <FontAwesomeIcon
          icon={faPenToSquare}
          className={styles.editBtn}
          onClick={() => setIsEditing(true)}
        />
      </span>
    </>
  );
}

export default DeleteTaskForm;
