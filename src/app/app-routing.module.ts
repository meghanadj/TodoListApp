import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { CreateToDoComponent } from './create-to-do/create-to-do.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [
  {
    path: "",
    component: TodolistComponent
  },
  {
    path: "create-to-do",
    component: CreateToDoComponent
  },
  {
    path: "user-profile",
    component: UserprofileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }