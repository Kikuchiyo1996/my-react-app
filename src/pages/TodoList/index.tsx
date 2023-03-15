import { FC, useState } from 'react'
import type { Task } from './todo-type'
import NewForm from './NewForm'
import TodoList from './TodoList'
import './index.scss'

const TodoListAPP: FC = () => {
	const [todoLists, setTodoLists] = useState([
		{ id: '0', task: 'task 1', completed: false },
		{ id: '1', task: 'task 2', completed: true },
	])
	// 创建新待办事项
	const createTodo = (newTodo: Task) => {
		setTodoLists([...todoLists, newTodo])
	}
	// 删除当前任务
	const remove = (id: string) => {
		console.log(id)

		setTodoLists(todoLists.filter((list) => list.id !== id))
	}
	// 更新任务
	const update = (id: string, updtedTask) => {
		const updatedTodo = todoLists.map((todo) => {
			if (todo.id === id) {
				return { ...todo, task: updtedTask }
			}
			return todo
		})
		setTodoLists(updatedTodo)
	}
	// 渲染待办事项
	const todoList = todoLists.map((list) => {
		return <TodoList key={list.id} update={update} remove={remove} wholeTask={list} />
	})

	return (
		<div className='TodoList'>
			<h1>
				Todo List <span>A simple React Todo List App</span>
			</h1>
			<ul>{todoList}</ul>
			<NewForm createTodo={createTodo} />
		</div>
	)
}

export default TodoListAPP
