import Folder from './Folder';



function Home ({ folders, addFolder, tasksToDo })
{
    return (
        <div className='container home'>
            <h1> Hello Manor! </h1>
            <p className='tasks-counter'> you have {tasksToDo()} tasks todo.</p>
            <button className='btn create-folder' onClick={addFolder} >Create New Folder </button>
            <button className='btn-clean' > Edit </button>

            <div className='folders'>
                {folders.map((folder) =>(
                    <Folder key={folder.id} folder={folder} />
                ))}
            </div>
        </div>
    )
}

export default Home
