import { Assigned } from "./assigned.interface"

export interface Task {
    id?: number,
    title?: string,
    description?: string,
    isCompleted?: boolean,
    priority?: Priority,
    dueDate?: Date,
    createdAt?: Date,
    tags?: Array<string>,
    assignedTo?: Assigned
}


export type Priority = 'High' | 'Medium' | 'Low'