import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-tittle',
  templateUrl: './tittle.component.html',
  styleUrls: ['./tittle.component.scss']
})
export class TittleComponent implements OnInit, OnChanges, OnDestroy {

  @Input() public title:string= "Bem Vindo";

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
      console.log("Foi Alterado com sucesso...");
  }

  ngOnDestroy(): void {
      alert("Componente Foi Destruido")
  }
}
