import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TodoComponent } from './todo/todo.component';

import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Item } from './model/item';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'toodo-app-2';
  nav_title="angular-todo-app-02";
  todos:Item[]=[
    {description:'todo1',done:true},
    {description:'todo2',done:true},
    {description:'todo3',done:true},
    {description:'todo4',done:true},
    {description:'todo5',done:true},
    {description:'todo6',done:true},
  ];
  in_progress:Item[]=[];
  done:Item[]=[];


  drop(event: CdkDragDrop<Item[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  // end drop

  createTodo(description:string){
    this.todos.unshift(
      {description,done:false});
  }

}
