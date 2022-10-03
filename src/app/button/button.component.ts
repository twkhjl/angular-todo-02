import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Output() clickEvent = new EventEmitter<any>();
  @Input() btnColor!: string
  @Input() iconStyle!: string

  @Input() is_enabled:boolean=true;

  onClick() {
    if(!this.is_enabled){return;}

    this.clickEvent.emit();
  }

  btnClassList() {
    let defaultClassList = `text-2xl rounded-md px-2
    sm:text-xl`;
    let defaultColor = "text-black";
    let disabledBtnStyle="text-gray-500 opacity-50";

    if(!this.is_enabled){
      return `${defaultClassList} ${disabledBtnStyle}`;

    }

    if (this.btnColor) {
      return `${defaultClassList} ${this.btnColor}`;
    }
    return `${defaultClassList} ${defaultColor}`;

  }

  iconClassList() {
    let defaultIconStyle = 'fa-solid fa-user';

    if (this.iconStyle) {
      return `${this.iconStyle}`;
    }
    return `${defaultIconStyle}`;



  }


  constructor() { }

  ngOnInit(): void {
  }

}
