import styles from "./Button.module.css";

export function Button({ children, ...rest }) {
  return (
    <button className={styles.container} {...rest}>
      {children}
    </button>
  );
}
