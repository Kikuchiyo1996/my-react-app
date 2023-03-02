import type { FC } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Button } from 'antd'

const Home: FC = () => {
	return (
		<div className='App'>
			<header>Hello React!</header>

			<nav>
				<NavLink to='/demo'>
					<Button type='default'>demo</Button>
				</NavLink>
				<NavLink to='/todoList'>
					<Button type='default'>TodoList</Button>
				</NavLink>
			</nav>
			<main>
				<Outlet />
			</main>
		</div>
	)
}

export default Home
