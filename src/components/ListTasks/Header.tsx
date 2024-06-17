import styles from "./Header.module.css";

interface Props {
  tasksCounter: number;
  checkedTasksCounter: number;
}

export function Header({ tasksCounter, checkedTasksCounter }: Props) {
  return (
    <header className={styles.container}>
      <aside>
        <p>Tareas creadas</p>
        <span>{tasksCounter}</span>
      </aside>

      <aside>
        <p>Finalizadas</p>
        <span>
          {tasksCounter === 0
            ? tasksCounter
            : `${checkedTasksCounter} de ${tasksCounter}`}
        </span>
      </aside>
    </header>
  );
}
