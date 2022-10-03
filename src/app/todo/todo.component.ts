import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  test:string="test"



  updateTmpVal(event:any){
    this.tmpVal=event.target.value;
  }

  chk_change(old_value:string){
    if(old_value==this.tmpVal){return false;}
    return true;

  }


  remove(){

    this.todos.splice(this.idx,1);
    return;
  }

  edit(){
    this.editable=!this.editable;
    this.tmpVal=this.todo.description;
  }

  update(){
    this.todos[this.idx].description=this.tmpVal;
    this.editable=false;
  }

  constructor() {}

  ngOnInit(): void {
  }


}
