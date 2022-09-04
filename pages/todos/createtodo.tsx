import axios from 'axios'
import { User } from 'firebase/auth'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import NavBar from '../../components/NavBar'
import { useAppDispatch, useAppState } from '../../redux/hooks/hooks'
import { createTodo } from '../../redux/todos/todosSlice'
import styles from '../../styles/CreateTodo.module.css'

const CreateTodo: NextPage = () => {
	const router = useRouter()
	const dispatch = useAppDispatch()
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	// const user = useAppState((state) => state.user.value) as User

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (title && description) {
			try {
				await axios.post('/api/db/createTodo', {
					title,
					description,
					createdAt: new Date(),
					userId: user.uid
				})

				dispatch(
					createTodo({ title, description, createdAt: new Date(), userId: user.uid })
				)

				setTitle('')
				setDescription('')
				router.push('/')
			} catch (error) {
				console.log(error)
			}
		}
	}

	return (
		<div>
			<NavBar showAddTodo={false} />

			<div className={styles.formContainer}>
				<form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
					<div className={styles.formGroup}>
						<label className={styles.formLabel} htmlFor='title'>
							Title
						</label>
						<input
							className={styles.formInput}
							value={title}
							onChange={(e) => {
								setTitle(e.target.value)
							}}
							type='text'
							id='title'
						/>
					</div>

					<div className={styles.formGroup}>
						<label className={styles.formLabel} htmlFor='description'>
							Description
						</label>
						<textarea
							className={styles.formTextArea}
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							id='description'
						/>
					</div>

					<div className={styles.formGroup}>
						<button className={`btn ${styles.submitBtn}`}>Create</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default CreateTodo
