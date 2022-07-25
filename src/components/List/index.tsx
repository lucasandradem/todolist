import { v4 as uuidv4 } from 'uuid';

import Clipboard from '../../assets/Clipboard.png';
import { Task } from '../Task';
import styles from './List.module.css';
import { FaPlusCircle } from 'react-icons/fa';
import { useState } from 'react';

interface TaskProps {
  id: string;
  name: string;
  isComplete: any;
}

export function List() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [taskTitle, setTaskTitle] = useState('');

  const completedTasks = tasks.reduce(
    (previousValue, currentValue) => previousValue + currentValue.isComplete,
    0
  );

  function handleAddTask() {
    event?.preventDefault();
    setTasks((task) => [
      { id: uuidv4(), name: taskTitle, isComplete: false },
      ...task,
    ]);
    setTaskTitle('');
  }

  function handleRemoveTask(taskId: string) {
    const tasksWithoutRemoved = tasks.filter((item) => item.id !== taskId);
    setTasks(tasksWithoutRemoved);
  }

  function handleCompleteTask(taskId: string) {
    const completedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        task.isComplete = !task.isComplete;
      }
      return task;
    });
    setTasks(completedTasks);
  }

  return (
    <>
      <form onSubmit={handleAddTask} className={styles.form}>
        <input
          onChange={(event) => setTaskTitle(event.target.value)}
          value={taskTitle}
          type='text'
          placeholder='Adicione uma tarefa'
        />
        <button type='submit'>
          Criar
          <FaPlusCircle />
        </button>
      </form>
      <div className={styles.container}>
        <>
          <header>
            <strong>
              Tarefas criadas <span>{tasks.length}</span>
            </strong>
            <strong>
              Concluídas{' '}
              <span>
                {completedTasks} de {tasks.length}
              </span>
            </strong>
          </header>

          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <Task
                id={task.id}
                completeTask={() => handleCompleteTask(task.id)}
                removeTask={() => handleRemoveTask(task.id)}
                key={index}
                name={task.name}
                done={task.isComplete}
              />
            ))
          ) : (
            <div className={styles.empty}>
              <img src={Clipboard} />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          )}
        </>
      </div>
    </>
  );
}
