import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { DescriptionComponent } from './task/description/description.component';
import { AssignedComponent } from './task/assigned/assigned.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    AssignedComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
