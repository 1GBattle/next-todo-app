import { NextApiResponse } from 'next'

const AddTodo = async (res: NextApiResponse, req: NextApiResponse) => {
	return res.status(200).json({ message: 'Hello World' })
}

export default AddTodo
