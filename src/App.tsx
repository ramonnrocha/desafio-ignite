
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
  
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: 'teste',
      title: 'teste',
      isCompleted: false,
    }
  ]);

  return (

      <>
        <Header />
        <div className={styles.wrapper}>
          <HomeTask tasks={tasks}/>
        </div>
      </>    
      
  )
}


