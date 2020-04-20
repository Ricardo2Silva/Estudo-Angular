import { Component, Input } from '@angular/core';
import { Itemlista } from 'src/app/models/itemLista.model';



@Component({
  selector:'lista-compras-listagem',
  templateUrl:'lista-compras-listagem.component.html',
  styleUrls:['lista-compras-listagem.component.css']
})

export class ListaComprasListagemComponent{
  @Input()
  listaCompras :Itemlista[]
}
