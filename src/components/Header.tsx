import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.container}>
      <img src="../../public/logo.svg" alt="Logo de la aplicación" />
    </header>
  );
}
