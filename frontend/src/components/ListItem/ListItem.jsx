import styles from "./listItem.module.css"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DeleteTaskForm from "../Forms/DeleteTask/DeleteTaskForm";

function ListItem({ task }) {
  return (
    <>
      <li>
        <div> 
          <p className={styles.paragraph}>Shit:</p>
          <small className={styles.task}>{task.task}</small>
        </div>
        <div>
          <p className={styles.paragraph}>Added:</p>
          <small className={styles.date}>{task.createdAt.substring(0, 10)}</small>
          <DeleteTaskForm id={task._id} />
          <FontAwesomeIcon icon={faPenToSquare} className={styles.editBtn} />
        </div>
      </li>
    </>
  );
}

export default ListItem;
