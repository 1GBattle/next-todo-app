import { NextApiRequest, NextApiResponse } from 'next'
import { setDoc, doc } from 'firebase/firestore'
import { db } from '../../../firebase/firebase'
import moment from 'moment'
import { uuidv4 } from '@firebase/util'
import TodoModel from '../../../models/TodoModel'

const CreateTodo = async (req: NextApiRequest, res: NextApiResponse) => {
	const { title, description } = req.body

	if (req.method === 'POST') {
		if (title && description) {
			try {
				const todo = {
					title,
					description,
					completed: false,
					createdAt: moment.now(),
					updatedAt: null,
					id: uuidv4()
				} as TodoModel

				await setDoc(doc(db, 'todos', todo.id.toString()), {
					todo
				})

				res.status(200).json(todo)
			} catch (error: any) {
				res.status(500).json({ error: error.code })
			}
		} else {
			res.status(400).json({ error: 'Please provide a title and description' })
		}
	} else {
		res.status(405).json({ message: 'Method not allowed' })
	}
}

export default CreateTodo
