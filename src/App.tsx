import type { FC } from 'react'
import { useRoutes } from 'react-router-dom'
import './App.css'
import Demo from './pages/Demo/demo'
import Home from './pages/Home/home'
import TodoList from './pages/TodoList/TodoList'
const App: FC = () =>
	useRoutes([
		{
			path: '/demo',
			element: <Demo />,
		},
		{
			path: '/',
			element: <Home />,
			children: [{ path: 'todoList', element: <TodoList /> }],
		},
	])

export default App
