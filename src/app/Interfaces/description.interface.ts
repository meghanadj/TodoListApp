import { Priority } from "./task.interface";

export interface Description {
    description?: string,
    isCompleted?: boolean,
    priority?: Priority,
    dueDate?: Date,
    createdAt?: Date,
    tags?: Array<string>
}
