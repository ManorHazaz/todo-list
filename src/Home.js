import Folder from './Folder';


function Home ({folders})
{
    return (
        <div className='container home'>
            <h1> Hello Manor! </h1>
            <p className='tasks-counter'> you have 0 tasks todo.</p>
            <button className='btn'>Create New Folder </button>
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
