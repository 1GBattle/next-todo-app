import { NextApiRequest, NextApiResponse } from 'next'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from '../../../firebase/firebase'

const signInWithEmail = async (req: NextApiRequest, res: NextApiResponse) => {
	const { email, password } = req.body

	if (req.method === 'POST') {
		if (email && password) {
			try {
				const auth = getAuth(app)
				const user = await signInWithEmailAndPassword(auth, email, password).then(
					(userCredentials) => userCredentials.user
				)

				res.status(200).json(user)
			} catch (error: any) {
				res.status(500).json({ error: error.code })
				console.log(error)
			}
		} else {
			res.status(500).json({ error: 'Please enter an email and password' })
		}
	} else {
		res.status(500).json({ error: 'Method not allowed' })
	}
}

export default signInWithEmail
