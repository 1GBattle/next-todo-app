import React, { FormEvent } from 'react'
import axios from 'axios'
import { NextPage } from 'next'
import NavBar from '../../components/NavBar'
import { useAppDispatch } from '../../redux/hooks/hooks'
import { createTodo } from '../../redux/todos/todosSlice'
import styles from '../../styles/CreateTodo.module.css'
import { useRouter } from 'next/router'

const CreateTodo: NextPage = () => {
	const [title, setTitle] = React.useState<string>('')
	const [description, setDescription] = React.useState<string>('')
	const router = useRouter()

	const dispatch = useAppDispatch()

	const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		await axios
			.post('/api/db/createTodo', {
				title,
				description
			})
			.then((res) => {
				dispatch(createTodo(res.data))
				router.push('/')
			})
	}

	return (
		<div>
			<NavBar showAddTodo={false} />

			<form
				className={`${styles.container} form box-shadow`}
				onSubmit={(e) => onFormSubmit(e)}
			>
				<h1 className={styles.pageTitle}>Add Todo</h1>

				<hr className={styles.hRule} />

				<div className={'formGroup'}>
					<label className={'formLabel'} htmlFor='todo-title'>
						Title
					</label>

					<input
						className={`formInput input`}
						type='text'
						autoFocus={true}
						autoComplete='off'
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>

				<div className={'formGroup'}>
					<label className={'formLabel'} htmlFor='todo-description'>
						Description
					</label>

					<textarea
						className={`formTextArea input`}
						id='todo-description'
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>

				<div className={styles.buttonGroup}>
					<button className={`${styles.createBtn} btn`}>Create</button>
				</div>
			</form>
		</div>
	)
}

export default CreateTodo
