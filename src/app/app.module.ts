import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { DescriptionComponent } from './task/description/description.component';
import { AssignedComponent } from './task/assigned/assigned.component';
import { CreateToDoComponent } from './create-to-do/create-to-do.component';
import { TodolistComponent } from './todolist/todolist.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    AssignedComponent,
    DescriptionComponent,
    CreateToDoComponent,
    TodolistComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
