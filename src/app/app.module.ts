import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { TodoComponent } from './todo/todo.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatDialogModule} from '@angular/material/dialog';


import { ButtonComponent } from './button/button.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogContentComponent } from './dialog/dialog-content/dialog-content.component';
import { TttComponent } from './ttt/ttt.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodoComponent,
    SidebarComponent,
    ButtonComponent,
    DialogComponent,
    DialogContentComponent,
    TttComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
