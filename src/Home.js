import Folder from './Folder';
import {React , useState} from 'react';

function Home ({ folders, addFolder, tasksToDo, deleteFolder })
{
    const [ deleteMode, setDeleteMode ] = useState(false);

    return (
        <div className='container home'>
            <h1> Hello Manor! </h1>
            <p className='tasks-counter'> you have { tasksToDo() } tasks todo.</p>
            <button className='btn create-folder' onClick={ addFolder } >Create New Folder </button>
            <button className='btn-clean' onClick={ () => setDeleteMode( !deleteMode ) } > Delete </button>

            <div className='folders'>
                { 
                    folders.length > 0 
                    ? folders.map( ( folder ) =>
                        (
                            <Folder key={ folder.id } folder={ folder } deleteMode={ deleteMode } deleteFolder={ deleteFolder } />
                        )) 
                    : <div className='no-folders'>There are no folders.</div> 
                }
            </div>
        </div>
    )
}

export default Home
