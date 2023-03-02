import type { FC } from 'react'
import './TodoList.css'
import { Button } from 'antd'

const TodoList: FC = () => {
	return (
		<div className='TodoList'>
			<h1>
				Todo List <span>A simple React Todo List App</span>
			</h1>
		</div>
	)
}

export default TodoList
