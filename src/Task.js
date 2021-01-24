import { FaTimes } from 'react-icons/fa';

function Task ({ task, onDelete, folderId, updateTaskDone, editTaskText }) 
{
    const done = task.done ? 'done' : '';

    return (
        <li className='task'>
            <span className={`task-done ${done}`} onClick={ () => updateTaskDone( task.id )}></span>
            <input type='text' value={task.text} className='task-text' onChange={ (e) => editTaskText(e.target.value, task.id) }/>
            <FaTimes className='task-delete' onClick={() => onDelete( task.id )} />
        </li>
    )
}

export default Task
