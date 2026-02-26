import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../Interfaces/task.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-to-do',
  templateUrl: './create-to-do.component.html',
  styleUrls: ['./create-to-do.component.scss'],
})

export class CreateToDoComponent {
  //@Output() taskSave = new EventEmitter<Task>();
  taskForm: Task = {};
  //addTask(form: any) { console.log(form) };
  priorities = ['Low', 'Medium', 'High'];
  constructor(private router: Router) { }
  save() {
    // this.taskSave.emit({ ...this.taskForm });
    this.router.navigate([""], {
      state: { currentTask: this.taskForm }
    })
  }
}
