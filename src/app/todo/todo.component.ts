import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../model/item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {


  constructor() { }
  ngOnInit(): void {
  }

  @Input() todos!: Item[]
  @Input() todo!: Item
  @Input() idx!: number

  editable = false
  tmpVal: string = ""
  test: string = "test"


  chk_change(old_value: string) {
    if (old_value == this.tmpVal) { return false; }
    return true;

  }


  change_height(event: any) {

    event.target.style.height = 0;
    event.target.style.height = (event.target.scrollHeight) + "px";

  }

  remove() {
    this.todos.splice(this.idx, 1);
    return;
  }

  edit(textarea: any) {
    setTimeout(() => {
      textarea.focus();
      let scrollHeight = textarea.scrollHeight;
      textarea.style = `height:${scrollHeight}px`;
    }, 100);



    this.editable = !this.editable;
    this.tmpVal = this.todo.description;
  }

  update() {
    this.todos[this.idx].description = this.tmpVal;
    this.editable = false;
  }






}
