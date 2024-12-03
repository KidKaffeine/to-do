import styles from "./header.module.css";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.heading}>Shit App</h1>
        <p className={styles.paragraphHeader}>
          <em>We sincerely apologize for the swearing.</em>
        </p>
      </header>
      <hr className={styles.headerRule} />
    </>
  );
}
