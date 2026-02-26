import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../Interfaces/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task = {};
  taskDescription = {}

  constructor() {
  }

  ngOnInit() {
    this.taskDescription = { 'description': this.task.description, 'createdAt': this.task.createdAt, 'dueDate': this.task.dueDate, 'isCompleted': this.task.isCompleted, 'priority': this.task.priority, 'tags': this.task.tags }
  }
}
