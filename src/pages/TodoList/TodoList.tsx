import type { FC, ChangeEvent } from 'react'

import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'antd'
import './TodoList.scss'
import type { Task } from './todo-type'
import { EditFilled, ScissorOutlined } from '@ant-design/icons'
interface TodoListProps {
	remove: (id: string) => void
	wholeTask: Task
	update: (id: string, task: string) => void
}

const TodoList: FC<TodoListProps> = ({ remove, wholeTask, update }) => {
	const [isEditing, setIsEditing] = useState(false)
	const [task, setTask] = useState(wholeTask.task)

	const toggleFrom = () => {
		setIsEditing(!isEditing)
	}
	// 更新任务
	const handleUpdate = (evt: React.MouseEvent<Element, MouseEvent>) => {
		evt.preventDefault()
		update(wholeTask.id, task)
		toggleFrom()
	}
	const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
		setTask(evt.target.value)
	}

	let result
	if (isEditing) {
		result = (
			<li className='Todo'>
				<form className='Todo-edit-form'>
					<input title='todo' onChange={handleChange} value={task} type='text' />
					<Button onClick={handleUpdate}>Save</Button>
				</form>
			</li>
		)
	} else {
		result = (
			<li className={wholeTask.completed ? 'Todo-task completed' : 'Todo-task'}>
				<span className='task-content'>{wholeTask.task}</span>
				<div className='btn-container'>
					<button className='Todo-buttons' onClick={toggleFrom}>
						Edit
						<EditFilled />
					</button>
					<button
						className='Todo-buttons'
						onClick={(e) => {
							remove(wholeTask.id)
						}}
					>
						Del
						<ScissorOutlined />
					</button>
				</div>
			</li>
		)
	}
	return result
}
export default TodoList
