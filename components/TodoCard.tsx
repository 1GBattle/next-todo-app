import React from 'react'
import styles from '../styles/TodoCard.module.css'
import TodoModel from '../models/TodoModel'
import moment from 'moment'
import axios from 'axios'
import Link from 'next/link'
import { useAppDispatch } from '../redux/hooks/hooks'
import { deleteTodo } from '../redux/todos/todosSlice'

interface Props {
	todo: TodoModel
}

const TodoCard: React.FC<Props> = ({ todo }) => {
	const dispatch = useAppDispatch()

	const handleDelete = async (
		id: string,
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.stopPropagation()
		await axios.delete(`/api/db/deleteTodo?id=${id}`)
		dispatch(deleteTodo(id))
	}

	return (
		<div className={styles.container}>
			<Link href={`/todo/${todo.id}`}>
				<div className={`${styles.todoCard} box-shadow`}>
					<div>
						<h1 className={styles.todoTitle}>{todo.title}</h1>
						<p className={styles.todoDate}>
							{moment.unix(todo.createdAt / 1000).format('ddd MMMM Do, YYYY')}
						</p>
					</div>

					<hr className={styles.hRule} />

					<div className={styles.descriptionContainer}>
						<p className={styles.todoDescription}>{todo.description}</p>
					</div>

					<div className={styles.btnContainer}>
						<button
							className={`${styles.todoBtn} btn`}
							onClick={(e) => {
								handleDelete(todo.id, e)
							}}
						>
							Delete
						</button>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default TodoCard
