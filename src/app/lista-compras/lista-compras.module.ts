import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//componentes
import {ListaComprasContainerComponent} from './lista-compras-container/lista-compras-container.component'
import {ListaComprasContadorComponent} from './lista-compras-contador/lista-compras-contador.component'
import {ListaComprasItemComponent} from './lista-compras-item/lista-compras-item.component'



// criamos os componentes  e importamos dentro do module
@NgModule({
  declarations:[
    ListaComprasContainerComponent,
    ListaComprasContadorComponent,
    ListaComprasItemComponent
  ],
  imports:[
    CommonModule
  ],
  exports:[
    ListaComprasContainerComponent
  ]
})

export class ListaComprasModule{

}
