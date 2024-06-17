import "./global.css";
import styles from "./App.module.css";
import { PlusCircle } from "@phosphor-icons/react";
import { v4 as uuidv4 } from "uuid";
import { Task } from "./components/ListTasks/Task";
import { Header } from "./components/Header";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Empty } from "./components/ListTasks/Empty";
import { Header as TasksHeader } from "./components/ListTasks/Header";
import { useState } from "react";

export interface TaskProps {
  id: number;
  title: string;
  isComplete: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [inputValue, setInputValue] = useState("");

  // Verificar tareas completadas.
  const checkedTasksCounter = tasks.filter((task) => task.isComplete).length;

  // Función para agregar nuevas tareas!
  function handleAddTask() {
    if (!inputValue) {
      return;
    }

    const newsTasks: TaskProps = {
      id: Number.parseInt(uuidv4()),
      title: inputValue,
      isComplete: false,
    };

    setTasks((prevState) => [...prevState, newsTasks]);
    setInputValue("");
  }

  // Función eliminar una tarea
  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id);

    if (!confirm("¿Realmente deseas eliminar esta tarea?")) {
      return;
    }

    setTasks(filteredTasks);
  }

  // Función que actualizará el estado de las tareas listadas.
  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isComplete: value,
        };
      }

      return { ...task };
    });

    setTasks(updatedTasks);
  }

  return (
    <main>
      <Header />

      <section className={styles.container}>
        <div className={styles.taskInfoContainer}>
          <Input
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setInputValue(event.target.value)
            }
            value={inputValue}
          />

          <Button onClick={handleAddTask}>
            Crear
            <PlusCircle size={18} />
          </Button>
        </div>

        <div className={styles.taskList}>
          <TasksHeader
            tasksCounter={tasks.length}
            checkedTasksCounter={checkedTasksCounter}
          />

          {tasks.length > 0 ? (
            <div>
              {" "}
              {tasks.map((task) => (
                <Task
                  key={task.id}
                  dataTasks={task}
                  removeTask={handleRemoveTask}
                  toggleTaskStatus={handleToggleTask}
                />
              ))}{" "}
            </div>
          ) : (
            <Empty />
          )}
        </div>
      </section>
    </main>
  );
}
