import styles from "./header.module.css"

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.heading}>Shit App</h1>
        <p className={styles.paragraphHeader}>
          We sincerely apologize for the swearing.
        </p>
      </header>
    </>
  );
}
