
import styles from './HomeTask.module.css'
import noTask from '../assets/no-task.svg';
import { Task } from './Task';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';



export function HomeTask(){ 

  const [tasks, setTasks] = useState([
    'Começar a Estudar JavaScript'
  ])

  const [ newTitleTask, setNewTitleTask] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    
    setTasks([...tasks, newTitleTask])
    setNewTitleTask('');
  }

  function handleNewTaskChange (event: ChangeEvent<HTMLTextAreaElement>){
    setNewTitleTask(event.target.value)
  }

  function onDeleteTask(taskDelete: string){
    const taskDeletedOne = tasks.filter(task => {
      return task != taskDelete;
    })
    
    setTasks(taskDeletedOne)
  }

  const isNewTaskEmpty = newTitleTask.length === 0

  return(
    <div>
      <div className={styles.form}>
        <form onSubmit={handleCreateNewTask} action="">
            <textarea 
              value={newTitleTask}
              onChange={handleNewTaskChange}
              name='task'
              required
              placeholder="Adicione uma nova tarefa" />
            <button className={styles.button} type="submit" disabled={isNewTaskEmpty}>
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
          {tasks.map( task => (
            <Task key={task} id={1} title={task} isComplete={true} onDeleteTask = {onDeleteTask}            
              />
          ))}
        </div>
    </div>


    </div>
  )
}