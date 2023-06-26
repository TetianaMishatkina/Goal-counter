import {Component, OnInit} from '@angular/core';
import {ImgService} from "./img-service/img-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private service: ImgService) {
    const collectedAmountSaved = localStorage.getItem('collected');
    this.collectedAmount = collectedAmountSaved ? +collectedAmountSaved : 0
    const leftAmountSaved = localStorage.getItem('left');
    this.leftAmount = leftAmountSaved ? +leftAmountSaved : 1500
  }
  public title: string = 'My goal';
  public imgItem: string = '';
  public totalPrice: number = 1500;
  public collectedAmount: number = 0;
  public leftAmount: number = 0;
  public loading: boolean = false;

  public handleAddAmount(inputValue:number){
    this.collectedAmount = this.collectedAmount + inputValue
    this.leftAmount = this.totalPrice -this.collectedAmount
    this.totalPrice = this.totalPrice - this.collectedAmount
    localStorage.setItem('collected', this.collectedAmount.toString() )
    localStorage.setItem('left', this.leftAmount.toString())
  }

   public ngOnInit(){
    this.loading = true;
      this.service.getImages().then((data)=>{
        this.imgItem = data
        this.loading =false;
      })
   }
}

