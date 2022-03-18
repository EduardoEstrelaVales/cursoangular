import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {

  public nome:string = "Eduardo";
  public idade:number = 25;
  public checked:boolean = false;
  public imgSrc:string= "https://i.pinimg.com/originals/d1/37/31/d137310caea589e8f550404f41ca57e2.jpg"
  
  public position: {x: number, y:number} = {x: 0, y:0}
  constructor() { }

  ngOnInit(): void {
  }

  public alertaInfo(valor: MouseEvent) {
      console.log(valor)
  }

  public mouseMove(valor: MouseEvent) {
    
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }

}
