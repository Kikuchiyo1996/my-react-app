import { ChangeEvent, FC, useState } from 'react'
import { useReducer } from 'react'
import './NewForm.css'
import type { Task } from './todo-type'

interface TodoListProps {
	createTodo: (newTodo: Task) => void
}
const TodoList: FC<TodoListProps> = ({ createTodo }) => {
	const [userInput, setUserInput] = useReducer((state: Task, newState) => ({ ...state, ...newState }), {
		task: '',
	})
	const [id, setId] = useState(Math.random() + '')
	// 同步任务
	const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
		setUserInput({ [evt.target.name]: evt.target.value })
	}
	// 新建任务
	const handleSubmit = (evt: React.FormEvent) => {
		evt.preventDefault()
		const newTodo = { id: Math.random() + '', task: userInput.task, completed: false }
		createTodo(newTodo)
		setUserInput({ task: '' })
	}
	return (
		<form className='NewTodoForm' onSubmit={handleSubmit}>
			<label htmlFor='task'>New todo</label>
			<input value={userInput.task} onChange={handleChange} id='task' type='text' name='task' placeholder='New Todo' />
			<button>Add Todo</button>
		</form>
	)
}

export default TodoList
