import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` 
  <!-- <app-title *ngIf="destruir"></app-title> -->
 <!-- <app-diretivas-estruturais></app-diretivas-estruturais> -->
 <!--<app-diretivas-atributos>
   <h1>Aulas de Diretivas de Atributos</h1>
   <h2>Final da Aulas</h2>
 </app-diretivas-atributos>  
  <app-new-component></app-new-component> 
  <app-input [contador]="addValue"></app-input>
<button (click)="add()">Add</button>

  <app-output (enviarDados)="setDados($event)"></app-output>
  <br>
  <ng-template [ngIf]="getDados">
    <h1>{{getDados.nome}}</h1>
    <h2>{{getDados.idade}}</h2>
  </ng-template>--> 
  <app-food-add></app-food-add>
  <app-food-list></app-food-list>
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

  public addValue: number = 10

  public getDados: {nome:string, idade:number} | undefined 

  construtor() { } 

  ngOnInit(): void {
    
    
  }

  public add(){
    this.addValue += 1
  }

  public setDados(event: {nome:string, idade:number}){
    this.getDados = event;
  }

 
}
