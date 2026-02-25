import { Component, Input } from '@angular/core';
import { Task } from '../../Interfaces/task.interface';
import { Description } from '../../Interfaces/description.interface';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent {
  @Input() description: Description = {};
}
