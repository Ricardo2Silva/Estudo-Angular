import { Component, Input } from '@angular/core';

@Component({
  selector: 'lista-compras-contador',
  templateUrl:'lista-compras-contador.component.html',
  styleUrls: ['lista-compras-contador.component.css']
})

export class ListaComprasContadorComponent{

  // utilizamos o input para poder acessar essa informacao em outro local
  @Input()
  qtdItens:number;



}
