import styles from './listItem.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function ListItem({ task }) {
  return (
    <>
      <li>
        <p>Shit:<small>{task.task}</small></p>
        <div>
          <p>Date:</p><small>{task.createdAt.substring(0, 10)}</small>
          <FontAwesomeIcon icon={faTrash} className={styles.deleteIcon} />
          <FontAwesomeIcon icon={faPenToSquare} className={styles.editIcon} />
        </div>
      </li>
    </>
  );
}

export default ListItem;
