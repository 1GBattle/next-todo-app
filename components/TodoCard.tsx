import React from 'react'
import styles from '../styles/TodoCard.module.css'
import TodoModel from '../models/TodoModel'

interface Props extends TodoModel {}

const TodoCard: React.FC<Props> = ({}) => {
	return (
		<div className={styles.container}>
			<div className={`${styles.todoCard} box-shadow`}>
				<div>
					<h1 className={styles.todoTitle}>Todo Title</h1>
					<p className={styles.todoDate}>Todo Date</p>
				</div>

				<hr className={styles.hRule} />

				<div className={styles.descriptionContainer}>
					<p className={styles.todoDescription}>Todo Description</p>
				</div>

				<div className={styles.btnContainer}>
					<button className={`${styles.todoBtn} btn`}>Delete</button>
				</div>
			</div>
		</div>
	)
}

export default TodoCard
