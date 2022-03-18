import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
@Output() public enviarDados = new EventEmitter();

  public list: Array<{nome: string, idade:number}> =[
    {nome: "Eduardo", idade: 26},
    {nome: "Ingrid", idade: 23},
    {nome: "Benjamim", idade:1}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  getDados(event: number){
    this.enviarDados.emit(this.list[event])
    console.log(event)
  }

}
