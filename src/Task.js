import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Task ({ task, onDelete, folderId, updateTaskDone, editTaskText }) 
{
    const done = task.done ? 'done' : '';

    return (
        <li className='task'>
            <span className={`task-done ${done}`} onClick={ () => updateTaskDone( task.id )}></span>
            <input type='text' value={task.text} className='clean-text-input' onChange={ (e) => editTaskText(e.target.value, task.id) }/>
            <FontAwesomeIcon icon={faTimes} className='task-delete' onClick={() => onDelete( task.id )} />
        </li>
    )
}

export default Task
