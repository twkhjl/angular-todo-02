import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Item } from '../model/item';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() createEvent = new EventEmitter<any>();

  tmpVal:string="";
  is_blank:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }



  updateTmpVal(event:any){
    this.is_blank=false;
    this.tmpVal=event.target.value;

  }
  validate_is_blank(){
    let class_list_err='ring-red-600 placeholder-red-600 focus:ring-red-600 ring-2';
    return this.is_blank?class_list_err:''
  }

  create(){
    if(this.tmpVal.trim().length===0){
      this.is_blank=true;
      return;
    }
    this.createEvent.emit(this.tmpVal);
    this.tmpVal='';
    this.is_blank=false;

  }


}
