import { FaTimes } from 'react-icons/fa';

function Task ({ task, onDelete, folderId, updateTaskDone }) 
{
    const done = task.done ? 'done' : '';

    return (
        <li className='task'>
            <span className={`task-done ${done}`} onClick={ () => updateTaskDone( task.id )}></span>
            <input readOnly type='text' value={task.text} className='task-text' />
            <FaTimes className='task-delete' onClick={() => onDelete( task.id )} />
        </li>
    )
}

export default Task
