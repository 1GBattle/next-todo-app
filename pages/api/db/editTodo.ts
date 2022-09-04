import { doc, updateDoc } from 'firebase/firestore'
import moment from 'moment'
import { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../firebase/firebase'

const EditTodo = async (req: NextApiRequest, res: NextApiResponse) => {
	const { id, title, description } = req.body.newTodo

	if (req.method === 'PUT') {
		if (id && title && description) {
			try {
				const docRef = doc(db, 'todos', `${id}`)
				await updateDoc(docRef, {
					'todo.title': title,
					'todo.description': description,
					'todo.updatedAt': moment.now()
				})

				res.status(200).json({ message: 'Todo edited' })
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

export default EditTodo
