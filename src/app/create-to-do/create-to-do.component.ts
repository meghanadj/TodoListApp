import { Component } from '@angular/core';
import { Task } from '../Interfaces/task.interface';

@Component({
  selector: 'app-create-to-do',
  templateUrl: './create-to-do.component.html',
  styleUrls: ['./create-to-do.component.scss'],
})

export class CreateToDoComponent {
  taskForm: Task = {};
  addTask(form: any) { console.log(form) };
  priorities = ['Low', 'Medium', 'High'];
}
