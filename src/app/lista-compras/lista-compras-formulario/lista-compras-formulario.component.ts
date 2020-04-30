import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ItemLista } from '../models/itemLista.model';
import { Categoria } from 'src/app/shared/models/categoria.model';


@Component({
  selector:'lista-compras-formulario',
  templateUrl:'lista-compras-formulario.component.html',
  styleUrls:['lista-compras-formulario.component.css']

})

export class ListaComprasFormularioComponent implements OnInit{

  itemLista:ItemLista;

  @Output()
  inserirItem: EventEmitter<ItemLista> = new EventEmitter<ItemLista>();



  ngOnInit(){

    const categoria : Categoria = {

      descricao: 'Selecione a Categoria'

    };

    this.itemLista =  {id: 0, nome: '', valor: 0, categoria}
  }

  onSubmit(){
    this.inserirItem.emit(this.itemLista);

  }

}
