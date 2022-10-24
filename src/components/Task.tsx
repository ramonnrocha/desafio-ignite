
import { Trash } from "phosphor-react";
import {   InputHTMLAttributes, useState} from "react";
import styles from './Task.module.css'


interface TasksProps {
  id: number,
  title: string,
  isComplete: boolean,
  onDeleteTask: (task : string) => void;
}



export function Task({ id, title, isComplete, onDeleteTask } : TasksProps ){

  function handleDeleteTask (){
    onDeleteTask(title)
  }

  function verifyIsComlplete (){
    isComplete = true;
  }

  

  return (
    <div className={styles.task}>
      <div className={styles.customcheckbox}>
       <input type="checkbox" onClick={verifyIsComlplete} name="checkbox" id="1" />
       <label htmlFor=""></label>
      </div>
      <p>{title}</p>
      <button onClick={handleDeleteTask} title="Deletar Comentário">
          <Trash  size={20}/>
      </button>
    </div>
  )
}