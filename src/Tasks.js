import Task from './Task';
import { useHistory, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faTimes, faPlusCircle } from '@fortawesome/free-solid-svg-icons'


function Tasks({ folders , match, onDelete, updateTaskDone ,addTask, editFolderName ,editTaskText, deleteFolder}) 
{
    const folderId = useParams().id;
    const index = folders.findIndex(folder => folder.id == folderId);
    let history = useHistory();

    return (
        <div className='container page'>
            <FontAwesomeIcon icon={faArrowLeft} onClick={() => history.goBack()} className='backarrow'/>
            <FontAwesomeIcon icon={faTimes} className='task-delete' onClick={() => deleteFolder( folderId )} />
            <div className='title'>
                <input type='text' className='clean-text-input folder-title' value={folders[index].title} onChange={(e) => editFolderName(e.target.value, folderId) } />

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
