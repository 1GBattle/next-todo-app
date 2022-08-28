export default interface TodoModel {
	id?: string
	title?: string
	description?: string
	completed?: boolean
	createdAt?: number
	updatedAt?: number | undefined
}
