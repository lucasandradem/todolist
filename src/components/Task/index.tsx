import { FaTrashAlt } from 'react-icons/fa';

import styles from './Task.module.css';

interface TaskProps {
  id: string;
  name: string;
  done: boolean;
  removeTask: () => void;
  completeTask: () => void;
}

export function Task({ id, name, done, removeTask, completeTask }: TaskProps) {
  return (
    <div className={styles.task}>
      <input type='checkbox' name='' id={id} onClick={completeTask} />
      <label htmlFor={id}></label>
      {done ? <s>{name}</s> : <p>{name}</p>}

      <button type='button' onClick={removeTask}>
        <FaTrashAlt size={14} />
      </button>
    </div>
  );
}
