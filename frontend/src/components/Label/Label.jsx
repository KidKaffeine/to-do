import styles from "./label.module.css"

export default function Label({ title, htmlFor, ariaLabel, className }) {
  return (
    <label htmlFor={htmlFor} aria-label={ariaLabel} className={styles[className]}>
      {title}
    </label>
  );
}
