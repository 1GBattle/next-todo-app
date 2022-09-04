import React, { useEffect, useRef } from 'react'
import TodoModel from '../models/TodoModel'
import styles from '../styles/TodoList.module.css'
import TodoCard from './TodoCard'
import { useAppDispatch, useAppState } from '../redux/hooks/hooks'
import { setTodos } from '../redux/todos/todosSlice'
import axios from 'axios'

interface Props {
	searchTerm: string
}

const TodoList: React.FC<Props> = ({ searchTerm }) => {
	let todos = useAppState((state) => state.todos.value)
	const todoRef = useRef(todos.filter((todo) => todo.title.includes(searchTerm)))
	const dispatch = useAppDispatch()

	if (searchTerm) {
		todoRef.current = todos.filter((todo) => todo.title.includes(searchTerm))
	} else {
		todoRef.current = todos
	}

	useEffect(() => {
		const getTodos = async () => {
			const res = await axios.get('/api/db/getTodos')
			dispatch(setTodos(res.data))
			// todoRef.current = res.data
			return res.data
		}

		getTodos().then((res) => {
			todoRef.current = res.data
		})
	}, [todoRef, dispatch])

	return (
		<div className={styles.container}>
			<div className={`${styles.todoListContainer}`}>
				{todos &&
					todos.map((todo: TodoModel) => {
						return <TodoCard key={todo.id} todo={todo} />
					})}
			</div>
		</div>
	)
}

export default TodoList
