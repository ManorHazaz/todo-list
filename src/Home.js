import Folder from './Folder';
import { FaPlusCircle } from 'react-icons/fa';


function Home ({ folders, addFolder })
{
    return (
        <div className='container home'>
            <h1> Hello Manor! </h1>
            <p className='tasks-counter'> you have 0 tasks todo.</p>
            <button className='btn' onClick={addFolder} >Create New Folder </button>
            <button className='btn-clean'> Edit </button>

            <div className='folders'>
                {folders.map((folder) =>(
                    <Folder key={folder.id} folder={folder} />
                ))}
            </div>
        </div>
    )
}

export default Home
