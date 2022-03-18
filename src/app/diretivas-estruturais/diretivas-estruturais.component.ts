import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition:boolean = true;
  public onclick:boolean = true;

  public nome:string = "Ingrid"

  public list: Array<{nome: string, idade: number}> = [
    {nome: "Eduardo Vales", idade: 25},
    {nome: "Benjamim Vales", idade: 1},
    {nome: "Ingrid Vales", idade: 21},
  ]

  constructor() { }

  ngOnInit(): void {
    

    setInterval(() => {
      if (this.condition ) {
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 2000)

  }

  public onClick(){
    
    if (this.onclick) {
      this.onclick = false;
    } else {
      this.onclick = true;
    }
  
  }

  public onClickAddList(){
    this.list.push({nome: "Cristiane Ribeiro", idade: 44 })

  }

  public onClickEventList(event: number){

    this.list.splice(event, 1)

  }
 



  }

 

