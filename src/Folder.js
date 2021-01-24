import PropTypes from 'prop-types';
import { FaFolder } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Folder ({ folder })
{
    return (
        <Link to={`/tasks/${folder.id}`} >
            <div className='folder'>
                <span className='icon'><FaFolder /></span>
                <p className='tasks-counter'>{Object.keys(folder.tasks).length}</p>
                <h3 className='title'>{folder.title}</h3>
            </div>
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
