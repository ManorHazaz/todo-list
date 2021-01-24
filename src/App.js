import {React , useState} from 'react';
import {BrowserRouter as Router, Switch, Route, useParams, useRouteMatch} from 'react-router-dom';

import Home from './Home';
import Tasks from './Tasks';


function App() {
	const [folders, setFolders] = useState([
        {
            id: 1,
            title: 'name',
			logo: 'logo',
			tasks: 
			[ 
				{
					id: 1,
					text: 'blaas bla bla',
					done: true,
				},
				{
					id: 2,
					text: 'bla bla bla',
					done: false,
				},
			]
        },
        {
            id: 2,
            title: 'name',
			logo: 'logo',
			tasks: 
			[ 
				{
					id: 3,
					text: 'blasdasda bla bla',
					done: true,
				},
				{
					id: 4,
					text: 'bla bla bla',
					done: false,
				},
			]
        },
        {
            id: 3,
            title: 'naasdme',
			logo: 'logo',
			tasks: 
			[ 
				{
					id: 5,
					text: 'bla bla bla',
					done: false,
				},
				{
					id: 6,
					text: 'bla bla bla',
					done: false,
				},
			]
        }
		]);


	function deleteTask (taskId) 
	{
		setFolders((prev) =>
			prev.map(({ tasks, ...rest }) => 
			({
				...rest,
				tasks: tasks.filter((task) => task.id !== taskId)
			})
		))
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

	return (
		<div className='App'>
			<Router>
				<Route path='/' exact render={(props) => 
					(
    					<Home {...props} folders={folders} />
  					)} 
				/>
				<Route path='/editFolder' />
				{/* <Route path='/Tasks/:id' render={(props) => 
					(
    					<Tasks {...props} folders={folders} onDelete={deleteTask} updateTaskDone={updateTaskDone} />
					)}
				/>
				<Route path='/Tasks/:id' > 
					<Tasks folders={folders} onDelete={deleteTask} updateTaskDone={updateTaskDone} />
				</Route> */}

				<Route path='/Tasks/:id' children={<Tasks folders={folders} onDelete={deleteTask} updateTaskDone={updateTaskDone} /> } />

			</Router> 
		</div>
	);
}

export default App;
