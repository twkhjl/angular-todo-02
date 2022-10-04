import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Item } from '../model/item';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  @Output() createEvent = new EventEmitter<any>();

  tmpVal:string="";
  is_valid:boolean=true;
  is_typing:boolean=false;





  updateTmpVal(event:any){
    this.is_valid=true;
    this.tmpVal=event.target.value;
    let scrollHeight=event.target.scrollHeight;
    event.target.style=`height:${scrollHeight}px`;
    // console.log(event.target.scrollHeight);
  }
  chk_is_valid(){
    let class_list_err='ring-red-600 placeholder-red-600 focus:ring-red-600 ring-2';
    return !this.is_valid?class_list_err:''
  }

  create(textArea:any){

    if(this.tmpVal.trim().length===0){
      this.is_valid=false;
      textArea.focus();
      return;
    }

    this.createEvent.emit(this.tmpVal);
    this.tmpVal='';
    this.is_valid=true;
    textArea.value='';
    textArea.style=null;

  }


}
