import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ItemLista } from 'src/app/models/itemLista.model';


@Component({
  selector:'lista-compras-item',
  templateUrl:'lista-compras-item.component.html',
  styleUrls:['lista-compras-item.component.css']
})



export class ListaComprasItemComponent{
  @Input()
  item: ItemLista;

  // passo 2
  @Output()
  remover:EventEmitter<number> = new EventEmitter()

  // passo 3 criar a acao para o botao

  onRemove(){
    this.remover.emit(this.item.id)

  }

}
// existem dois 2 EventEmitter: o qual utilizamos pertence ao angular
