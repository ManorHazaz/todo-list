import {React , useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import * as Icons from '@fortawesome/free-solid-svg-icons';

import Home from './Home';
import Tasks from './Tasks';


function App() {
	const [folders, setFolders] = useState([
		{
            id: 1,
            title: 'General',
			icon: 'folder',
			tasks: 
			[ 
				{
					id: 1,
					text: 'just task',
					done: true,
				},
				{
					id: 2,
					text: 'one more',
					done: false,
				},
			]
        },
        {
            id: 2,
            title: 'My music',
			icon: 'music',
			tasks: 
			[ 
				{
					id: 3,
					text: 'kendrick lamar',
					done: true,
				},
				{
					id: 4,
					text: 'shazam',
					done: false,
				},
			]
        },
        {
            id: 3,
            title: 'Passwords',
			icon: 'lock',
			tasks: 
			[ 
				{
					id: 5,
					text: 'bank - 1234',
					done: false,
				},
				{
					id: 6,
					text: 'facebook -2345',
					done: false,
				},
			]
        }
	]);

	function tasksToDo() 
	{
		var todo = 0;
		folders.forEach( folder => 
		{
			folder.tasks.forEach( task => 
			{
				if(task.done === false)
				{
					todo++;
				}
			});
		});

		return todo;
	}

	function addFolder() 
	{
		const lastId = folders.length ? folders[folders.length-1].id : 0;
		const newFolder = { id: lastId + 1, title: '', icon: 'folder', tasks: [] };
		setFolders([ ...folders, newFolder ]);
	}

	function editFolderName( name, folderId ) 
	{
		setFolders((prev) =>
			prev.map(({id, title, ...rest}) => 
			({
				...rest, id,
				title: id == folderId ? name  : title
			}))
		);
	}

	function editFolderIcon( iconChange, folderId ) 
	{
		setFolders((prev) =>
			prev.map(({id, icon, ...rest}) => 
			({
				...rest, id,
				icon: id == folderId ? iconChange  : icon
			}))
		);
	}

	function deleteFolder (e, folderId)
	{
		e.preventDefault();
		setFolders(folders.filter( folder => folder.id !== folderId ));
    }
	
	function addTask(folderId) 
	{
		var lastId = 0;
		folders.forEach( folder => 
		{
			folder.tasks.forEach( task => 
			{
				if(task.id > lastId)
				{
					lastId = task.id;
				}
			});
		});
		
		const newTask = [{ id: lastId + 1, text: '', done: false }];

		setFolders((prev) =>
			prev.map(({id, tasks, ...rest}) => 
			({
				...rest, id,
				tasks: id == folderId ? ([...tasks ,...newTask]) : tasks
			}))
		);
	}
	
	function editTaskText( taskText, taskId ) 
	{
		setFolders((prev) =>
			prev.map(({ tasks, ...rest }) => 
			({
				...rest,
				tasks: tasks.map((task) => task.id === taskId ? {...task ,text: taskText } :task )
			}))
		)
	}

	function updateTaskDone( id )
	{
		setFolders((prev) =>
			prev.map(({ tasks, ...rest }) => 
			({
				...rest,
				tasks: tasks.map((task) => task.id === id ? {...task ,done: !task.done } :task )
			}))
		)
	}

	function deleteTask(taskId) 
	{
		setFolders((prev) =>
			prev.map(({ tasks, ...rest }) => 
			({
				...rest,
				tasks: tasks.filter((task) => task.id !== taskId)
			})
		))
    }

	return (
		<div className='App'>
			<Router>
				<Route path='/' exact render={(props) => 
					(
    					<Home {...props} folders={folders} addFolder={addFolder} tasksToDo={tasksToDo} deleteFolder={deleteFolder} />
  					)} 
				/>
				<Route path='/editFolder' />
				<Route path='/Tasks/:id' children={

				<Tasks folders={folders} deleteFolder={deleteFolder} onDelete={deleteTask} 
				updateTaskDone={updateTaskDone} addTask={addTask} editFolderName={editFolderName} 
				editTaskText={editTaskText} editFolderIcon={editFolderIcon} /> 

				} />
			</Router> 
		</div>
	);
}

export default App;
