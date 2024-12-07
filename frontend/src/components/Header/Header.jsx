import { Link } from "react-router";
import styles from "./header.module.css";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <Link to="/" className={styles.homeLink}>
          <h1 className={styles.heading}>Shit App</h1>
        </Link>
        <p className={styles.paragraphHeader}>
          <em>We sincerely apologize for the swearing.</em>
        </p>
      </header>
      <hr className={styles.headerRule} />
    </>
  );
}
