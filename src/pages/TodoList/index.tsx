import type { FC } from 'react'
import './index.css'
import NewForm from './NewForm'
const TodoList: FC = () => {
	return (
		<div className='TodoList'>
			<h1>
				Todo List <span>A simple React Todo List App</span>
			</h1>
			<NewForm />
		</div>
	)
}

export default TodoList
