export interface Task {
    id?: number,
    title?: string,
    description?: string,
    isCompleted?: boolean,
    priority?: Priority,
    dueDate?: Date,
    createdAt?: Date,
    tags?: Array<string>,
    assignedTo?: Assignment
}

interface Assignment {
    userId?: number,
    name?: string,
    email?: string
}

type Priority = 'High' | 'Medium' | 'Low'