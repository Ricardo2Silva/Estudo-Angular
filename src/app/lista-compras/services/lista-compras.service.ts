import { Component, IterableDiffers } from '@angular/core';
import { ItemLista } from 'src/app/models/itemLista.model';


@Component({
  selector:'lista-compras-service',
  templateUrl:'lista-compras.service.html',
  styleUrls:['lista-compras.service.css']
})

export class ListaComprasService{

  lista:ItemLista[]=[

    {id: 1,nome:'macbook',categoria: 'ELETRONICOS',valor: 10.000},
    {id: 2,nome:'feijao',categoria: 'ALIMENTOS'},
    {id: 3,nome:'banana',categoria: 'ALIMENTOS'},
    {id: 4,nome:'vaio',categoria: 'ELETRONICOS',valor: 3.000},
    {id: 5,nome:'acucar',categoria: 'ALIMENTOS',valor: 1.5},
    {id: 6,nome:'arroz',categoria: 'ALIMENTOS',valor: 15.75}

  ]

  constructor(){

  }
  getListaCompras():ItemLista[]{
    return this.lista
  }

  removerItem(id:number):ItemLista[]{
    // removendo o item
    this.lista =this.lista.filter(item => item.id !==id)
    return this.lista
  }

  // todo -precisa implementar

  getItemLista(id:number):ItemLista{
    return null;
  }

  // todo -precisa implementar
  addItemLista(item:ItemLista):ItemLista{
    return null;
  }
  // todo -precisa implementar
  getListarFilter(descricao:string):ItemLista[]{
    return [];
  }
}
