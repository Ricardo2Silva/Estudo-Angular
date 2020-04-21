import { Component } from '@angular/core';
import { Itemlista } from 'src/app/models/itemLista.model';

@Component({
  selector: 'lista-compras',
  templateUrl:'lista-compras-container.component.html',
  styleUrls:['lista-compras-container.component.css']
})



export class ListaComprasContainerComponent{

  lista: Itemlista[]= [

    {id: 1,nome:'macbook',categoria: 'ELETRONICOS',valor: 10.000},
    {id: 2,nome:'feijao',categoria: 'ALIMENTOS'},
    {id: 3,nome:'banana',categoria: 'ALIMENTOS'},
    {id: 4,nome:'vaio',categoria: 'ELETRONICOS',valor: 3.000},
    {id: 5,nome:'acucar',categoria: 'ALIMENTOS',valor: 1.5},
    {id: 6,nome:'arroz',categoria: 'ALIMENTOS',valor: 15.75}

  ];

  onRemoveHandler(event:number){
    console.log('estou no container recebendo o id que veio do ItemLista', event);
    // removendo o item
    this.lista =this.lista.filter(item => item.id !==event)
  }
}
