import Task from './Task';
import { useHistory, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Tasks({ folders , match, onDelete, updateTaskDone ,addTask, editFolderName ,editTaskText, editFolderIcon}) 
{
    const folderId = useParams().id;
    const index = folders.findIndex(folder => folder.id == folderId);
    const icon = Object.keys(folders[index].icon);
    let history = useHistory();

    return (
        <div className='container page'>
            <FontAwesomeIcon icon='arrow-left' onClick={() => history.goBack()} className='backarrow'/>
            <div className='title'>
                <input type='text' className='clean-text-input folder-title' value={folders[index].title} onChange={(e) => editFolderName(e.target.value, folderId) } />
                <div className='dropdown-icons'>
                <FontAwesomeIcon className='active-icon' icon={folders[index].icon} />
                    <div className='dropdown-icons-content' >
                        <FontAwesomeIcon icon='folder' className='dropdown-icon' onClick={ () => editFolderIcon('folder', folderId) }/>
                        <FontAwesomeIcon icon='music' className='dropdown-icon' onClick={ () => editFolderIcon('music', folderId) }/>
                        <FontAwesomeIcon icon='briefcase' className='dropdown-icon' onClick={ () => editFolderIcon('briefcase', folderId) }/>
                        <FontAwesomeIcon icon='briefcase-medical' className='dropdown-icon' onClick={ () => editFolderIcon('briefcase-medical', folderId) }/>
                        <FontAwesomeIcon icon='utensils' className='dropdown-icon' onClick={ () => editFolderIcon('utensils', folderId) }/>
                        <FontAwesomeIcon icon='child' className='dropdown-icon' onClick={ () => editFolderIcon('child', folderId) }/>
                        <FontAwesomeIcon icon='lock' className='dropdown-icon' onClick={ () => editFolderIcon('lock', folderId) }/>
                    </div>
                </div>
            </div>
            
            <div className='content'>
                <div className='tasks'>
                    { folders[index].tasks.length > 0 ? folders[index].tasks.map((task) =>(
                        <Task key={task.id} task={task} folderId={index} onDelete={onDelete} updateTaskDone={updateTaskDone} editTaskText={editTaskText} />
                    )) : 'There are no tasks in this folder'}
                </div>
            </div>
            <FontAwesomeIcon icon='plus-circle' className='add-task-btn' onClick={() => addTask(folderId)} />
        </div>
    )
}

export default Tasks
