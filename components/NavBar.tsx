import Link from 'next/link'
import React from 'react'
import styles from '../styles/NavBar.module.css'
import Image from 'next/image'

interface Props {
	showAddTodo?: boolean
}

const NavBar: React.FC<Props> = ({ showAddTodo }) => {
	return (
		<div>
			<nav className={styles.navBar}>
				<div className={styles.logoContainer}>
					<Image
						className={styles.logo}
						src='/page-icon.png'
						alt='The Todo App'
						height={'48px'}
						width={'48px'}
					/>
					<h1 className={styles.pageTitle}>
						<Link href={'/'}>Todo App</Link>
					</h1>
				</div>
				{showAddTodo && (
					<div>
						<button className={`btn ${styles.addBtn}`}>
							<Link href={'/todo/createtodo'}>Add Todo</Link>
						</button>
					</div>
				)}
			</nav>
		</div>
	)
}

export default NavBar
