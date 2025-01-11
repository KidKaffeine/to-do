import styles from "./button.module.css";

export default function Button ({ title, type, className, name, value }) {

  return (
    <button type={type} className={styles[className]}  name={name} value={value}>
      {title}
    </button>
  );
}
