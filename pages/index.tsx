import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import moment from 'moment'

import NavBar from '../components/NavBar'
import TodoCard from '../components/TodoCard'
import TodoList from '../components/TodoList'
import TodoModel from '../models/TodoModel'
import styles from '../styles/Home.module.css'
import SearchBar from '../components/SearchBar'
import { useAppState } from '../redux/hooks/hooks'

const Home: NextPage = () => {
	const todos: TodoModel[] = [
		{
			id: '1',
			title: 'Todo Title',
			description: 'Todo Description',
			createdAt: moment.now()
		}
	]

	const todosFromRedux: any = useAppState((state) => state)
	console.log('todosFromRedux', todosFromRedux)

	return (
		<div className={styles.container}>
			<NavBar showAddTodo={true} />

			<div className={styles.searchBar}>
				<SearchBar />
			</div>

			<div className={styles.todoListContainer}>
				<TodoList todos={todos} />
			</div>
		</div>
	)
}

export default Home
