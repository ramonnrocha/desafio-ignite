
import styles from './HomeTask.module.css'
import noTask from '../assets/no-task.svg';
import { Task } from './Task';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { ITask } from '../App';

interface Props {
  tasks: ITask[];
}


export function HomeTask({ tasks } : Props){ 




  return(
    <div>
      <div className={styles.form}>
        <form >
            <textarea 
              required
              placeholder="Adicione uma nova tarefa" />
            <button className={styles.button} type="submit" >
               Criar
              <PlusCircle size={16} />
            </button>
        </form>
      </div>  
      

      <div className={styles.hometask}>
         <header>
            <div className={styles.created}>
              Tarefas Criadas  <span>{tasks.length}</span>
            </div>
            <div className={styles.completed}>
              Concluidas <span>0</span> de <span>{tasks.length}</span>
            </div>
         </header>
          <div className={styles.hometasks}>
          {tasks.map( (task) => (
            <Task task={task} 
            />
          ))}
            
          </div>
    </div>


    </div>
  )
}