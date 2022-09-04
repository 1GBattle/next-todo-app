import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'

import NavBar from '../../components/NavBar'
import TodoModel from '../../models/TodoModel'
import { useAppDispatch, useAppState } from '../../redux/hooks/hooks'
import { updateTodo } from '../../redux/todos/todosSlice'

import styles from '../../styles/Todo.module.css'

const Todo: React.FC = () => {
	const router = useRouter()
	const { id } = router.query
	const dispatch = useAppDispatch()
	let newTodo = {} as TodoModel

	const todo: TodoModel = useAppState((state) => state.todos.value).find(
		(todo: TodoModel) => todo.id === id
	)! as TodoModel

	const [title, setTitle] = React.useState<string>(todo ? todo.title : '')
	const [description, setDescription] = React.useState<string>(
		todo ? todo.description : ''
	)

	if (todo) {
		newTodo = { ...todo, title, description }
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (todo) {
			await axios.put(`/api/db/editTodo/`, {
				newTodo
			})
			dispatch(updateTodo(newTodo))
			router.push('/')
		}
	}

	if (todo) {
		return (
			<div>
				<NavBar showAddTodo={true} />

				<form
					className={`${styles.container} form box-shadow`}
					onSubmit={(e) => {
						handleSubmit(e)
					}}
				>
					<h1 className={styles.pageTitle}>Update Todo</h1>

					<hr className={styles.hRule} />

					<div className={'formGroup'}>
						<label className={'formLabel'} htmlFor='todo-title'>
							Title
						</label>

						<input
							value={title}
							className={`formInput input`}
							type='text'
							autoFocus={true}
							autoComplete='off'
							onChange={(e) => {
								setTitle(e.target.value)
							}}
						/>
					</div>

					<div className={'formGroup'}>
						<label className={'formLabel'} htmlFor='todo-description'>
							Description
						</label>

						<textarea
							value={description}
							className={`formTextArea input`}
							id='todo-description'
							onChange={(e) => {
								setDescription(e.target.value)
							}}
						/>
					</div>

					<div className={styles.buttonGroup}>
						<button className={`${styles.createBtn} btn`} type='submit'>
							Update
						</button>
					</div>
				</form>
			</div>
		)
	} else {
		return (
			<div>
				<h1>Todo Not Found</h1>
			</div>
		)
	}
}

export default Todo
