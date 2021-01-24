import Task from './Task';
import { FaArrowLeft, FaPlusCircle } from 'react-icons/fa';
import { useHistory, useParams } from "react-router-dom";


function Tasks({ folders , match, onDelete, updateTaskDone ,addTask, editFolderName ,editTaskText}) 
{
    const folderId = useParams().id;
    const index = folders.findIndex(folder => folder.id == folderId);
    let history = useHistory();

    return (
        <div className='container page'>
            <FaArrowLeft onClick={() => history.goBack()} className='backarrow'/>
            <input type='text' className='folder-title' value={folders[index].title} onChange={(e) => editFolderName(e.target.value, folderId) } />
            <div className='contant'>
                <ul className='tasks'>
                    { folders[index].tasks.length > 0 ? folders[index].tasks.map((task) =>(
                        <Task key={task.id} task={task} folderId={index} onDelete={onDelete} updateTaskDone={updateTaskDone} editTaskText={editTaskText} />
                    )) : 'There are no tasks in this folder'}
                </ul>
                <FaPlusCircle className='add-task-btn' onClick={() => addTask(folderId)} />
            </div>
        </div>
    )
}

export default Tasks
