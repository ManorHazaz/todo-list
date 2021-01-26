import Task from './Task';
import { useHistory, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faTimes, faPlusCircle, faFolder, faMusic, faBriefcase, faBriefcaseMedical, faUtensils, faChild, faLock } from '@fortawesome/free-solid-svg-icons'


function Tasks({ folders , match, onDelete, updateTaskDone ,addTask, editFolderName ,editTaskText, editFolderIcon}) 
{
    const folderId = useParams().id;
    const index = folders.findIndex(folder => folder.id == folderId);
    const icon = Object.keys(folders[index].icon);
    let history = useHistory();

    return (
        <div className='container page'>
            <FontAwesomeIcon icon={faArrowLeft} onClick={() => history.goBack()} className='backarrow'/>
            <div className='title'>
                <input type='text' className='clean-text-input folder-title' value={folders[index].title} onChange={(e) => editFolderName(e.target.value, folderId) } />
                <div className='dropdown-icons'>
                <FontAwesomeIcon icon={folders[index].icon} />
                    <div className='dropdown-icons-content' >
                        <FontAwesomeIcon icon={faFolder} className='dropdown-icon' onClick={ () => editFolderIcon('faFolder', folderId) }/>
                        <FontAwesomeIcon icon={faMusic} className='dropdown-icon' onClick={ () => editFolderIcon('faMusic', folderId) }/>
                        <FontAwesomeIcon icon={faBriefcase} className='dropdown-icon' />
                        <FontAwesomeIcon icon={faBriefcaseMedical} className='dropdown-icon' />
                        <FontAwesomeIcon icon={faUtensils} className='dropdown-icon' />
                        <FontAwesomeIcon icon={faChild} className='dropdown-icon' />
                        <FontAwesomeIcon icon={faLock} className='dropdown-icon' />
                    </div>
                </div>
            </div>
            
            <div className='contant'>
                <ul className='tasks'>
                    { folders[index].tasks.length > 0 ? folders[index].tasks.map((task) =>(
                        <Task key={task.id} task={task} folderId={index} onDelete={onDelete} updateTaskDone={updateTaskDone} editTaskText={editTaskText} />
                    )) : 'There are no tasks in this folder'}
                </ul>
                <FontAwesomeIcon icon={faPlusCircle} className='add-task-btn' onClick={() => addTask(folderId)} />
            </div>
        </div>
    )
}

export default Tasks
