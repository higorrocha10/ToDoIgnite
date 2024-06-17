import styles from "./Task.module.css";
import { Check, Trash } from "@phosphor-icons/react";
import { TaskProps } from "../../App";

// interface DataProps {
//   dataTasks: {
//     id: number;
//     title: string;
//     isComplete: boolean;
//   };
//   removeTask: (id: number) => void;
//   toggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void;
// }

interface DataProps {
  dataTasks: TaskProps;
  removeTask: (id: number) => void;
  toggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void;
}

export function Task({ dataTasks, removeTask, toggleTaskStatus }: DataProps) {
  // Función que maneja el estado de las tareas "true" o "false"
  function handleTaskToogle() {
    toggleTaskStatus({ id: dataTasks.id, value: !dataTasks.isComplete });
  }

  //Función para eliminar tarea!
  function handleRemove() {
    removeTask(dataTasks.id);
  }

  const checkboxCheckedClassname = dataTasks.isComplete
    ? styles["checkbox-checked"]
    : styles["checkbox-unchecked"];

  const paragraphCheckedClassname = dataTasks.isComplete
    ? styles["paragraph-checked"]
    : "";

  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="checkbox" onClick={handleTaskToogle}>
          <input readOnly type="checkbox" />
          <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
            {dataTasks.isComplete && <Check size={12} />}
          </span>
          <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
            {dataTasks.title}
          </p>
        </label>
      </div>

      <button onClick={handleRemove}>
        <Trash size={22} color="#808080" />
      </button>
    </div>
  );
}
