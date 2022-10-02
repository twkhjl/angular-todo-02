import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../model/item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todos!:Item[]
  @Input() todo!:Item
  @Input() idx!:number

  editable=false
  tmpVal:string=""


  updateTmpVal(event:any){
    this.tmpVal=event.target.value;
  }



  remove(){

    this.todos.splice(this.idx,1);
    return;
  }

  update(){
    this.todos[this.idx].description=this.tmpVal;
    this.editable=false;
  }

  constructor() {}

  ngOnInit(): void {
  }


}
