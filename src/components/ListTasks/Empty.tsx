import styles from "./Empty.module.css";

export function Empty() {
  return (
    <div className={styles.container}>
      <img src="../../../public/clipboard.png" alt="Icono de un portapapeles" />
      <p>
        <strong>Aún no tienes tareas registradas</strong>
        Crea tareas y organiza lo que quieras hacer
      </p>
    </div>
  );
}
