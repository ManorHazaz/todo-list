import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Folder ({ folder, deleteMode, deleteFolder })
{
    function tasksToDo() 
	{
		var todo = 0;
        folder.tasks.forEach( task => 
        {
            if(task.done === false)
            {
                todo++;
            }
        });
		return todo;
	}

    return (
        <Link className={`folder delete-mode-${deleteMode} `} to={`/tasks/${folder.id}`} >
                {deleteMode && <div className='delete-folder' onClick={(e) => deleteFolder(e, folder.id )}><FontAwesomeIcon icon={faTimes} className='delete-icon' /></div>}
                <FontAwesomeIcon className='icon' icon={folder.icon} />
                <p className='tasks-counter'>{tasksToDo()}</p>
                <h3 className='title'>{folder.title}</h3>
        </Link>
    )
}

Folder.defaultProps = {
    title: 'folder',
}

Folder.propTypes = 
{
    title: PropTypes.string,
}

export default Folder
