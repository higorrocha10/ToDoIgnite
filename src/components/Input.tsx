import styles from "./Input.module.css";

export function Input({ ...rest }) {
  return (
    <input
      className={styles.container}
      placeholder="Agregar una nueva tarea"
      {...rest}
    />
  );
}
