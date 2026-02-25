export interface Task {
    id?: number,
    title?: string,
    description?: string,
    isCompleted?: boolean,
    priority?: 'High' | 'Medium' | 'Low',
    dueDate?: Date,
    createdAt?: Date,
    tags?: Array<string>,
    assignedTo?: {
        userId?: number,
        name?: string,
        email?: string
    }
}