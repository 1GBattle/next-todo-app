import { query, collection, getDocs } from 'firebase/firestore'
import { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../firebase/firebase'
import TodoModel from '../../../models/TodoModel'

const getTodos = async (req: NextApiRequest, res: NextApiResponse) => {
	let todos: TodoModel[] = []

	if (req.method === 'GET') {
		try {
			const q = query(collection(db, 'todos'))

			const querySnapshot = await getDocs(q)
			querySnapshot.forEach((doc) => {
				// doc.data() is never undefined for query doc snapshots
				todos.push(doc.data().todo as TodoModel)
			})

			res.status(200).json(todos.flat())
		} catch (error: any) {
			res.status(500).json({ error: error.message })
		}
	} else {
		res.status
	}
}

export default getTodos
