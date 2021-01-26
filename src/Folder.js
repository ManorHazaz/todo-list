import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Folder ({ folder })
{

    return (
        <Link className='folder' to={`/tasks/${folder.id}`} >
                <FontAwesomeIcon className='icon' icon={faFolder} />
                <p className='tasks-counter'>{Object.keys(folder.tasks).length}</p>
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
