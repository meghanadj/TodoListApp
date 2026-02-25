import { Component } from '@angular/core';
import { Task } from './Interfaces/task.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MeghanaTodoList';
  toDo: Array<Task> = [
    {
      "id": 1,
      "title": "Prepare Angular interview questions",
      "description": "Revise RxJS, lifecycle hooks, and performance optimization",
      "isCompleted": false,
      "priority": "High",
      "dueDate": new Date("2026-03-01T18:00:00Z"),
      "createdAt": new Date("2026-02-25T10:30:00Z"),
      "tags": ["Interview", "Angular"],
      "assignedTo": {
        "userId": 101,
        "name": "Meghana Joshi",
        "email": "meghana@example.com"
      }
    },
    {
      "id": 2,
      "title": "Implement rate limiter",
      "description": "Add middleware-based rate limiting to API",
      "isCompleted": true,
      "priority": "Medium",
      "dueDate": new Date("2026-02-28T12:00:00Z"),
      "createdAt": new Date("2026-02-20T09:00:00Z"),
      "tags": ["Backend", "C#"],
      "assignedTo": {
        "userId": 102,
        "name": "Rahul Sharma",
        "email": "rahul@example.com"
      }
    },
    {
      "id": 3,
      "title": "Database optimization",
      "description": "Review indexing strategy and query performance",
      "isCompleted": false,
      "priority": "Low",
      "dueDate": new Date("2026-03-05T15:30:00Z"),
      "createdAt": new Date("2026-02-22T11:45:00Z"),
      "tags": ["SQL", "Performance"],
      "assignedTo": {
        "userId": 103,
        "name": "Anita Verma",
        "email": "anita@example.com"
      }
    }
  ]
  createTodo() {
    console.log("ToDo created")
  }
}

