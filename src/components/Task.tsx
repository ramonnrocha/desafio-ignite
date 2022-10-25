
import { Trash,Check } from "phosphor-react";
import {   InputHTMLAttributes, useState} from "react";
import { ITask } from "../App";
import styles from './Task.module.css'


interface Props {
  task: ITask;
  onDelete: (taskId : string) => void;
}

export function Task({ task, onDelete }: Props){

  return (



    <div className={styles.task}>
      <div className={styles.customcheckbox}>
      <button
        className={styles.checkContainer}
      >
        {task.isCompleted ? <Check /> : <div />}
      </button>
      </div>
      <p>{task.title}</p>
      <button onClick={() => onDelete(task.id)} title="Deletar Comentário">
          <Trash  size={20}/>
      </button>
    </div>
  )
}