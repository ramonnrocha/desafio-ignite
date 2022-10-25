
import { Header } from "./components/Header";
import styles from "./App.module.css"
import { HomeTask } from "./components/HomeTask";
import { useState } from "react";

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {
  
  const [tasks, setTasks] = useState<ITask[]>([]);

  function addTask( taskTitle : string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title : taskTitle,
        isCompleted: false,
      }
    ])
  }

  function deleteTaskById( taskId : string) {
    const newTasks = tasks.filter( task => task.id != taskId);

    setTasks(newTasks);
  }

  function toggleTaskCompletedById( taskId : string) {
    const newTasks = tasks.map( task => {
      if(task.id === taskId) {
        return {
          ...task,
          isCompleted : !task.isCompleted,
        }
      }
      return task;
    });
    setTasks(newTasks);
    
  }
  return (

      <>
        <Header />
        <div className={styles.wrapper}>
          <HomeTask onAddTask={addTask} tasks={tasks} onDeleteTask={deleteTaskById} onCompletedTask={toggleTaskCompletedById}/>
        </div>
      </>    
      
  )
}


