import { Component, OnInit } from '@angular/core';
import { ItemLista } from 'src/app/models/itemLista.model';
import {ListaComprasService} from '../services/lista-compras.service'

@Component({
  selector: 'lista-compras',
  templateUrl:'lista-compras-container.component.html',
  styleUrls:['lista-compras-container.component.css'],
  providers:[ListaComprasService]
})



export class ListaComprasContainerComponent implements OnInit{

  lista:ItemLista[ ];


  constructor(private listaComprasService:ListaComprasService){

  }
  ngOnInit():void{
    this.lista =this.listaComprasService.getListaCompras()
  }

  onRemoveHandler(event:number){
    this.lista= this.listaComprasService.removerItem(event)

  }
}
// criamos o serviço de lista de compras e passamos ele dentro do constructor,neste momento ele fica acessivel a esse componente onde é possivel acessar seus metodos

// error : "no provider for" ListComprasService

// é preciso colocar o service no providers para todos os componentes ter acesso a eles dentro do modulo
