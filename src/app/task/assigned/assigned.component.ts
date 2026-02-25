import { Component, Input } from '@angular/core';
import { Assigned } from 'src/app/Interfaces/assigned.interface';

@Component({
  selector: 'app-assigned',
  templateUrl: './assigned.component.html',
  styleUrls: ['./assigned.component.scss']
})
export class AssignedComponent {
  @Input() assigned?: Assigned = {}
}
