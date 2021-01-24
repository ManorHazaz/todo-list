import { FaTimes } from 'react-icons/fa';

function Task ({ task, onDelete, folderId, updateTask }) 
{
    const done = task.done ? 'done' : '';
    
    return (
        <li className='task'>
            <span className={`task-done ${done}`} onClick={ () => updateTask( task.id ,'done' )}></span>
            <input readOnly type='text' value={task.text} className='task-text' />
            <FaTimes className='task-delete' onClick={() => onDelete( folderId ,task.id )} />
        </li>
    )
}

export default Task
