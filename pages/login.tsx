import React from 'react'
import axios from 'axios'
import { NextPage } from 'next'

import NavBar from '../Components/NavBar'

import styles from '../styles/Login.module.css'
import { useAppDispatch } from '../redux/hooks/hooks'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { setUser } from '../redux/user/userSlice'
import { useRouter } from 'next/router'

const Signin: NextPage = () => {
	const router = useRouter()
	const [email, setEmail] = React.useState<string>('')
	const [password, setPassword] = React.useState<string>('')
	const dispatch = useAppDispatch()
	const user = useSelector((state: RootState) => state.user.value)

	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const res = await axios
			.post('/api/user/signinWithEmail', {
				email,
				password
			})
			.then((res) => res.data)

		dispatch(setUser(res))
		setEmail('')
		setPassword('')

		if (user) {
			router.push('/')
		}
	}

	const handleCreateAccount = async () => {
		await axios
			.post('/api/user/createEmailAccount', {
				email,
				password
			})
			.then(() => {
				setEmail('')
				setPassword('')
			})
	}

	return (
		<div>
			<NavBar showAddTodo={false} />
			<div className={styles.container}>
				<div className={styles.welcomeContainer}>
					<h1 className={styles.welcomeMessage}>Welcome</h1>
					<button
						className={`${styles.createBtn} btn`}
						onClick={() => handleCreateAccount()}
					>
						Create Account
					</button>
				</div>

				<div className={styles.formContainer}>
					<form onSubmit={(e) => handleLogin(e)}>
						<h1 className={styles.formTitle}>Sign in</h1>
						<hr className={styles.hRule} />
						<div className={styles.formGroup}>
							<label className={styles.formLabel} htmlFor='email'>
								Email
							</label>
							<input
								value={email}
								className={styles.input}
								type='email'
								name='email'
								id='email'
								onChange={(e) => {
									setEmail(e.target.value)
								}}
							/>
						</div>

						<div className={styles.formGroup}>
							<label className={styles.formLabel} htmlFor='password'>
								Password
							</label>
							<input
								value={password}
								className={styles.input}
								type='password'
								name='password'
								id='password'
								onChange={(e) => {
									setPassword(e.target.value)
								}}
							/>
						</div>

						<div className={`${styles.formGroup} ${styles.btnGroup}`}>
							<button
								onClick={() => {}}
								type='submit'
								className={`${styles.submitBtn} btn`}
							>
								Sign in
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Signin
