import styles from "./input.module.css";

export default function Input({ type, name, id, className }) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className={styles[className]}
    />
  );
}
