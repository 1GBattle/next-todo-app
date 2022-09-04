import type { NextPage } from 'next'
import React from 'react'
import NavBar from '../components/NavBar'
import TodoList from '../components/TodoList'
import styles from '../styles/Home.module.css'
import SearchBar from '../components/SearchBar'

const Home: NextPage = () => {
	const [searchTerm, setSearchTerm] = React.useState<string>('')

	return (
		<div className={styles.container}>
			<NavBar showAddTodo={true} />

			<div className={styles.searchBar}>
				<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			</div>

			<div className={styles.todoListContainer}>
				<TodoList searchTerm={searchTerm} />
			</div>
		</div>
	)
}

export default Home
