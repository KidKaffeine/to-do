import styles from "./button.module.css";

export default function ({ title, type, className }) {
  return (
    <button type={type} className={styles[className]}>
      {title}
    </button>
  );
}
