import React, { FormEvent } from 'react'
import axios from 'axios'
import { NextPage } from 'next'
import Link from 'next/link'
import NavBar from '../../components/NavBar'
import TodoModel from '../../models/TodoModel'
import { useAppDispatch } from '../../redux/hooks/hooks'
import { addTodoAsync, createTodo } from '../../redux/todos/todosSlice'
import styles from '../../styles/CreateTodo.module.css'

const CreateTodo: NextPage = () => {
	const [title, setTitle] = React.useState<string>('')
	const [description, setDescription] = React.useState<string>('')

	const dispatch = useAppDispatch()

	const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const res = await axios.post('/api/db/createTodo', {
			title,
			description
		})

		dispatch(createTodo(res.data))
	}

	return (
		<div>
			<NavBar showAddTodo={false} />

			<form
				className={`${styles.container} ${styles.form} box-shadow`}
				onSubmit={(e) => onFormSubmit(e)}
			>
				<h1 className={styles.pageTitle}>Add Todo</h1>

				<hr className={styles.hRule} />

				<div className={styles.formGroup}>
					<label className={styles.formLabel} htmlFor='todo-title'>
						Title
					</label>

					<input
						className={`${styles.formInput} input`}
						type='text'
						autoFocus={true}
						autoComplete='off'
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>

				<div className={styles.formGroup}>
					<label className={styles.formLabel} htmlFor='todo-description'>
						Description
					</label>

					<textarea
						className={`${styles.formTextArea} input`}
						id='todo-description'
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>

				<div className={styles.buttonGroup}>
					<button className={`${styles.createBtn} btn`}>
						<Link href={'/'}>Create</Link>
					</button>
				</div>
			</form>
		</div>
	)
}

export default CreateTodo
