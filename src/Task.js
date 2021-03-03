import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Task ({ task, onDelete, folderId, updateTaskDone, editTaskText }) 
{
    const done = task.done ? 'done' : '';

    return (
        <span className='task'>
            <span className={`task-done ${ done }`} onClick={ () => updateTaskDone( task.id )}></span>
            <input type='text' placeholder='new task' value={task.text} className='clean-text-input' onChange={ ( e ) => editTaskText( e.target.value, task.id ) }/>
            <FontAwesomeIcon icon='times' className='task-delete' onClick={() => onDelete( task.id )}  />
        </span>
    )
}

export default Task
