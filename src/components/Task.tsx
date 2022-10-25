
import { Trash,Check } from "phosphor-react";
import { ITask } from "../App";
import styles from './Task.module.css'


interface Props {
  task: ITask;
  onDelete: (taskId : string) => void;
  onCompletedTask: (taskId : string) => void;
}

export function Task({ task, onDelete, onCompletedTask }: Props){

  return (



    <div className={styles.task}>
      <div className={styles.customcheckbox}>
      <button
        onClick={() => onCompletedTask(task.id)}
        className={styles.checkContainer}
      >
        {task.isCompleted ? <Check /> : <div />}
      </button>
      </div>
      <p className={ task.isCompleted ? styles.textCompleted : ""}>{task.title}</p>
      <button onClick={() => onDelete(task.id)} title="Deletar Comentário">
          <Trash  size={20}/>
      </button>
    </div>
  )
}