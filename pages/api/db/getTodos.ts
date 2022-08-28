import { NextApiRequest, NextApiResponse } from 'next'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../../firebase/firebase'

const getTodos = async (req: NextApiRequest, res: NextApiResponse) => {
	const { uid } = req.query
	let todos: any[] = []

	if (uid) {
		try {
			const dbQuery = query(collection(db, 'todos'), where('userId', '==', uid))
			const querySnapshot = await getDocs(dbQuery)

			querySnapshot.forEach((doc) => {
				todos.push(doc.data())
			})

			res.status(200).json(todos)
		} catch (err: any) {
			res.status(500).json({ message: err.code })
		}
	} else {
		res.status(400).json({ message: 'Bad request, missing uid' })
	}
}

export default getTodos
