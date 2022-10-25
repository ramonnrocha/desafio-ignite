
import styles from './HomeTask.module.css'
import noTask from '../assets/no-task.svg';
import { Task } from './Task';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { ITask } from '../App';

interface Props {
  tasks: ITask[];
  onAddTask : (taskTitle : string) => void;
  onDeleteTask : (taskId : string) => void;
  onCompletedTask : (taskId : string) => void;
}


export function HomeTask({ tasks, onAddTask, onDeleteTask, onCompletedTask } : Props){ 
  const [ title, setTiTle] = useState("");
  const [ id, set] = useState("");
  
  function handleSubimit (event : FormEvent) {
    event?.preventDefault();

    onAddTask(title);
    setTiTle('')
  }

  function onChangeTitle (event : ChangeEvent<HTMLTextAreaElement>) {
    setTiTle(event.target.value);
    
  }

  

  const taskQuantity = tasks.length;
  const completedTasks = tasks.filter( task => task.isCompleted).length
  return(
    <div>
      <div className={styles.form}>
        <form onSubmit={handleSubimit}>
            <textarea 
              onChange={onChangeTitle}
              value={title}
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
              Tarefas Criadas  <span>{taskQuantity}</span>
            </div>
            <div className={styles.completed}>
              Concluidas <span>{completedTasks}</span> de <span>{tasks.length}</span>
            </div>
         </header>
          <div className={styles.hometasks}>
          {tasks.map( (task) => (
            <Task key={task.id} task={task} onDelete={onDeleteTask} onCompletedTask={onCompletedTask}          />
          ))}

          {tasks.length <= 0 && (
            <div className={styles.noTasks}>  
              <img src={noTask} alt="no-task"/>
              <div>
              <h4>Você ainda não tem tarefas cadastradas</h4>
              <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </div>
          )}
            
          </div>
    </div>


    </div>
  )
}