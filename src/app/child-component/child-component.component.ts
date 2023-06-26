import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent {
  @Output() public onSend: EventEmitter<number> = new EventEmitter<number>()
  public inputValue: number;

  public handleClick(){
    this.onSend.emit(this.inputValue)
    this.inputValue= 0;
  }


}
