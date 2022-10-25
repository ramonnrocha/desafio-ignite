
import { Trash,Check } from "phosphor-react";
import {   InputHTMLAttributes, useState} from "react";
import { ITask } from "../App";
import styles from './Task.module.css'


interface Props {
  task: ITask;

}

export function Task({ task }: Props){

  return (
    <div className={styles.task}>
      <div className={styles.customcheckbox}>
      <button
        className={styles.checkContainer}
      >
        {task.isCompleted ? <Check /> : <div />}
      </button>
      </div>
      <p>Parado</p>
      <button  title="Deletar Comentário">
          <Trash  size={20}/>
      </button>
    </div>
  )
}