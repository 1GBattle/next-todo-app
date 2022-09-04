import { NextApiRequest, NextApiResponse } from 'next'
import { collection, doc, getDocs, query, deleteDoc } from 'firebase/firestore'
import { db } from '../../../firebase/firebase'

const DeleteTodo = async (req: NextApiRequest, res: NextApiResponse) => {
	const { id } = req.query

	if (req.method === 'DELETE') {
		if (id) {
			try {
				await deleteDoc(doc(db, 'todos', `${id}`))
				res.status(200).json({ message: 'Todo deleted' })
			} catch (error: any) {
				res.status(500).json({ error: error.message })
			}
		} else {
			res.status(400).json({ error: 'Please provide an id' })
		}
	} else {
		res.status(405).json({ message: 'Method not allowed' })
	}
}

export default DeleteTodo
