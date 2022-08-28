import { NextApiRequest, NextApiResponse } from 'next'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from '../../../firebase/firebase'

const createEmailAccount = async (req: NextApiRequest, res: NextApiResponse) => {
	const { email, password } = req.body

	if (req.method === 'POST') {
		if (email && password) {
			try {
				const auth = getAuth(app)
				createUserWithEmailAndPassword(auth, email, password)
					.then((userCredentials) => {
						const user = userCredentials.user
						res.status(200).json({ message: 'User created', user })
					})
					.catch((err) => {
						res.status(500).json({ message: 'Error creating account', err })
					})
			} catch (error: any) {
				res.status(500).json({ error: error.message })
			}
		} else {
			res.status(500).json({ message: 'Please provide an email and password' })
		}
	} else {
		res.status(500).json({ message: 'Please use a POST request' })
	}
}

export default createEmailAccount
