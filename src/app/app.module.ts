import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { DescriptionComponent } from './task/description/description.component';
import { AssignedComponent } from './task/assigned/assigned.component';
import { CreateToDoComponent } from './create-to-do/create-to-do.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    AssignedComponent,
    DescriptionComponent,
    CreateToDoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
