import React from 'react'
import TodoModel from '../models/TodoModel'
import styles from '../styles/TodoList.module.css'
import TodoCard from './TodoCard'
import moment from 'moment'

interface Props {
	todos?: TodoModel[]
}
const TodoList: React.FC<Props> = ({ todos }) => {
	return (
		<div className={styles.container}>
			<div className={`${styles.todoListContainer}`}>
				{todos &&
					todos.map((todo: TodoModel) => {
						return <TodoCard key={todo.id} />
					})}
			</div>
		</div>
	)
}

export default TodoList
